import type { Configuration } from 'webpack'

import { resolve } from 'path'
import { IConfigOption } from '../types'
import ESLintPlugin from 'eslint-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'

export const getConfig = (data: IConfigOption) => {
  const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

  const config: Configuration = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: resolve('node_modules'),
          loader: 'vue-loader',
          options: {
            shadowMode: true
          }
        }
      ]
    },
    plugins: [
      // TODO: 从fbi-lint剥离eslint依赖
      new ESLintPlugin({
        extensions: ['js', 'ts', 'jsx', 'tsx', 'vue'],
        files: 'src'
        // fix: true
      } as any),

      new StyleLintPlugin({
        files: 'src/**/*.{css,scss,vue}'
      }),

      new VueLoaderPlugin()
    ],
    resolve: {
      extensions: ['.vue'],
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    }
  }

  return config
}
