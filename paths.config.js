const { resolve } = require('path');

module.exports = {
  '@application': resolve(__dirname, 'src', 'application'),
  '@component': resolve(__dirname, 'src', 'components'),
  '@style': resolve(__dirname, 'src', 'styles'),
  '@type': resolve(__dirname, 'src', 'types'),
  '@util': resolve(__dirname, 'src', 'utils'),
};
