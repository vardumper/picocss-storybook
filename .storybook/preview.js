/** @type { import('@storybook/html-webpack5').StorybookConfig } */
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";

import "../stories/assets/css/storybook.css";
import "../stories/assets/js/main.js";
// import "../stories/assets/scss/pico.scss";
import "../node_modules/@picocss/pico/css/pico.css"

// import picocss from "./picocss";

const preview = {
  parameters: {
    status: {
      statuses: {
        docs: {
          background: "#0000ff",
          color: "#ffffff",
          description: "Open this component in the docs",
        },
        pico: {
          background: "#0000ff",
          color: "#ffffff",
          description: "Open this component in the docs",
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
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
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
    },
  },
};

export default preview;
