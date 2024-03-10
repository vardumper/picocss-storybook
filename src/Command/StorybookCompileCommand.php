<?php
declare(strict_types=1);

namespace PicoCSS\Storybook\Command;

use PicoCSS\Storybook\Config\Paths;
use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class StorybookCompileCommand
{
    public function __construct(
        private readonly \Twig\Environment $twig,
        private readonly \Faker\Generator $faker,
    ) {
    }
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        if (!is_dir(getcwd() . DIRECTORY_SEPARATOR . 'node_modules' . DIRECTORY_SEPARATOR . '@picocss')) {
            throw new \Exception('You need to install Storybook and PicoCSS first. Execute `yarn install`, the retry.');
        }

        $this->createColorTokens($io);
        $this->createThemeColorLightTokens($io);
        $this->createThemeColorDarkTokens($io);
        $this->createComponentsFromHtmlSpecifications($io);

        return Command::SUCCESS;
    }

    private function stringToDirname(string $string): string
    {
        return strtolower(str_replace(' ', '-', str_replace(['-', '_'], ' ', $string)));
    }

    private function getDestination(string $category, string $folder): string
    {
        $category = $this->stringToDirname($category);
        $folder = $this->stringToDirname($folder);
        $path = getcwd() . DIRECTORY_SEPARATOR . 'stories' . DIRECTORY_SEPARATOR . $category . DIRECTORY_SEPARATOR . $folder;
        if (!is_dir($path)) {
            mkdir($path, 0777, true);
        }

        return $path;
    }

    private function createThemeColorLightTokens(SymfonyStyle $io)
    {
        $category = 'Tokens';
        $folder = 'Colors';
        $component = 'Light Theme';
        $destination = $this->getDestination($category, $folder);

        /**
         * @todo implement
         */
        $storyPath = $destination . DIRECTORY_SEPARATOR . $this->stringToDirname($component) . '.stories.js';
        $io->success('Created ' . basename($storyPath));
    }

    private function createThemeColorDarkTokens(SymfonyStyle $io)
    {
        $category = 'Tokens';
        $folder = 'Colors';
        $component = 'Dark Theme';
        $destination = $this->getDestination($category, $folder);

        /**
         * @todo implement
         */
        $storyPath = $destination . DIRECTORY_SEPARATOR . $this->stringToDirname($component) . '.stories.js';
        $io->success('Created ' . basename($storyPath));
    }

    private function createColorTokens(SymfonyStyle $io)
    {
        $category = 'Tokens';
        $folder = 'Colors';
        $component = 'All colors';
        $destination = $this->getDestination($category, $folder);
        $scss = file(getcwd() . Paths::PICO_COLORS);

        $colors = [];
        /** eg:
         * $red-50: #faeeeb;
         * $red: $red-550;
         */
        foreach ($scss as $line) {
            // Match color definition lines
            if (preg_match('/^\$(\w+(-\d+)?): (#\w+);/', $line, $matches)) {
                $colorId = $matches[1];
                $colorName = strpos($colorId, '-') ? strtok($colorId, '-') : $colorId;
                $color = $matches[3];

                $colors[$colorName]['colors'][$colorId] = [
                    'value' => trim($color),
                ];
            }

            // Match default color lines
            if (preg_match('/^\$(\w+): \$(\w+(-\d+)?);/', $line, $matches)) {
                $colorName = $matches[1];
                $defaultId = $matches[2];

                $colors[$colorName]['defaultId'] = $defaultId;
            }
        }

        $js = $this->twig->render('colors.js.twig', [
            'folder' => $folder,
            'category' => $category,
            'component' => $component,
            'colors' => $colors,
        ]);
        $storyPath = $destination . DIRECTORY_SEPARATOR . $this->stringToDirname($component) . '.stories.js';
        file_put_contents($storyPath, $js);
        $io->success('Created ' . basename($storyPath));
    }

    private function createComponentsFromHtmlSpecifications(SymfonyStyle $io): void
    {
        $destination = getcwd() . DIRECTORY_SEPARATOR . 'stories' . DIRECTORY_SEPARATOR . 'html';
        $category = 'HTML5';
        $i = 0;

        $htmlElements = Yaml::parseFile(getcwd() . Paths::HTML_SPECIFICATION_FILE);
        foreach ($htmlElements as $component => $properties) {
            // void elements aren't visible nor styled
            if ($properties['level'] === 'void') {
                $io->warning('Skipping ' . $component . ' since it\'s neither block nor inline level and thus needs no styling.');

                continue;
            }

            // do not render children, these are part of a complex type else (eg: tbody, tr td)
            if (isset($properties['parent'])) {
                continue;
            }

            // $properties['description'] = str_replace($component, "`$component`", $properties['description']);
            $properties['description'] = html_entity_decode(preg_replace("/\b{$component}\b/", "`{$component}`", $properties['description']));

            if ((!isset($properties['parent']) || !isset($properties['unique_per_parent'])) && isset($properties['text'])) {
                $folder = ucfirst($properties['level']) . ' Elements';
                // $componentName = $properties['name'];
                $folderDirname = $this->stringToDirname($folder);
                $dest = $destination . DIRECTORY_SEPARATOR . $folderDirname . DIRECTORY_SEPARATOR . $this->stringToDirname($properties['name']);
                if (!is_dir($dest)) {
                    mkdir($dest, 0777, true);
                }

                $js = $this->twig->render('element.stories.twig', [
                    'category' => $category,
                    'folder' => $folder,
                    'component' => $properties['name'],
                    'element' => $component,
                    'filename' => str_replace(getcwd(), '', $dest . DIRECTORY_SEPARATOR . $component . '.stories.js'),
                    'properties' => $properties,
                ]);
                file_put_contents($dest . DIRECTORY_SEPARATOR . $this->stringToDirname($properties['name']) . '.stories.js', $js);
            }
        }
    }
}
