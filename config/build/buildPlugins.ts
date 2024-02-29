import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({
  path,
  isDev
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: path.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));

    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
