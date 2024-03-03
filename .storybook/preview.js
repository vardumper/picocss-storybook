/** @type { import('@storybook/html').Preview } */

import "../stories/assets/css/storybook.css";
import "../stories/assets/js/main.js";
// import "../stories/assets/scss/pico.scss";
import "../node_modules/@picocss/pico/css/pico.css"

import picocss from "./picocss";
const fetchStoryHtml = async (url, path, params, storyContext) => {
  const fetchUrl = new URL(`${url}/${path}`);
  fetchUrl.search = new URLSearchParams(params).toString();
  const response = await fetch(fetchUrl, {
    mode: "cors",
    headers: {
      Accept: "text/html",
    },
  });
  const html = await response.text();
  return html;
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    server: {
      url: `http://localhost:8008/storybook`,
      fetchStoryHtml,
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
    },
  },
};

export default preview;
