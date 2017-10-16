import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Navbar.story');
  require('../src/stories/Form.story');
  require('../src/stories/Widget.story');
  require('../src/stories/IndexPageLayout.story');
}

configure(loadStories, module);
