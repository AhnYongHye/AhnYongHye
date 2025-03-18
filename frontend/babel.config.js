// Optional: To enforce property order
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/preset-typescript'],
    // ['@emotion/babel-preset-css-prop'], // emotion 쓸 경우 넣으셈
  ],
};
