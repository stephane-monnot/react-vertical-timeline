module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // This is the magic line:
        // If BABEL_ENV is 'es6', we turn OFF module conversion (keep imports).
        // Otherwise, we let it convert to CommonJS (require).
        modules: process.env.BABEL_ENV === 'es6' ? false : 'commonjs',
        loose: true,
        targets: {
          browsers: ['> 1%', 'last 2 versions']
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import']
};