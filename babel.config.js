module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true, targets: { node: 10 } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
