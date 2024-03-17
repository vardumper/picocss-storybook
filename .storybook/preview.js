/** @type { import('@storybook/html-webpack5').StorybookConfig } */
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";

// import { addParameters } from "@storybook/html";
// import { Parser } from "html-to-react";

import "../stories/assets/css/storybook.css";
import "../stories/assets/js/main.js";
import "../stories/assets/scss/pico.scss";
// import "../node_modules/@picocss/pico/css/pico.css"

// import picocss from "./picocss";

// addParameters({
//   docs: {
//     prepareForInline: (storyFn) => htmlToReactParser.parse(storyFn()),
//   },
// });

const preview = {
  parameters: {
    controls: {
      expanded: true,
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
      // prepareForInline: (storyFn) => htmlToReactParser.parse(storyFn()),
    },
    layout: "fullscreen",
    // html: {
    //   prettier: {
    //     tabWidth: 4,
    //     useTabs: false,
    //     htmlWhitespaceSensitivity: "strict",
    //   },
    // },
  },
};

export default preview;
