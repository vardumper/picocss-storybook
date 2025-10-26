import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite'
  },
  addons: ["@storybook/addon-links", // {
  '@storybook/addon-a11y', //   name: "storybook-addon-sass-postcss",
  //   options: {
  //     rule: {
  //       test: /\.(scss|sass)$/i,
  //     },
  //   },
  // },
  "@chromatic-com/storybook", "@storybook/addon-docs"],
  staticDirs: ["../stories/assets/"],
  framework: {
    name: '@storybook/html-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts'
      }
    }
  },
  docs: {
    toc: true,
    defaultName: "Documentation",

    canvas: {
      sourceState: "shown"
    },

    source: {
      type: "code"
    }
  },
};

export default config;
