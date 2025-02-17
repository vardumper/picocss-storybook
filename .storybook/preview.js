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
  // decorators: [
  //   // 👇 Defining the decorator in the preview file applies it to all stories
  //   (Story, { parameters }) => {
  //     // 👇 Make it configurable by reading from parameters
  //     const { pageLayout } = parameters;
  //     switch (pageLayout) {
  //       // case 'page':
  //       //   return `<div class="container-fluid">` + Story() + `</div>`;
  //       // case 'page-mobile':
  //       //   return Story();
  //       default:
  //         // In the default case, don't apply a layout
  //         const container = document.getElementById('story-root');
  //         // Story() returns the story's HTML string, so set that as the container's innerHTML:
  //         return container.innerHTML = Story(); 
  //         // return container.innerHTML; // Updated to return the innerHTML directly
  //     }
  //   },
  // ],
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
