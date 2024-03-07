<?php
declare(strict_types=1);
namespace PicoCSS\Storybook\Command;

use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RegexIterator;
use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class MakeCommand
{
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        try {
            $stories = $this->getStories();
            foreach ($stories as $file) {
                $data = Yaml::parseFile($file->getPathname());
                $destination = dirname($file->getPathname());
                $title = $this->getTitleFromPath($destination);

                $options = [];
                foreach ($data['attributes'] as $attribute) {
                    if ($attribute['control'] === 'select' && isset($attribute['choices'])) {
                        $attributes[] = $attribute['name'];
                        $options[] = $attribute['choices'];
                    }

                    if ($attribute['control'] === 'boolean') {
                        $attributes[] = $attribute['name'];
                        $options[] = ['', $attribute['name']];
                    }
                }

                if (isset($data['nodeValueChoices'])) {
                    $options[] = $data['nodeValueChoices'];
                    $attributes[] = 'nodeValueChoices';
                }

                $combinations = [...$this->combinations($options)];
                var_dump($combinations);
                $args = $this->buildArgs($data['attributes']);
                $stories = $this->buildStories($combinations, $attributes, $data);
                $attr = '';
                $attrList = array_column($data['attributes'], 'name');
                foreach($attrList as $at) {
                    $attr .= sprintf("if (!isBool(%1\$s) && %1\$s) { el.setAttribute(getAttr('%1\$s'), %1\$s); } else { if (%1\$s) { el.%1\$s = '%1\$s'; } }\n    ", $at);
                }

                $contents = sprintf(\file_get_contents(getcwd() . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'stories.tpl'), basename($destination), $title,  implode(',',$attrList), $data['nodeName'], $attr, $args, $stories);
                \file_put_contents($destination . DIRECTORY_SEPARATOR . $data['id'] . '.stories.js', $contents);
                $io->success('Successfully parsed ' . $title);
            }
        } catch(\Exception $e) {
            $io->error('An error occurred: ' . $e->getMessage());
            return Command::FAILURE;
        }

        return Command::SUCCESS;
    }

    private function getChoiceKeyByValue(string $value, $data) : int|string|bool
    {
        if (isset($data['nodeValueChoices'])) {
            if (in_array($value, $data['nodeValueChoices'])) {
                return array_search($value, $data['nodeValueChoices']);
            }
        }

        foreach($data['attributes'] as $attribute) {
            if (isset($attribute['choices'])) {
                if (in_array($value, $attribute['choices'])) {
                    return array_search($value, $attribute['choices']);
                }
            }
        }

        return false; // shall never reach here, since $value is taken from $data itself
    }

    private function buildArgs(array $attributes): string
    {
        $args = '';
        foreach ($attributes as $attribute) {
            if ($attribute['control'] === 'select') {
                $args .= sprintf("    %s: {".PHP_EOL."        control: '%s',".PHP_EOL."        options: %s,".PHP_EOL."        description: '%s',".PHP_EOL."    },".PHP_EOL, $attribute['name'], $attribute['control'], json_encode($attribute['choices']), $attribute['required'] === true ? '**Mandatory** ' . $attribute['name'] : '**Optional** ' . $attribute['name']);
                continue;
            }
            $args .= sprintf("    %s: {".PHP_EOL."        control: '%s',".PHP_EOL."        description: '%s',".PHP_EOL."    },".PHP_EOL, $attribute['name'], $attribute['control'], $attribute['required'] === true ? '**Mandatory** ' . $attribute['name'] : '**Optional** ' . $attribute['name']);
        }
        return $args;
    }

    private function buildStories(array $combinations, array $attributes, array $data) : string
    {
        // create Default story with all required attributes
        $stories = "export const Default = {
  args: {".PHP_EOL;
        $stories .= sprintf("    nodeValue: '%s'," . PHP_EOL, $data['nodeValue']);
        foreach($data['attributes'] as $item) {
            if ($item['required'] === true && isset($item['value'])) {
                $stories .= sprintf("    %s: '%s',".PHP_EOL, $item['name'], $item['value']);
            }
        }
        $stories .="}
};" . PHP_EOL;

        // create all combinations
        foreach ($combinations as $combination) {
            $keys = array_map(function($value) use ($data) {
                return $this->getChoiceKeyByValue($value, $data);
            }, $combination);
            $nodeValue = array_pop($combination);
            $name = str_replace([' ','-'], '', ucwords(implode(' ', str_replace('-',' ',$keys))));
            $stories .= sprintf("export const %s = {" . PHP_EOL . "  args: {".PHP_EOL, $name);
            $stories .= sprintf("    nodeValue: '%s'," . PHP_EOL, $nodeValue);
            foreach ($data['attributes'] as $item) {
                if ($item['control'] === 'select' && isset($item['choices'])) {
                    $stories .= sprintf("    %s: '%s',".PHP_EOL, $item['name'], $combination[array_search($item['name'], $attributes)]);
                }
                if ($item['control'] === 'boolean') {
                    $boolVal = $combination[array_search($item['name'], $attributes)];
                    if ($boolVal === $item['name']) {
                        $stories .= sprintf("    %s: true,".PHP_EOL, $item['name']);
                    } else {
                        $stories .= sprintf("    %s: false,".PHP_EOL, $item['name']);
                    }
                    // $stories .= sprintf("    %s: '%s'," . PHP_EOL, $item['name'], );
                }
            }
            $stories .= "  },
};".PHP_EOL;
        }
        return $stories;
    }
    private function getTitleFromPath(string $destination) : string
    {
        return str_replace(' ', DIRECTORY_SEPARATOR, ucwords(str_replace(DIRECTORY_SEPARATOR, ' ', trim(str_replace(getcwd() . DIRECTORY_SEPARATOR . 'stories', '', $destination), DIRECTORY_SEPARATOR))));
    }

    private function getStories() : array
    {
        $stories = [];
        $pattern = '/\.yaml$/';
        $directoryIterator = new RecursiveDirectoryIterator(getcwd() . DIRECTORY_SEPARATOR . 'stories');
        $iteratorIterator = new RecursiveIteratorIterator($directoryIterator);
        $regexIterator = new RegexIterator($iteratorIterator, $pattern);
        foreach ($regexIterator as $file) {
            if (is_dir($file->getPathname()))
                continue;
            $stories[] = $file;
        }
        return $stories;
    }

    private function combinations(array $arrays): iterable
    {
        if ($arrays === []) {
            yield [];
            return;
        }

        $head = array_shift($arrays);

        foreach ($head as $elem) {
            foreach ($this->combinations($arrays) as $combination) {
                yield [$elem, ...$combination];
            }
        }
    }
}