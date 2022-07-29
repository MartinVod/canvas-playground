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

exports.wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
