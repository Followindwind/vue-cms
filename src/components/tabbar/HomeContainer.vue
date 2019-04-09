<template>
    <div>
        <mu-carousel>
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>

        <div class="menu">
            <router-link to="/home/newslist">
                <div class='child'><img src="../../images/menu1.png">
                    <p>新闻资讯</p></div>
            </router-link>
            <router-link to="/home/pictureSharing">
                <div class='child'><img src="../../images/menu2.png">
                    <p>图片分享</p></div>
            </router-link>
            <router-link to="/home/goodslist">
                <div class='child'><img src="../../images/menu3.png">
                    <p>商品购买</p></div>
            </router-link>
            <div class='child'><img src="../../images/menu4.png">
                <p>留言反馈</p></div>
            <div class='child'><img src="../../images/menu5.png">
                <p>视频专区</p></div>
            <div class='child'><img src="../../images/menu6.png">
                <p>联系我们</p></div>
        </div>
    </div>
</template>

<script>
    import carouselImg1 from '../../images/carousel1.jpg';
    import carouselImg2 from '../../images/carousel2.jpg';
    import carouselImg3 from '../../images/carousel3.jpg';
    import carouselImg4 from '../../images/carousel4.jpg';

    export default {
        name: "app-home",
        data() {
            return {
                carouselImg1,
                carouselImg2,
                carouselImg3,
                carouselImg4,
                menuList: [
                    {id: "1", url: '../../images/menu1.jpg', title: '新闻资讯'},
                    {id: "2", url: '../../images/menu2.jpg', title: '图片分享'},
                    {id: "3", url: '../../images/menu3.jpg', title: '商品购买'},
                    {id: "4", url: '../../images/menu4.jpg', title: '留言反馈'},
                    {id: "5", url: '../../images/menu5.jpg', title: '视频专区'},
                    {id: "6", url: '../../images/menu6.jpg', title: '联系我们'},
                ]
            }
        },
        created() {
            // getBannerImages()
        },
        methods: {
            getBannerImages() {
                this.$http.get('http://vue.stu.io/api/getbanner').then(result => {
                    console.log(result.body)
                }, error => {
                    Toast.error('error');
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
        .mu-carousel {
            height: 200px;
        }
        img {
            width: 100%;
            height: 100%;
        }

        .menu {
            width: 100%;
            height: 200px;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
            .child {
                width: 100%;
                height: 100px;
                text-align: center;
                img {
                    width: 40px;
                    height: 40px;
                    margin-top: 10px;

                }
                p {
                    color: darkslateblue;
                }
            }
        }
    }

</style>