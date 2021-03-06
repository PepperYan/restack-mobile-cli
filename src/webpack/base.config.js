"use strict";
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

var webpack = require('webpack');
var Visualizer = require('webpack-visualizer-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HappyPack = require('happypack');

//改成func是因为要指定happypack的缓存路径到项目目录
function config(cwd,env){
  return {
    entry: {
      // vendors: [
      //   'jquery',
      //   'react', 'react-dom', 'react-addons-pure-render-mixin', 'react-addons-create-fragment',
      //   'redux', 'react-redux', 'redux-thunk', 'redux-undo',
      //   'react-router', 'history', 'react-router-redux'
      // ]
    },
    output: {
      // path: relative to cwd(current working directory), not work with path.resolve(__dirname, xxxx)
      path: '/static',
      publicPath: "/",
      filename: '[name].js'
    },
    module: {
      loaders: [
        {test: /\.json$/, loader: 'json'},
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          happy: { id: 'jsx' },
          query: {
            "presets": [
              "es2015",
              "stage-1",
              "react"
            ],
            "plugins": [
              "transform-decorators-legacy",
              "transform-class-properties",
              "transform-object-rest-spread",
              "transform-decorators",
              "transform-runtime",
              "syntax-async-functions",
              "transform-regenerator",
              "transform-object-assign"
            ],
            "env": {
              "development": {
                "presets": ["react-hmre"]
              }
            }
          }
        },
        {test: /\.less$/, loader: env === 'production'? ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") : "style-loader!css-loader!less-loader"},
        {test: /\.css$/, loader: env === 'production'? ExtractTextPlugin.extract("style-loader", "css-loader") : "style-loader!css-loader"},
        {test: /\.scss$/, loader: env === 'production'? ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"):"style-loader!css-loader!sass-loader"},
        //other assets
        {test: /\.eot(\?\w+)?/, loader: 'url?limit=5000'}, // 'file' ?
        {test: /\.(woff|woff2)(\?\w+)?/, loader: 'url?limit=5000&mimetype=application/font-woff'},
        {test: /\.ttf(\?\w+)?/, loader: 'url?limit=5000&mimetype=application/octet-stream'},
        {test: /\.svg(\?\w+)?/, loader: 'url?limit=5000&mimetype=image/svg+xml'},
        {test: /\.(png|jpg|gif)$/, loader: 'url?limit=25000'}
      ],
    },
    resolve: {
      modulesDirectories: ['node_modules', 'bower_components'],
      extensions: ['', '.js', '.jsx'],
      alias: {
        "mobiscroll": cwd + "/lib/js/mobiscroll.custom-3.0.0-beta6.min"
      }
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: 'template.html'
      // }),
      new webpack.DefinePlugin({
        "process.env": {
          BROWSER: JSON.stringify(true),
          NODE_ENV: JSON.stringify( env || 'development' )
        }
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      ),
      new HappyPack({
        id: 'jsx',
        threads: 13,
        tempDir: `${cwd}/.happypack`,
      })
    ]
  };
}

// merge webpack config options
function merge(target, source) {
  // base props
  target = Object.assign( {}, target, _.pick(source, ['devtool']) )

  target.entry = Object.assign({}, target.entry, source.entry)
  target.output = Object.assign({}, target.output, source.output)
  target.plugins = target.plugins.concat( source.plugins )

  return target
}

module.exports.makeConfig = function(newConfig,cwd, env) {
  return merge(_.cloneDeep(config(cwd, env)), newConfig);
}
