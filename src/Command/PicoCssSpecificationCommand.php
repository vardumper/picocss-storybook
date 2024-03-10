<?php
declare(strict_types=1);
/**
 * This class is supposed to enrich/inject PicoCSS specific stuff into the standard HTML5 specification.
 * Idea: use a folder structure to store yaml configs in. Whenever we merge in PicoCSS specific stuff, we tag the component, and add status and a link to the Docs
 * @example PicoCSS use of role="button" to turn elements into buttons.
 * @example PicoCSS use of class="primary|secondary|contrast" to colorize elements.
 */

namespace PicoCSS\Storybook\Command;

use Silly\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class PicoCssSpecificationCommand
{
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        /** @todo implement */
        return Command::SUCCESS;
    }
}
