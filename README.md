# PicoCSS Storybook

Storybook Skeleton for the PicoCSS Default Theme.

# Requirements

You need _NPM_ and _Yarn_ installed on your machine to work with Storybook. On macOS, you can install them both with brew `brew install npm yarn`.
Additionally, _PHP_ and __Twig__ are used to compile Stories. On macOS PHP is installed with `brew install php`.

# Why does this repository exist?

Storybook is a great tool to develop and test components in isolation. It is also a great tool to document components. This repository is a skeleton for the PicoCSS Default Theme. It is a starting point to develop your own designs based on PicoCSS and document components.

# Goals

The goal of this repository is to provide a starting point for developing PicoCSS Themes and Color Schemes.
Starting off with a component library utilizing the PicoCSS Default Theme.

# Getting Started

To get started, first clone this repository.

```bash
git clone git@github.com:vardumper/picocss-storybook.git
cd picocss-storybook
```
And run:

```bash
composer install
# merge PicoCSS sepcification into the HTML5 specification
php bin/console picocss
# render stories for storybook (to be replaced with generators in extended-htmldocument)
php bin/console storybook
yarn install
yarn storybook
```

This will install Composer and Yarn dependencies, ~build the storybook~, and finally start Storybook for you.
