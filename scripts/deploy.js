const path = require('path');
const { publish } = require('gh-pages');

const dir = path.resolve(path.join(__dirname, '../', 'storybook-static'));
publish(dir, {
  user: { name: 'nzbin' },
  message: 'ci: deploy ghpages'
});
