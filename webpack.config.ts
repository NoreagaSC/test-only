import * as webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import { BuildMode, BuildPaths } from './config/build/types/types';
import { buildWebpack } from './config/build/buildWebpack';

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;
};
