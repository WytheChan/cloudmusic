<template>
    <div class="singer-type">
        <div class="singer-type-top">
            <router-link to="/Search">
                <i class="fa fa-arrow-left fa-3x fa-fw"></i>
            </router-link>
            歌手分类
        </div>
        <div class="singer-type-content">
            <ul>
                <li>华语男歌手</li>
                <li>华语女歌手</li>
                <li>华语乐队/组合</li>
            </ul>
            <ul>
                <li>欧美男歌手</li>
                <li>欧美女歌手</li>
                <li>欧美乐队/组合</li>
            </ul>
            <ul>
                <li>日本男歌手</li>
                <li>日本女歌手</li>
                <li>日本乐队/组合</li>
            </ul>
            <ul>
                <li>韩国男歌手</li>
                <li>韩国女歌手</li>
                <li>韩国乐队/组合</li>
            </ul>
            <ul>
                <li>其他男歌手</li>
                <li>其他女歌手</li>
                <li>其他乐队/组合</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import '../../scss/_function.scss';
.singer-type {
    .singer-type-top {
        padding: 20px;
        background: #d30000;
        font-size: rem(36);
        color: #fff;
        .fa{
            font-size: rem(40);
            color: #fff;
        }
    }
    .singer-type-content {
        padding: rem(10) 0;
        background: #ddd;
        ul {
            margin: 10px 0;
            background: #fff;
            li {
                padding: 10px 0;
                text-indent: 1em;
                border: 1px solid #eee;
                font-size: rem(32);
            }
        }
    }
}
</style>