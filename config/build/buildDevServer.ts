import { IBuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.PORT | 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}