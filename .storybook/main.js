/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: {
    disableTelemetry: true,
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    // '@whitespace/storybook-addon-html',
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  staticDirs: ["../stories/assets/"],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: (config) => {
    return {
      ...config,
    };
  },
  docs: {
    toc: true,
    autodocs: "tag",
    defaultName: "Documentation",
    canvas: {
      sourceState: "shown",
    },
    source: { type: "code" },
  },
};
export default config;