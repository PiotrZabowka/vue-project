import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CocoShambo from './CocoShambo';

storiesOf('Components/Coco Shambo', module)
  .add('to Storybook', () => ({
    components: { CocoShambo },
    template: '<coco-shambo >Hello</coco-shambo>',
    methods: {},
  }));
