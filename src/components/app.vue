<template>
    <div class="app-container" style="width: 100%; background: #fff;" direction="column">
        <mu-flex class="flex-wrapper" justify-content="start" flex>
            <mu-appbar style="width: 100%;" color="primary">
                <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                思学

                <mu-button flat slot="right">登录</mu-button>
            </mu-appbar>
        </mu-flex>
        <mu-flex class="flex-wrapper" justify-content="center" flex>
            <transition>
                <router-view></router-view>
            </transition>
        </mu-flex>
        <mu-flex class="flex-wrapper footer" justify-content="end" flex>
<!--
            <mu-bottom-nav >
                <mu-bottom-nav-item  title="首页" icon="account_balance" to="/home"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="会员" icon="account_circle" to="/member"></mu-bottom-nav-item>
                <mu-bottom-nav-item title="购物车" icon="shopping_cart" to="/shopping">
                    <span class="mui-badge" id="badge">0</span>

                </mu-bottom-nav-item>
                <mu-bottom-nav-item title="搜索" icon="search" to="/search"></mu-bottom-nav-item>
            </mu-bottom-nav>-->




            <mu-tabs :value.sync="active3" center color="primary">
                <mu-tab to="/home">
                    <mu-icon value="account_balance"></mu-icon>
                    首页
                </mu-tab>
                <mu-tab to="/member">
                    <mu-icon value="account_circle"></mu-icon>
                    会员
                </mu-tab>
                <mu-tab to="/shopping">
                    <mu-icon value="shopping_cart"></mu-icon>
                    <span class="mui-badge" id="badge">0</span>
                    购物车
                </mu-tab>
                <mu-tab to="/search">
                    <mu-icon value="search"></mu-icon>
                    搜索
                </mu-tab>
            </mu-tabs>




        </mu-flex>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                active3: 0
            };
        },
        methods: {}
    }
</script>


<style lang="scss">

    .footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .mu-bottom-nav{
        width: 100%;
        height: 70px !important;

    }

    .mu-tabs {
        display: flex;
        .mu-tab {
            flex: 25%;
        }
        .mui-badge {
            position: absolute;
            right: 25px;
            top: 0;
        }
    }
</style>