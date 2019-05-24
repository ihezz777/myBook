#  webpack 优化

#### 最简单的配置

```
// webpack.config.js
module.exports = {
  entry: {
    app: './src/app.js'
  },
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  }
};
```

#### 常用 loader

```
rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
  ]
```

#### happypack 多进程编辑

```
// webpack.conofig.js

const HappyPack = require('happypack')
// 手动创建进程池
const happyThreadPool =  HappyPack.ThreadPool({ size: os.cpus().length })

module.exports = {
  module: {
    rules: [
      ...
      {
        test: /\.js$/,
        // 问号后面的查询参数指定了处理这类文件的HappyPack实例的名字
        loader: 'happypack/loader?id=happyBabel',
        ...
      },
    ],
  },
  plugins: [
    ...
    new HappyPack({
      // 这个HappyPack的“名字”就叫做happyBabel，和楼上的查询参数遥相呼应
      id: 'happyBabel',
      // 指定进程池
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    })
  ],
}
```

#### DllPlugin 优化公共资源库

```
// webpack.config.vendor.js

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    // 目录文件中需要被抽离出来的公共资源库
    vendor: [path.join(__dirname, 'src', 'vendor.js')],
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].js',
      name: '[name]',
    }),
  ]
};
//--

// 终端执行
webpack -p --progress --config webpack.config.vendor.js
// --

// webpack.config.js
const manifest = require('./dll/vendor-manifest.json');

// ... 其他完美的配置

plugins: [
  new webpack.DllReferencePlugin({
    manifest,
  }),
]

```

