import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type IBuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: IBuildOptions
): webpack.Configuration {
  const { path, mode, isDev } = options
  return {
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options)
  }
}
