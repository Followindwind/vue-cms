<template>
    <mu-container>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
            <mu-card-header title="Jay" sub-title="每日新闻">
                <mu-avatar slot="avatar">
                    <img src="../../images/avatar.jpg">
                </mu-avatar>
            </mu-card-header>
            <mu-card-media title="指尖的阳光" sub-title="四月的心帘">
                <img src="../../images/sun.jpg">
            </mu-card-media>
            <mu-card-title title="阳光" sub-title="阳光与阴影"></mu-card-title>
            <mu-card-text>
                散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </mu-card-text>
            <mu-card-actions>
                <mu-button flat>评论</mu-button>
                <mu-button flat>更多</mu-button>
            </mu-card-actions>

            <comment-box></comment-box>
        </mu-card>
    </mu-container>
</template>

<script>
    //导入子组件
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "NewsInfo",
        data(){
            return{
                id:this.$route.params.id,
            }
        },
        components:{
            commentBox:comment,
        }

    }
</script>

<style scoped>

</style>