import { type ModuleOptions } from "webpack";
import { type BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: [
          "babel-plugin-styled-components",
          isDev && "react-refresh/babel",
        ].filter(Boolean),
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  return [
    babelLoader,
    cssLoader
  ];
}
