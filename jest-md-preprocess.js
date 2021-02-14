const transform = require('frontmatter-markdown-loader');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
    });

    return result;
  },
};
