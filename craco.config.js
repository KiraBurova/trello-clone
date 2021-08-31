module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  babel: {
    presets: [],
    plugins: ['istanbul'],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
};
