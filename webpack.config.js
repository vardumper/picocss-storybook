const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
      // {
      //   test: /\.twig$/,
      //   use: {
      //     loader: 'twig-loader',
      //     options: {
      //         // See options section below
      //     },
      //   }
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            parseMap: true,
          }
        }
      }
    ]
  },
  node: {
    fs: "empty" // avoids error messages
  }
};
