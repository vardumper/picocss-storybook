<?php
declare(strict_types=1);

namespace PicoCSS\Storybook\Command;

use Silly\Command\Command;
use Silly\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class CreateComponentCommand extends Command
{
    public function __invoke(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $file = $input->getArgument('file');

        $file = getcwd() . '/' . $file;

        if (empty($file) || !file_exists($file)) {
            $io->error('No file provided or file does not exist. Please specify a valid YAML file.');

            return Command::FAILURE;
        }

        $data = Yaml::parseFile($file);
        if ($data === false) {
            $io->error('Failed to parse the YAML file. Please check the file syntax.');

            return Command::FAILURE;
        }

        $io->success('Component created successfully.');

        return Command::SUCCESS;
    }
    public function configure(): void
    {
        $this
            ->setName('create:component')
            ->setDescription('Create a new component')
            ->addArgument('file', InputArgument::REQUIRED, 'The name of the component');
    }
}
