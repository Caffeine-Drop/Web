module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Expo 프로젝트에 필요한 Babel 프리셋
    plugins: [
      'react-native-reanimated/plugin', // Reanimated 플러그인 추가
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      }]
    ],
  };
};