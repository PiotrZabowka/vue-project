/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HelloWorld from './HelloWorld.vue';

storiesOf('Components/Hello world', module).add('to Storybook', () => ({
  components: { HelloWorld },
  template: '<HelloWorld />',
  methods: {},
}));

/* eslint-enable react/react-in-jsx-scope */
