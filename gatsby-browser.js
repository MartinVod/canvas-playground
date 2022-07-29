/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { RecoilRoot } from 'recoil';
import React from 'react';

require('./src/styles/global.css');

// module.exports.onClientEntry = () => {
//   // eslint-disable-next-line global-require
//   require('babel-polyfill');
// };

export const wrapPageElement = ({ element, props }) => (
  <RecoilRoot {...props}>{element}</RecoilRoot>
);
