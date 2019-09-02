const presets = [
  [
    '@babel/env',
    {
      targets: {
        ie: '11'
      },
      corejs: '3',
      useBuiltIns: 'usage',
    },
  ],
];

module.exports = { presets }