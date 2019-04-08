/*js入口文件*/

//在webpack中导入vue
//注意:在webpack中import Vue from 'vue'导入Vue功能不完整,只提供runtime-only的方式
//import Vue from 'vue'
/*1.根据node_modules路径导入
import Vue from '../node_modules/vue/dist/vue'
*/
/* 2.
 resolve: {
        //设置vue时包路径
        'vue$':'vue/dist/vue.js'
    }*/
import Vue from 'vue'

//导入vue-router包
import VueRouter from 'vue-router'

//导入vue组件
import app from './components/app.vue'

//手动安装VueRouter
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入muse-ui UI组件库
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
//导入material-design-icons
import 'material-design-icons/iconfont/material-icons.css'
import Toast from 'muse-ui-toast';

Vue.use(Toast);

//水波纹效果
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);

//导入时间插件
import momemt from 'moment'

//导入路由模块
import router from './router'

//全局配置baseurl
Vue.http.options.root='http://wwww.jhost.com/'
Vue.http.options.emulateJSON=true

//定义全局过滤器
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
   return momemt(dataStr).format(pattern)
})

let vm = new Vue({
    el: '#app',
    data: {
        msg: 'Vue'
    },
    methods: {},
    components:{
      app
    },
    //挂载路由对象
    //将路由规则对象注册到vm实例中
    router: router
})
