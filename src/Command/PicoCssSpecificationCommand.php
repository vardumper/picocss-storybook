<?php
declare(strict_types=1);
/**
 * This class is supposed to enrich/inject PicoCSS specific stuff into the standard HTML5 specification.
 * Idea: use a folder structure to store yaml configs in. Whenever we merge in PicoCSS specific stuff, we tag the component, and add status and a link to the Docs
 * @example PicoCSS use of role="button" to turn elements into buttons.
 * @example PicoCSS use of class="primary|secondary|contrast" to colorize elements.
 */

namespace PicoCSS\Storybook\Command;

use PicoCSS\Storybook\Config\Paths;
use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class PicoCssSpecificationCommand
{
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $picoSpecs = Yaml::parseFile(getcwd() . Paths::PICO_DESCRIPTION_FILE);
        $htmlSpecs = Yaml::parseFile(getcwd() . Paths::HTML_SPECIFICATION_FILE);

        $specs = \array_merge_recursive($htmlSpecs, $picoSpecs);

        /** @todo add generic attributes to every element (eg: tooltip, class button etc.) */

        $specs = $htmlSpecs;

        // global CSS attributes that can be used on _ANY_ element
        if (array_key_exists('*', $picoSpecs)) {
            foreach ($htmlSpecs as $element => $props) {
                if (!isset($specs[$element]['attributes'])) {
                    $specs[$element]['attributes'] = $picoSpecs['*']['attributes'];

                    continue;
                }
                $specs[$element]['attributes'] = \array_merge_recursive($specs[$element]['attributes'], $picoSpecs['*']['attributes']);
            }
        }

        unset($specs['*']);

        // Regex matching
        foreach (array_keys($picoSpecs) as $pattern) {
            if (@preg_match($pattern, '') !== false) {
                $keys = array_keys($specs);
                $result = preg_grep($pattern, $keys);

                foreach ($result as $key) {
                    if (!isset($htmlSpecs[$key]['attributes'])) {
                        $specs[$key]['attributes'] = $picoSpecs[$pattern]['attributes'];

                        continue;
                    }
                    $specs[$key]['attributes'] = \array_merge_recursive($specs[$key]['attributes'], $picoSpecs[$pattern]['attributes']);
                }

                unset($picoSpecs[$pattern]); // remove regex key after processing (if there)
            }
        }

        // deep merge everything else
        $specs = \array_merge_recursive($specs, $picoSpecs);
        \file_put_contents(getcwd() . Paths::SPECIFICATION_FILE, Yaml::dump($specs, 10, 2));

        $io->success(sprintf('Generated Combined Specification to file %s', \basename(getcwd() . Paths::SPECIFICATION_FILE)));

        return Command::SUCCESS;
    }
}
