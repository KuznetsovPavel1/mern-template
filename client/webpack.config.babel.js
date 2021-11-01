import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import reactRefresh from "react-refresh/babel";
import path from "path";
// import webpack from "webpack";

export default (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    devtool: "source-map",
    mode: argv.mode || "development",
    target: isDevelopment ? "web" : "browserslist",
    output: {
      filename: "[name].bundle.[contenthash].js",
      path: path.join(__dirname, "/dist"),
      publicPath: "/",
    },
    devServer: {
      // compress: true,
      historyApiFallback: true,
      hot: true,
      // liveReload: false,
      port: 3000,
      // static: {
      //   directory: path.join(__dirname, "/dist"),
      // },
    },
    node: {
      __dirname: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          // use: ["babel-loader"],
          use: [
            {
              loader: "babel-loader",
              options: {
                plugins: [isDevelopment && reactRefresh].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    optimization: {
      runtimeChunk: "single",
      moduleIds: "deterministic",
      splitChunks: {
        chunks: "all", //"async",
        minSize: 20000, //0,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30, //Infinity,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        favicon: "./src/favicon.ico",
        template: "./src/index.html",
        filename: "index.html",
      }),
      new MiniCssExtractPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
  };
};
