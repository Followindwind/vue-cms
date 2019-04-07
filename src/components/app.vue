<template>
    <div>
        <el-container>
            <!--顶部 Header区域-->
            <el-header>
                <span class="el-icon-arrow-left arrow"></span>
                <span class="title">学而时习之</span>
            </el-header>
            <!--中间路由 router-view区域-->
            <el-main>Main</el-main>
            <!--底部 Tabs区域-->
            <el-footer>
                <section class="tabs">
                    <div class="tab">
                        <span>主页</span>
                    </div>
                    <div class="tab">
                        <span>发现</span>
                    </div>
                    <div class="tab">
                        <span>购物车</span>
                    </div>
                    <div class="tab">
                        <span>我的</span>
                    </div>
                </section>
            </el-footer>
        </el-container>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>


<style lang="scss">
    .el-header, .el-footer {
        background-color: cornflowerblue;
        color: #fff;
        line-height: 60px;
        text-align: center;
        position: relative;
    }

    .el-header .title {
        margin: 0 auto;
        font-weight: bold;
    }

    .el-header .arrow {
        position: absolute;
        left: 10px;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .el-footer{
        .tabs{
            width: 100%;
            display: flex;
           .tab{
               list-style: none;
               flex: 25%;
           }
        }
    }
</style>