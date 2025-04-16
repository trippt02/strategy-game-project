const path = require('path');

module.exports = {
  mode: 'production', // You can also set this here instead of the command line
  entry: './src/app.js', // Your main entry point
  output: {
    filename: 'bundle.js', // The name of your bundled file
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all .js files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel to transpile ES6+ code
          options: {
            presets: ['@babel/preset-env'], // Use the env preset
          },
        },
      },
    ],
  },
};