module.exports = {
  plugins: [
    // [
    //   'postcss-custom-media',
    //   {
    //     importFrom: './css/settings/media.css',
    //     preserve: false,
    //   },
    // ],
    'postcss-flexbugs-fixes',
    'postcss-nesting',
    'postcss-media-minmax',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 0,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
