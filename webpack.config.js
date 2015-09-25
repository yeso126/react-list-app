module.exports = {
  entry: './src/js/main.jsx',
  output: {
    filename: 'dist/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
     exclude: /(node_modules|bower_components)/,
     loader: 'babel'
      }
    ]
  }
};
