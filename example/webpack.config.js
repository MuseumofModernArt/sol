const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[folder]/[name].[ext]",
          },
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
