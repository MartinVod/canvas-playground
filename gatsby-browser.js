/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const { RecoilRoot } = require('recoil');

require('./src/styles/global.css');

exports.onClientEntry = () => {
  // eslint-disable-next-line global-require
  require('babel-polyfill');
};

module.exports.wrapRootElement = function ({ element }) {
  return document.createElement(RecoilRoot, null, element);
};
module.exports.wrapRootElement = function ({ element, props }) {
  return document.createElement(RecoilRoot, null, element);
};
