<template>
    <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list textline="three-line">

            <router-link to="/news/newsInfo?id=1">
            <mu-list-item avatar :ripple="true" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../images/avatar.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            </router-link>
            <mu-divider></mu-divider>


            <mu-list-item avatar :ripple="true" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../images/avatar.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>Alex Qin</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span><br/>
                        我们去看电影，最近有部烂片上映，又有吐槽的了
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>


            <mu-list-item avatar :ripple="true" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../images/avatar.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>LOL</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
                        周末一起 LOL
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>


            <mu-list-item avatar :ripple="true" button>
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../images/avatar.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>LOL</mu-list-item-title>
                    <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/>
                        实在编不下去，这就是个demo
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>


        </mu-list>
        </mu-load-more>
    </mu-container>
</template>

<script>
    export default {
        name: "NewsList",
        data(){
           return {
               newsList:[],
               num:10,
               refreshing: false,
               loading: false,
               text: 'List'
           }
        },
        created(){
           // getNewsList();
        },
        methods:{
            toast (msg) {
                this.$toast.error('hello world');
            },
             getNewsList(){
                 this.$http.get('getNewsList').then(result => {
                    if (result.body.status ==0 ){
                        this.newsList=result.body.newsList
                    }  else{
                        toast('request error');
                    }
                 })
             },

            refresh () {
                this.refreshing = true;
                this.$refs.container.scrollTop = 0;
                setTimeout(() => {
                    this.refreshing = false;
                    this.text = this.text === 'List' ? 'Menu' : 'List';
                    this.num = 10;
                }, 2000)
            },
            load () {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.num += 10;
                }, 2000)
            }
        }
    }
</script>

<style scoped>

</style>