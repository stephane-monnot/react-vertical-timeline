/* eslint no-param-reassign: 0 */
module.exports = {
  webpack: catalogWebpackConfig => {
    catalogWebpackConfig.output.publicPath = '';
    return catalogWebpackConfig;
  },
};
