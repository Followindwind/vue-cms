<template>
    <div style="width: 100%; background: #fff;" direction="column">
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
            <mu-slide-right-transition>
                <router-view></router-view>
            </mu-slide-right-transition>
        </mu-flex>
        <mu-flex class="flex-wrapper footer" justify-content="end" flex>
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

    .mu-tabs {
        display: flex;
        .mu-tab {
            flex: 25%;
        }
    }
</style>