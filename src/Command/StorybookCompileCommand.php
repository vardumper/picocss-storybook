<?php
declare(strict_types=1);

namespace PicoCSS\Storybook\Command;

use PicoCSS\Storybook\Config\Paths;
use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;
use function BenTools\CartesianProduct\cartesian_product;

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

    private function buildStoryOptions(string $component, array $attributes, ?string $text = null): array
    {
        $options = [];

        if ($text) {
            $options = [
                'text' => [
                    $this->faker->sentence(rand(3, 5), true),
                ],
            ];
        }

        foreach ($attributes as $attribute => $values) {
            // skip non-required attributes
            if (empty($values['required'])) {
                continue;
            }

            $type = $values['type'];
            if ($type === 'boolean') {
                $options[$attribute] = [true, false];
            } elseif ($type === 'enum') {
                $options[$attribute] = $values['choices'];
            } elseif ($type === 'string') {
                $options[$attribute] = isset($values['defaultValue'])
                    ? [$values['defaultValue']]
                    : [$this->getDefaultValue($component, $attribute, $values)];
            }
        }

        return $options;
    }

    private function getDefaultValue(string $element, string $attribute, array $properties): int|bool|string
    {
        // fallback to attribute types file
        $htmlAttributes = Yaml::parseFile(getcwd() . Paths::HTML_ATTRIBUTE_TYPES);
        $match = $htmlAttributes[current(preg_grep(sprintf('/^%s\./', $attribute), array_keys($htmlAttributes)))];
        $fallBackType = $match['type'];

        // preferred from elements file
        try {
            $htmlAttributes = Yaml::parseFile(getcwd() . Paths::ELEMENT_DESCRIPTION_FILE);
            $type = isset($htmlAttributes[$element]['attributes'][$attribute])
            ? $htmlAttributes[$element]['attributes'][$attribute]
            : $fallBackType;
        } catch (\Exception) {
        }

        $choices = false;
        if (str_contains($type, ' | ')) {
            $choices = explode(' | ', trim($type));
            $type = 'enum';
        }

        try {
            // either a defined defaultValue or a random value
            if (isset($properties['defaultValue'])) {
                return $properties['defaultValue'];
            }

            return match ($type) {
                'string' => $this->faker->words(rand(2, 4), true),
                'datetime' => $this->faker->dateTimeThisYear()->format('Y-m-d\TH:i:s'),
                'enum' => isset($properties['required']) ? $this->faker->randomElement($choices ?? $properties['choices']) : '',
                'boolean' => $this->faker->boolean(),
                'color' => $this->faker->hexColor(),
                'integer' => $this->faker->randomNumber(3, true),
                'uri' => $this->faker->url(),
                'script' => 'console.log("Hello, world!")',
                'browsing_context_name' => $this->faker->randomElement(['_blank', '_self', '_parent', '_top']),
                'mime_type' => $this->faker->randomElement(['text/html', 'application/pdf', 'image/png']),
                'referrer_policy' => $this->faker->randomElement($properties['choices']),
                'charset' => $this->faker->randomElement(['UTF-8', 'ISO-8859-1']),
                'language_iso' => $this->faker->languageCode(),
            };
        } catch (\Exception $e) {
            return $properties['defaultValue'];
        }
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

            // do not render children, these are part of a complex type else (eg: tbody, tr td, caption, figcaption, etc)
            if (isset($properties['parent'])) {
                continue;
            }

            // modify description
            $description = html_entity_decode(preg_replace("/\b{$component}\b/", "`{$component}`", $properties['description'], 1));
            if (!empty($properties['children'])) {
                $description .= ' Allowed children: `' . implode('`, `', $properties['children']) . '`.';
            }
            $properties['description'] = $description;

            if ((!isset($properties['parent']) || !isset($properties['unique_per_parent'])) && !isset($properties['children'])) {
                $folder = ucfirst($properties['level']) . ' Elements';
                $folderDirname = $this->stringToDirname($folder);
                $dest = $destination . DIRECTORY_SEPARATOR . $folderDirname . DIRECTORY_SEPARATOR . $this->stringToDirname($properties['name']);
                if (!is_dir($dest)) {
                    mkdir($dest, 0777, true);
                }

                if (isset($properties['text'])) {
                    $properties['text'] = $this->faker->words(3, true);
                }

                // get all required args, including nodeValue (text)
                if (isset($properties['attributes'])) {
                    $options = $this->buildStoryOptions($component, $properties['attributes'], $properties['text'] ?? null);
                }

                // build stories based on required arguments
                if (!empty($options)) {
                    $stories = cartesian_product($options)->asArray();
                }

                // set fake default Values
                if (isset($properties['attributes'])) {
                    foreach ($properties['attributes'] as $attr => $values) {
                        $properties['attributes'][$attr]['defaultValue'] = $this->getDefaultValue($component, $attr, $values);
                    }
                }

                // variables passed to twig
                $data = [
                    'category' => $category,
                    'folder' => $folder,
                    'component' => $properties['name'],
                    'element' => $component,
                    'filename' => str_replace(getcwd(), '', $dest . DIRECTORY_SEPARATOR . $component . '.stories.js'),
                    'properties' => $properties,
                    'stories' => $stories ?? [],
                ];
                if ($component === 'ins') {
                    var_dump($data);
                }
                $js = $this->twig->render('element.stories.twig', $data);
                file_put_contents($dest . DIRECTORY_SEPARATOR . $this->stringToDirname($properties['name']) . '.stories.js', $js);
            }
        }
    }
}
