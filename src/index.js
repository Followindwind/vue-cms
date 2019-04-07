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

//导入bootstrap图标
import 'bootstrap/dist/css/bootstrap.css'

//导入所有ElementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入路由模块
import router from './router'



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
