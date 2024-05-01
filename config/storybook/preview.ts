import type { Preview } from '@storybook/react';
import '../../src/app/styles/themes/darkTheme.scss';
import '../../src/app/styles/themes/lightTheme.scss';

const preview: Preview = {
  decorators: [],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
