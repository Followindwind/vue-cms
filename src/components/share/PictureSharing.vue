<template>

    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <mu-tabs :value.sync="active">
            <mu-tab>全部</mu-tab>
            <mu-tab>家居生活</mu-tab>
            <mu-tab>美女明星</mu-tab>
        </mu-tabs>
        <mu-container ref="container" class="demo-loadmore-content">
            <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                <mu-list textline="three-line">
                    <mu-list-item avatar :ripple="false" button>
                        <mu-list-item-action>
                            <mu-avatar>
                                <img src="../../images/avatar.jpg">
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
                            <mu-list-item-sub-title>
                                <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span>
                                周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                </mu-list>
            </mu-load-more>
        </mu-container>
    </mu-paper>

</template>

<script>
    import breakfast from '../../images/breakfast.f1098290.jpg';
    import burger from '../../images/burger.532a0515.jpg';
    import camera from '../../images/camera.1c54930e.jpg';
    import hats from '../../images/hats.04a08b20.jpg';

    export default {
        name: "PictureSharing",
        data() {
            return {
                list: [{
                    image: breakfast,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: burger,
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    image: camera,
                    title: 'Camera',
                    author: 'ruolin'
                }, {
                    image: hats,
                    title: 'Hats',
                    author: 'kakali'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo-loadmore-wrap {
        width: 100%;
        height: 420px;
        display: flex;
        flex-direction: column;
        .mu-appbar {
            width: 100%;
        }
    }

    .demo-loadmore-content {
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }


</style>