import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Navbar.story');
  require('../src/stories/Form.story');
  require('../src/stories/Widget.story');
}

configure(loadStories, module);
