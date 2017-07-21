<template>
    <div>
        <navTop></navTop>
        <div class="trends">
            <!-- <div class="trends-banner">
                <div class="trends-title">
                    <div class="trends-context">
                        <p>#你最想看谁的演唱会？</p>
                        <p>已有167人加入</p>
                    </div>
                </div>
            </div> -->
            <div class="trends-content">
                <div class="trends-topics">
                    <p class="topics-title">热门话题</p>
                    <p class="topics-more">更多></p>
                </div>
                <div class="trends-topics-cover">
                    <div class="topics topics-first">
                        <div class="topics-text">
                            <p>#你单曲循环最多的是哪一首歌？</p>
                                <img src="./img1.png">
                        </div>
                    </div>
                    <div class="topics topics-second">
                        <div class="topics-text">
                            <p>#你单曲循环最多的是哪一首歌？</p>
                                <img src="./img2.png">
                        </div>
                    </div>
                </div>
                <div class="trends-hot-title">
                    <div class="writer">
                        <img src="./icon1.png">
                        <div class="writer-info">
                            <p>欢乐颂音乐带你发现世界</p>
                            <p>11-29</p>
                        </div>
                        <p class="star">+关注</p>
                    </div>
                    <div class="hot-title">
                        <p>今天是钟汉良欧巴的生日！想不起来是什么时候开始关注他的作品， 不例外的从电视剧电影里认识他，从而了解原来他还是歌手，并且 获得不少奖项!
                        </p>
                        <p>唱跳俱佳，影视双栖，用对演艺事业的不懈追求书写小太阳的耀眼 荣光
                        </p>
                    </div>
                </div>
                <div class="make-songlist">
                    <p class="make-title">#手拉手一起做歌单</p>
                    <div class="make-songcover">
                        <img class="songcover-1" src="./trends-cover3.png">
                        <div class="thumbnail">
                            <img src="./trends-cover4.png">
                            <img src="./trends-cover5.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <myfooter></myfooter>        
    </div>
</template>

<script>
import navTop from '../../components/J_navTop/navTop'
import footer from '../../components/J_footer/footer'

export default {
    data() {
        return {

        }
    },
    components: {
        navTop: navTop,
        myfooter:footer

    },
    created() {

    },
}
</script>
   
        
<style lang="scss">
@import '../../scss/_function.scss';
.trends{
        margin-top: rem(100);
        padding: 0 10px;
    .trends-content{
        .trends-topics{
            display: flex;
            justify-content: space-between;
            p{
                font-size: rem(36);
            }
        }
        .trends-topics-cover{
             display: flex;
            justify-content: space-between;
            margin-top: rem(30);
            .topics{
                position: relative;
                width: 48%;
                // border: 1px solid #000;
                img{
                    width: 100%;
                    height: 100%;
                }
                p{
                     position: absolute;
                    top:50%;
                    left:50%;
                    width: 70%;
                    padding: 10px;
                    background: rgba(0,0,0,.4);
                    color: #fff;
                    font-size: rem(26);
                    transform: translate(-50%,-50%);
                }
            }
        }
        .trends-hot-title{
            .writer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    width: 10%;
                }
                .writer-info{
                    width: 75%;
                    p{
                        padding: 3px;
                        font-size: rem(32);
                        color: gray;
                    }
                }
                .star{
                    width: rem(100);
                    padding: 5px;
                    border: 1px solid orange;
                    font-size: rem(30);
                    color: #d30000;
                }
            }
            .hot-title{
                padding: 10px 0;
                font-size: rem(30);
                line-height: rem(30);
            }
        }
        .make-songlist{
            .make-title{
                width: 40%;
                margin:10px 0;
                padding: 5px;
                    border: 1px solid orange;                
                font-size: rem(30);
                color: #d30000;
            }
            .make-songcover{
                display: flex;
                justify-content: space-between;
                .songcover-1{
                    width: 48%;
                }
                .thumbnail{
                    width: 48%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            }
        }
    }
}
</style>
