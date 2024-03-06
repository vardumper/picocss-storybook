/** @type { import('@storybook/html-webpack5').StorybookConfig } */

import "../stories/assets/css/storybook.css";
import "../stories/assets/js/main.js";
// import "../stories/assets/scss/pico.scss";
import "../node_modules/@picocss/pico/css/pico.css"

// import picocss from "./picocss";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: "tag",
      defaultName: "Docs",
      canvas: {
        sourceState: "shown",
      },
      story: {
        iframeHeight: "400px",
      },
      source: { type: "code" },
      layout: "fullscreen",
    },
    layout: "fullscreen",
  },
};

export default preview;
