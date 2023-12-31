/* eslint-disable no-undef */

module.exports = function(api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  }
}

