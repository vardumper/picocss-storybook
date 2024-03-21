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
        \file_put_contents(getcwd() . Paths::SPECIFICATION_FILE, Yaml::dump($specs, 10, 2));

        $io->success(sprintf('Generated Combined Specification to file %s', \basename(getcwd() . Paths::SPECIFICATION_FILE)));

        return Command::SUCCESS;
    }
}
