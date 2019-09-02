const presets = [
  [
    '@babel/env',
    {
      targets: {
        ie: '11'
      },
    },
  ],
];

const plugins = [
  [
    '@babel/plugin-transform-runtime'
  ],
];

module.exports = { presets, plugins }