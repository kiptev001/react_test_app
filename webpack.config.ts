import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type EnvBuild, type IPath } from './config/build/types/config';
import path from 'path';

export default (env: EnvBuild): webpack.Configuration => {
  const paths: IPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };
  const PORT = env.port | 3000;
  const isDev = env.mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || 'development',
    path: paths,
    PORT,
    isDev,
    apiUrl
  });

  return config;
};
