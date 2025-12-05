import type { Preview } from "@storybook/react-vite";
import "../src/styles/index.scss";


const preview: Preview = {
  parameters: {
    globals: {
      backgrounds: { value: 'dark' }
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i
      }
    }
  },
  initialGlobals: {
    backgrounds: { value: 'dark' }
  }
};

export default preview;
