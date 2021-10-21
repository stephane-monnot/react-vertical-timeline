/* eslint no-param-reassign: 0 */
module.exports = {
  webpack: catalogWebpackConfig => {
    // Remove uglify
    catalogWebpackConfig.plugins.shift();

    catalogWebpackConfig.output.publicPath = '';
    return catalogWebpackConfig;
  },
};
