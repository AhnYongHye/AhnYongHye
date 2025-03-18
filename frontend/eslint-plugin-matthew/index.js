const componentFolderMatch = require('./component-folder-match');
const componentPropsInterface = require('./component-props-interface');
const enforceIsBoolean = require('./enforce-is-boolean');
const pageFolderMatch = require('./page-folder-match');
const recommendArrowFunction = require('./recommend-arrow-function');
const variableNaming = require('./variable-naming');

const plugin = {
  configs: {
    recommended: [
      {
        plugins: {
          matthew: {
            rules: {
              'enforce-is-boolean': enforceIsBoolean,
              'variable-naming': variableNaming,
              'page-folder-match': pageFolderMatch,
              'component-folder-match': componentFolderMatch,
              'recommend-arrow-function': recommendArrowFunction,
              'component-props-interface': componentPropsInterface,
            },
          },
        },
        rules: {
          'matthew/enforce-is-boolean': 'error',
          'matthew/variable-naming': 'error',
          'matthew/page-folder-match': 'error',
          'matthew/component-folder-match': 'error',
          'matthew/recommend-arrow-function': 'warn',
          'matthew/component-props-interface': 'error',
        },
      },
    ],
  },
};

module.exports = plugin;
