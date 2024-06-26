module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~(.+)': './src/\\1',
            '^~components(.+)': './src/components',
            '^~navigation(.+)': './src/navigation',
            '^~screens(.+)': './src/screens',
            '^~types(.+)': './src/types',
          },
          extension: ['.ts', '.tsx', '.js', '.jsx'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
