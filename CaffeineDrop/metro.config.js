const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // SVG 변환 설정 유지
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  // 🔥 웹에서 실행할 때 MIME 타입 문제 해결
  config.server = {
    ...config.server,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        if (req.url.includes(".bundle")) {
          res.setHeader("Content-Type", "application/javascript");
        }
        return middleware(req, res, next);
      };
    },
  };

  return config;
})();
