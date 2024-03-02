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
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
    "@storybook/addon-webpack5-compiler-swc",
  ],
  staticDirs: ["../stories/assets/"],
  framework: {
    name: "@storybook/server-webpack5",
    options: {
      builder: {
        useSWC: true, // This flag is automatically set by Storybook for all new Webpack5 projects (except Angular) in Storybook 7.6
      },
    },
  },
  swc: (config, options) => {
    return {
      ...config,
      // Apply your custom SWC configuration
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
