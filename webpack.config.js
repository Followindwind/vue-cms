//由于webpack基于Node构建的,所有的webpack配置文件中,任何合法的Node代码都是支持的
var path = require('path')

//插件:在内存中,根据指定的模板页面,生成内存中的页面,将打包好js文件注入页面
var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

//当以命令形式运行webpack或webpack-dev-server的时候,会检查项目根目录中的配置文件,进行构建

module.exports = {
    mode:'production',
    //入口文件
    entry: path.join(__dirname, './src/index.js'),
    //指定输出选项
    output: {
        //输出路径
        path: path.join(__dirname, './dist'),
        //指定输出文件名称
        filename: "main.js"
    },
    //所有webpack插件配置节点
    plugins: [
        new htmlWebpackPlugin({
            //指定模板文件
            template: path.join(__dirname, './src/index.html'),
            //生成内存页面名称
            filename: 'index.html'

        }),
        new VueLoaderPlugin(),
    ],
    //配置所有第三方loader规则模块
    module: {
        rules: [
            //第三方模块匹配规则
            /*处理类型,使用loader*/
            //支持css样式及导出
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //less
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            //scss
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            //处理图片路径limit=2048576设置图片base编码的大小限制,单位字节
            //&name=[name].[ext]:保持原图片名称,[hash:8]8位哈希值命名
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=2048576&name=[hash:8]-[name].[ext]'},
            //字体图标
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
            //配置识别es语法,exclude排除node_modules目录
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            //处理vue文件格式
            {test: /\.vue$/, use: 'vue-loader'},

        ]
    },
    resolve: {
        alias: {
            //设置vue时包路径
             'vue$':'vue/dist/vue.js'
        }

    },
    //警告 webpack 的性能提示
    performance: {
        hints:'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    }

}

/*配置babel步骤*/
/*1.npm install -D babel-loader @babel/core @babel/preset-env  @babel/plugin-transform-runtime @babel/runtime*/
/*2.配置webpack.config.js规则, {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}*/
/*3.配置babel插件和语法文件.babelrc*/
/*{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
}
*/


/*配置vue步骤*/
/*
* 1.npm install  vue;  npm install -D vue-loader vue-template-compiler
* 2.配置规则 {test: /\.vue$/, use: 'vue-loader'}
* 3.配置插件 const VueLoaderPlugin = require('vue-loader/lib/plugin') plugins:[ new VueLoaderPlugin(),]
* 4.引入路径,导入vue组件import login from './components/login.vue',注意./及.vue必须有
* */