import { type WebpackConfiguration } from 'webpack-dev-server';
import { type IPath } from '../../config/build/types/config'
import path from 'path';

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: IPath = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  const isDev = true;
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : null,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }
  config.module?.rules?.push(cssLoader);

  config.module = config.module ?? {};

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules ?? [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config.module.rules = config.module.rules.map((rule: any) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  return config;
}
