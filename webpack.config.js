//module.exports = {
//    devServer: {
//        contentBase: './dist'
//    },
//}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 entry: {
     app:'./src/index.js'
 },
 output:{
     filename:'[name].js',
     path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist'
 },
 devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
 },
 module: {
     rules:[{
         test: /\.css$/,
         use: [
             MiniCssExtractPlugin.loader,
             "css-loader"
         ]
     },
     {
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {sourceMap:true}

            },{
                loader: 'sass-loader',
                options: {sourceMap:true}
            }
        ]
    },
{test: /\.pug$/, use: 'pug-loader'},
{
    test: /\.(png|jpe?g|gif|svg)$/i,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
]
 },
 devServer:{
     overlay: true
 },
 plugins: [
     new MiniCssExtractPlugin({
         filename: "[name].css"
     }),
     new HtmlWebpackPlugin({
        title: 'Custom template using Handlebars',
        template: 'src/pages/index.pug'
      })
 ],
}