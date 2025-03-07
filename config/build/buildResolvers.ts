import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import path from 'path';

export function buildResolvers(
  options: BuildOptions,
): Configuration["resolve"] {
  return {

    extensions: [".tsx", ".ts", ".js"],
    alias: {
      'components': path.resolve(__dirname, '../../src/components'),
      'shared': path.resolve(__dirname, '../../src/shared'),
      'assets': path.resolve(__dirname, '../../src/assets'),
    }
  };
}
