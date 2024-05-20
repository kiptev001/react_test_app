export type BuildMode = 'production' | 'development';

export interface IPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  path: IPath;
  PORT: number;
  isDev: boolean;
  apiUrl: string;
}

export interface EnvBuild {
  port: number;
  mode: BuildMode;
  apiUrl?: string;
}
