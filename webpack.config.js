module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'public/js/bundle.js'
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
