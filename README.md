# PicoCSS Storybook

Storybook Skeleton for the PicoCSS Default Theme.

# Requirements

You need _NPM_ and _Yarn_ installed on your machine to work with Storybook. On macOS, you can install them both with brew `brew install npm yarn`.
Additionally, _PHP_ and __Twig__ are used to compile Stories. On macOS PHP is installed with `brew install php`.

# Why does this repository exist?

Storybook is a great tool to develop and test components in isolation. It is also a great tool to document components. This repository is a skeleton for the PicoCSS Default Theme. It is a starting point to develop your own designs based on PicoCSS and document components.

# Goals

The goal of this repository is to provide a starting point for developing PicoCSS Themes and Color Schemes.
Starting off with a component library utilizing the PicoCSS Default Theme. As an extra benefit, this repo can produce Symfony UX Twig Components, that are ready to be used in Symfony Projects. This can be done by autoloading the generated Twig Components namespace into a Symfony Project.

# Getting Started

To get started, first clone the repository.

```bash
git clone git@github.com:vardumper/picocss-storybook.git
cd picocss-storybook
```

Then install composer dependencies and run the console command which generates the stories based on their YAML configurations.

```bash
composer install
yarn install
bin/console
```

Finally, you can start Storybook `yarn storybook`.

# Roadmap

- [ ] Remove pico.css from preview.js and instead use a custom pico.scss without the default theme. Move styles into a category/folder/_component-name.scss file. Decide wether to autogenerate or handcraft them.
- [ ] Finish all HTML5 Elements including complex or composite components.
- [ ] Auto generate templates for different technologies (Twig, React, Vue, Angular, Svelte, etc.)