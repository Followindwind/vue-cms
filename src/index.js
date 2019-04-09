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

//导入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

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

import MintUI from 'mint-ui'

Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 导入 MUI 的样式
import './libs/mui/css/mui.min.css'
// 导入扩展图标样式
import './libs/mui/css/icons-extra.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview)


//导入时间插件
import momemt from 'moment'

//导入路由模块
import router from './router'

//全局配置baseurl
Vue.http.options.root = 'http://wwww.jhost.com/'
Vue.http.options.emulateJSON = true

//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return momemt(dataStr).format(pattern)
})
//每次进入网站调用
var car=JSON.parse(localStorage.getItem('car'))

let store = new Vuex.Store({
    state: {
        car: car?car:[],
    },
    mutations: {
        addToCar(state, goodsinfo) {
            //如果有更新数量,没有添加
            //条件查询
            let flag=false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag=true;
                    return true;
                }
            })

            if (!flag){
                state.car.push(goodsinfo)
            }

            //当更新之后,把car数组,存储到本地的localStrage
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值
            // 分析：
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) {
            // 根据Id，从store 中的购物车中删除对应的那条商品数据
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },

    getters: {

    // 相当于 计算属性，也相当于 filters
    getAllCount(state) {
        var c = 0;
        state.car.forEach(item => {
            c += item.count
        })
        return c
    },
    getGoodsCount(state) {
        var o = {}
        state.car.forEach(item => {
            o[item.id] = item.count
        })
        return o
    },
    getGoodsSelected(state) {
        var o = {}
        state.car.forEach(item => {
            o[item.id] = item.selected
        })
        return o
    },
    getGoodsCountAndAmount(state) {
        var o = {
            count: 0, // 勾选的数量
            amount: 0 // 勾选的总价
        }
        state.car.forEach(item => {
            if (item.selected) {
                o.count += item.count
                o.amount += item.price * item.count
            }
        })
        return o
    }
    }
})


let vm = new Vue({
    el: '#app',
    data: {
        msg: 'Vue'
    },
    methods: {},
    components: {
        app
    },
    //挂载路由对象
    //将路由规则对象注册到vm实例中
    router: router,
    store
})
