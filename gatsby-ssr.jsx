const React = require('react');
const { RecoilRoot } = require('recoil');

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'my-body-class',
  });
};
module.exports.wrapRootElement = function ({ element, props }) {
  return <RecoilRoot>{element}</RecoilRoot>;
};

// Wraps every page in a component
module.exports.wrapPageElement = function ({ element, props }) {
  return <RecoilRoot>{element}</RecoilRoot>;

};

// exports.wrapPageElement = ({ element, props }) => {
//   return <RecoilRoot {...props}>{element}</RecoilRoot>;
// };
