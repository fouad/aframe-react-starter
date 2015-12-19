var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var IS_PRODUCTION = process.env.NODE_ENV === 'production'

var ENTRY_POINTS = [
  './src/app/index.js'
]

var JS_LOADERS = [
  'babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'
]

var PLUGINS = []
if (IS_PRODUCTION && process.env.MKT_ENV !== 'dev') {
  // Uglify in production, but not -dev.
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
          except: ['$super', '$', 'exports', 'require']
      }
    })
  )
  PLUGINS.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  )
} else {
  PLUGINS.push(
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: '4200',
      server: {
        baseDir: ['public', 'build'],
      }
    })
  )
  PLUGINS.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  )
}

module.exports = {
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    // Bundle will be built at ./src/media/js.
    path: './build',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components|vr-markup)/,
        loaders: JS_LOADERS,
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
  plugins: PLUGINS,
  resolve: {
    extensions: ['', '.js', '.json'],
    fallback: path.join(__dirname, 'node_modules'),
    modulesDirectories: [
      'src',
      'node_modules',
    ]
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')]
  }
}
