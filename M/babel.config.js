module.exports = (api) => {
  const presets = ["react-app"];
  const plugins = [
    "@babel/plugin-transform-modules-commonjs"
  ];

  api.cache(false);

  return {
    presets,
    plugins
  };
};
