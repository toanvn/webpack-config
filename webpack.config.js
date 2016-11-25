const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool:'cheap-eval-source-map',
  context: path.join(__dirname,'src'),
  entry: {
    about:'./about/about.js',
    app: './app/app.js'
  },
  output:{
    path: path.join(__dirname,'dist'),
    filename:'[name].bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: path.join(__dirname,'src'),
        loader: "babel"
      },
      {
        test: /\.css$/,
        include: path.join(__dirname,'src'),
        loader: "css"
      },
      {
        test: /\.less$/,
        include: path.join(__dirname,'src','less'),
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname,'dist'),
    inline:true,
    stats:'error-only'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html'),
      hash: true,
      filename:'index.html',
      chunks:['app']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html'),
      hash: true,
      filename:'about.html',
      chunks:['about']
    })
  ]
};
