const React = require('react');
const { RecoilRoot } = require('recoil');

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'my-body-class',
  });
};

// Wraps every page in a component
module.exports.wrapPageElement = function ({ element, props }) {
  return document.createElement(RecoilRoot, null, element);
};
module.exports.wrapRootElement = function ({ element, props }) {
  return document.createElement(RecoilRoot, null, element);
};

// exports.wrapPageElement = ({ element, props }) => {
//   return <RecoilRoot {...props}>{element}</RecoilRoot>;
// };
