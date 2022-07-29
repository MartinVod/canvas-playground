const React = require('react');
import { RecoilRoot } from 'recoil';

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'my-body-class',
  });
};
// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
