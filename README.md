# PicoCSS Storybook

Storybook Skeleton for the PicoCSS Default Theme.

# Requirements

You need _NPM_ and _Yarn_ installed on your machine to work with Storybook. On macOS, you can install them both with brew `brew install npm yarn`.
Additionally, I decided to use _PHP_ to render Twig Templates. On macOS PHP is installed with `brew install php`.

# Why does this repository exist?

Storybook is a great tool to develop and test components in isolation. It is also a great tool to document components. This repository is a skeleton for the PicoCSS Default Theme. It is a starting point to develop your own designs based on PicoCSS and document components.

# Getting Started

To get started, first clone the repository.

```bash
git clone git@github.com:vardumper/picocss-storybook.git
cd picocss-storybook
```

Then install composer dependencies and run the console command which generates the stories based on their YAML configurations.

```bash
composer install
bin/console
```