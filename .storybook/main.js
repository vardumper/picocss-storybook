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
    "storybook-addon-pseudo-states",
    '@storybook/addon-a11y',
    // "@storybook/addon-webpack5-compiler-swc",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
    "@storybook/addon-webpack5-compiler-swc"
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
    defaultName: "Docs",
    canvas: {
      sourceState: "shown",
    },
    source: { type: "code" },
  },
};
export default config;