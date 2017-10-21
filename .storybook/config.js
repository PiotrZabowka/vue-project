import { configure } from '@storybook/vue';

const components = require.context('../src/components', true, /\.stories\.js?$/);

function loadStories() {
  require('../src/stories');
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
