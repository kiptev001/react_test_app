import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { EnvBuild, IPath } from './config/build/types/config';
import path from 'path';

export default (env: EnvBuild) => {
  const paths: IPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  const PORT = env.port | 3000;
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || 'development',
    path: paths,
    PORT,
    isDev,
  });
  return config;
};
