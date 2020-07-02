const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.configFile = path.resolve(__dirname, '.eslintrc.js');
        return options;
      });
  },
  devServer: {
    disableHostCheck: true,
  },
};
