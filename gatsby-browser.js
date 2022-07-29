/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
const React = require('react');
const { RecoilRoot } = require('recoil');

require('./src/styles/global.css');

exports.onClientEntry = () => {
  // eslint-disable-next-line global-require
  require('babel-polyfill');
};

module.exports.wrapRootElement = function ({ element }) {
  return <RecoilRoot>{element}</RecoilRoot>;
};
module.exports.wrapPageElement = function ({ element, props }) {
  return <RecoilRoot>{element}</RecoilRoot>;
};
