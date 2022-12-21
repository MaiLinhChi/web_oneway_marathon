const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
const path = require('path');
const stylesResourcesLoaderPlugin = require('craco-style-resources-loader');
const cracoAntDesignPlugin = require('craco-antd');
const cracoAliasPlugin = require('craco-alias');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function ({ env }) {
  return {
    reactScriptsVersion: 'react-scripts' /* (default value) */,
    style: {
      modules: {
        localIdentName: '',
      },
      css: {
        // loaderOptions: { /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */ },
        loaderOptions: (cssLoaderOptions, { env, paths }) => {
          return cssLoaderOptions;
        },
      },
      less: {
        // loaderOptions: { /* Any less-loader configuration options: https://github.com/webpack-contrib/less-loader. */ },
        loaderOptions: (lessLoaderOptions, { env, paths }) => {
          return {
            ...lessLoaderOptions,
            lessOptions: {},
          };
        },
      },
      sass: {
        // loaderOptions: { /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */ },
        loaderOptions: (sassLoaderOptions, { env, paths }) => {
          return {
            sourceMap: true,
          };
        },
      },
      postcss: {
        mode: 'extends' /* (default value) */,
        plugins: [require('postcss-css-reset')], // Additional plugins given in an array are appended to existing config.
        env: {
          autoprefixer: {
            /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */
            cascade: true,
            add: true,
            remove: true,
            supports: true,
            flexbox: true,
            grid: 'autoplace',
          },
          stage: 4 /* Any valid stages: https://cssdb.org/#staging-process. */,
          features: {
            /* Any CSS features: https://preset-env.cssdb.org/features. */
          },
        },
        // loaderOptions: { /* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */ },
        loaderOptions: (postcssLoaderOptions, { env, paths }) => {
          return {
            sourceMap: true,
            postcssOptions: {
              ...postcssLoaderOptions.postcssOptions,
              plugins: [...postcssLoaderOptions.postcssOptions.plugins],
            },
          };
        },
      },
    },
    eslint: {
      enable: true,
      mode: 'file',
    },
    babel: {
      presets: [],
      plugins: [],
      // loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
      loaderOptions: (babelLoaderOptions, { env, paths }) => {
        return babelLoaderOptions;
      },
    },
    typescript: {
      enableTypeChecking: true /* (default value)  */,
    },
    webpack: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      plugins: {
        add: [
          ...whenProd(
            () => [
              new UglifyJsPlugin({
                uglifyOptions: {
                  output: {
                    comments: false,
                  },
                  sourceMap: true,
                  warnings: false,
                  parse: {},
                  compress: {},
                  mangle: true, // Note `mangle.properties` is `false` by default.
                },
                parallel: true,
              }),
            ],
            [],
          ),
        ],

        /* An array of plugins */
        // add: [
        //   plugin1,
        //   [plugin2, "append"],
        //   [
        //     plugin3,
        //     "prepend",
        //   ] /* Specify if plugin should be appended or prepended */,
        // ] /* An array of plugins */,
        remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
      },
      // configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
      configure: (webpackConfig, { env, paths }) => {
        return webpackConfig;
      },
    },
    jest: {
      babel: {
        addPresets: true /* (default value) */,
        addPlugins: true /* (default value) */,
      },
      // configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration */ },
      configure: (jestConfig, { env, paths, resolve, rootDir }) => {
        return jestConfig;
      },
    },
    // devServer: { /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */ },
    devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
      return devServerConfig;
    },
    plugins: [
      {
        plugin: cracoAntDesignPlugin,
        options: {
          customizeTheme: {
            '@primary-color': '#1964FF', // primary color for all components
            '@link-color': '#1964FF', // link color
            '@success-color': '#52c41a', // success state color
            '@warning-color': '#faad14', // warning state color
            '@error-color': '#f5222d', // error state color
            '@font-size-base': '14px', // major text font size
            '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
            '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
            '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
            '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
            '@border-radius-base': '2px', // major border radius
            '@border-color-base': '#d9d9d9', // major border color
            '@box-shadow-base':
              '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // major shadow for layers
          },
        },
      },
      {
        plugin: stylesResourcesLoaderPlugin,
        options: {
          patterns: ['./src/assets/styles/_global.scss'],
        },
      },
      {
        plugin: cracoAliasPlugin,
        options: {
          source: 'tsconfig',
          baseUrl: '.',
          tsConfigPath: './tsconfig.path.json',
        },
      },
      {
        plugin: {
          overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
            return cracoConfig;
          },
          overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
            return webpackConfig;
          },
          overrideDevServerConfig: ({
            devServerConfig,
            cracoConfig,
            pluginOptions,
            context: { env, paths, proxy, allowedHost },
          }) => {
            return devServerConfig;
          },
          overrideJestConfig: ({
            jestConfig,
            cracoConfig,
            pluginOptions,
            context: { env, paths, resolve, rootDir },
          }) => {
            return jestConfig;
          },
        },
        options: {},
      },
    ],
  };
};
