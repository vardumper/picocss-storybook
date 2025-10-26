import type { Preview } from '@storybook/html-vite';
// import { action } from 'storybook/actions';
import { theme } from './manager';

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/addon-docs/blocks';

import "../stories/assets/css/storybook.css";
import '../stories/assets/js/main.js';
// import "../stories/assets/scss/pico.scss";
import "../node_modules/@picocss/pico/css/pico.css"

// import picocss from "./picocss";

const preview: Preview = {
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
                sourceState: 'shown',
            },
            story: {
                iframeHeight: '400px',
            },
            source: { type: 'code', language: 'html', dark: false, autoFormat: true },
            layout: 'fullscreen',
            theme: theme,
            // prepareForInline: (storyFn) => htmlToReactParser.parse(storyFn()),
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['Tokens', 'Components', 'HTML'],
            },
        },
        html: {
            prettier: {
                tabWidth: 4,
                useTabs: false,
                htmlWhitespaceSensitivity: 'strict',
            },
        },
    },
    decorators: [
        (Story) => {
            let event;
            if (typeof Event === 'function') {
                event = new Event('reload', { bubbles: true, cancelable: true });
            } else {
                // Fallback for very old browsers (rarely needed)
                event = document.createEvent('Event');
                event.initEvent('reload', true, true);
            }
            setTimeout(() => {
                window.dispatchEvent(event);
            }, 10);

            return Story();
        },
    ],
};

export default preview;
