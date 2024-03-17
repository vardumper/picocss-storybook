<?php
declare(strict_types=1);

namespace PicoCSS\Storybook\Command;

use PicoCSS\Storybook\Config\Paths;
use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class HtmlSpecificationCommand
{
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        try {
            $htmlAttributes = Yaml::parseFile(getcwd() . Paths::ATTRIBUTE_DESCRIPTION_FILE);
            $htmlElements = Yaml::parseFile(getcwd() . Paths::ELEMENT_DESCRIPTION_FILE);
            $htmlElementNames = Yaml::parseFile(getcwd() . Paths::ELEMENT_NAMES_FILE);

            $htmlAttributes = $this->sortHtmlAttributes($htmlAttributes);
            $htmlElements = $this->sortHtmlElements($htmlElements, $htmlAttributes, $htmlElementNames);
            // re-read the attributes in case it was modified above
            $htmlAttributes = Yaml::parseFile(getcwd() . Paths::ATTRIBUTE_DESCRIPTION_FILE);

            $this->generateHtmlSpecification($htmlElements, $htmlAttributes);
            $this->createTypeEnum($htmlAttributes, $htmlElements);
        } catch (\Exception $e) {
            $io->error('Failed to generate HTML5 specification with error: ' . $e->getMessage());

            return Command::FAILURE;
        }
        $io->success(sprintf('Generate HTML5 specification to file %s', basename(Paths::HTML_SPECIFICATION_FILE)));

        return Command::SUCCESS;
    }

    private function createTypeEnum(array $htmlAttributes, array $htmlElements): void
    {
        // $attribTypes = [];
        $types = [];
        foreach ($htmlAttributes as $attribute => $attributeData) {
            // $attribTypes[$attribute . '.' . $attributeData['type']] = [];
            $types[] = $attributeData['type'];
        }

        foreach ($htmlElements as $element => $elementData) {
            if (isset($elementData['attributes'])) {
                foreach ($elementData['attributes'] as $attribute => $attributeData) {
                    if (is_string($attributeData)) {
                        if (!str_contains($attributeData, '|')) {
                            // $attribTypes[$attribute . '.' . $attributeData] = [];
                            $types[] = $attributeData;
                        }
                    }
                }
            }
        }

        // ksort($attribTypes);
        ksort($types);
        // file_put_contents(getcwd() . Paths::HTML_ATTRIBUTE_TYPES, Yaml::dump($attribTypes, 100, 2));
        file_put_contents(getcwd() . Paths::HTML_UNIQUE_ATTRIBUTE_TYPES, Yaml::dump(array_values(array_unique($types)), 100, 2));
    }

    private function generateHtmlSpecification(array $htmlElements, array $htmlAttributes): void
    {
        foreach ($htmlElements as $element => $data) {
            // get attributes
            if (isset($data['attributes'])) {
                foreach ($data['attributes'] as $attribute => $attrData) {
                    $htmlElements[$element]['attributes'][$attribute] = $htmlAttributes[$attribute];
                }
            }
        }

        // store specs as YAML, for later use
        file_put_contents(getcwd() . Paths::HTML_SPECIFICATION_FILE, Yaml::dump($htmlElements, 100, 2));
        // file_put_contents(getcwd() . str_replace('.yaml', '.min.yaml', Paths::HTML_SPECIFICATION_FILE), Yaml::dump($htmlElements, 0));
        // file_put_contents(getcwd() . str_replace('.yaml', '.php', Paths::HTML_SPECIFICATION_FILE), '<?php return ' . $this->varexport($htmlElements, true) . ';');
    }

    /**
     * Sorts HTML elements and stores sorted HTML elements list
     */
    private function sortHtmlElements(array $htmlElements, array $htmlAttributes = [], array $htmlElementNames = []): array
    {
        // sort elements
        ksort($htmlElements);

        $missingAttributes = false;
        foreach ($htmlElements as $el => $elData) {
            // sort all lists
            if (isset($elData['attributes'])) {
                $at = $elData['attributes'];
                ksort($at);

                // look for new attributes
                foreach ($at as $attributeName => $attributeType) {
                    if (!isset($htmlAttributes[$attributeName])) {
                        $htmlAttributes[$attributeName] = [
                            'type' => $attributeType,
                        ];
                        $missingAttributes = true;
                    }
                }

                $htmlElements[$el]['attributes'] = $at;
            }

            // sort children
            if (isset($elData['children'])) {
                $ch = $htmlElements[$el]['children'];
                sort($ch);
                $htmlElements[$el]['children'] = $ch;
            }

            // set name at the beginning of the array
            if (!isset($elData['name'])) {
                unset($elData['name']);
            }
            $name = isset($htmlElementNames[$el]) ? $htmlElementNames[$el] : ucfirst($el);
            $htmlElements[$el] = [
                'name' => $name,
            ] + $htmlElements[$el];

            // convert parent to array if it has pipes
            if (!isset($elData['parent']) && str_contains($el, '|')) {
                $htmlElements[$el]['parent'] = explode(' | ', $el);
            }
        }

        // update attribute description file in case we find new attributes
        if ($missingAttributes) {
            file_put_contents(getcwd() . Paths::ATTRIBUTE_DESCRIPTION_FILE, Yaml::dump($htmlAttributes, 100, 2));
        }

        file_put_contents(getcwd() . Paths::ELEMENT_DESCRIPTION_FILE, Yaml::dump($htmlElements, 100, 2));

        return $htmlElements;
    }

    /**
     * Sorts and stores sorted HTML attributes list
     */
    private function sortHtmlAttributes(array $htmlAttributes): array
    {
        ksort($htmlAttributes); // by keys
        foreach ($htmlAttributes as $attr => $attrData) {
            // sort all lists
            if (isset($attrData['elements'])) {
                $el = $htmlAttributes[$attr]['elements'];
                sort($el);
                $htmlAttributes[$attr]['elements'] = $el;
            }

            if (isset($attrData['choices'])) {
                $ch = $htmlAttributes[$attr]['choices'];
                sort($ch);
                $htmlAttributes[$attr]['choices'] = $ch;
            }
        }

        file_put_contents(getcwd() . Paths::ATTRIBUTE_DESCRIPTION_FILE, Yaml::dump($htmlAttributes, 100, 2));

        return $htmlAttributes;
    }

    private function varexport($expression, $return = false)
    {
        $export = var_export($expression, true);
        $export = preg_replace('/^([ ]*)(.*)/m', '$1$1$2', $export);
        $array = preg_split("/\r\n|\n|\r/", $export);
        $array = preg_replace(["/\s*array\s\($/", "/\)(,)?$/", "/\s=>\s$/"], [null, ']$1', ' => ['], $array);
        $export = join(PHP_EOL, array_filter(['['] + $array));
        if ((bool)$return) {
            return $export;
        }

        echo $export;
    }
}
