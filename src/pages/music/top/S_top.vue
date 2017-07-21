<template>
    <!--音乐>榜单 的页面组件
                        作者：陈嘉验-->
    <div>
        <template v-if="isDone">
            <div class="c-top">
                <div class="c-official">
                    <h3>官方榜</h3>
                    <div class="c-official-list">
                        <router-link class="c-official-billboard" v-for="item,index in officialList" :to="'/SubTop/'+item.body.result.id">
                            <div class="c-official-img">
                                <!-- <img :src="item.body.result.coverImgUrl" alt=""> -->
                                <lazyimg :src="item.body.result.coverImgUrl"></lazyimg>
                            </div>
                            <ul>
                                <li>
                                    <span>1.</span>{{item.body.result.tracks[0].name}} - {{item.body.result.tracks[0].artists[0].name}}</li>
                                <li>
                                    <span>2.</span>{{item.body.result.tracks[1].name}} - {{item.body.result.tracks[1].artists[0].name}}</li>
                                <li>
                                    <span>3.</span>{{item.body.result.tracks[2].name}} - {{item.body.result.tracks[2].artists[0].name}}</li>
                            </ul>
                        </router-link>
                    </div>
                </div>
                <div class="c-world">
                    <h3>全球榜</h3>
                    <div class="c-world-list">
                        <router-link class="c-world-billboard" v-for="item,index in worldList" :to="'/SubTop/'+item.body.result.id">
                            <!-- <img :src="item.body.result.coverImgUrl" alt=""> -->
                            <lazyimg class="lazyimg" :src="item.body.result.coverImgUrl"></lazyimg>
                            <p class="c-title">{{item.body.result.name}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
        <loading v-if="!isDone"></loading>
    </div>
</template>
<script>
import loading from '../../../components/loading/loading';
import { mapState, mapMutations, mapActions } from 'vuex';
import lazyimg from '../../../components/lazyImage/lazyimg'
export default {
    data() {
        return {
            isDone: false
        }
    },
    components: {
        loading, lazyimg
    },
    computed: {
        ...mapState({
            officialList: state => state.music.officialList,
            worldList: state => state.music.worldList,
        })
    },
    created() {

        this.getOfficialList();
        this.getWorldList();
        this.isDone = true;

    },
    methods: {
        ...mapMutations([
        ]),
        ...mapActions([
            'getOfficialList', 'getWorldList',
        ])
    }

}

</script>
<style lang="scss">
@import "../../../scss/_function.scss";
.c-top {
    margin-top: 100px;
    .c-official {
        h3 {
            margin: 10px 0;
            border-left: 2px solid #d30000;
            font-size: rem(30);
            text-indent: 1em;
        }
        .c-official-list {
            .c-official-billboard {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
                .c-official-img {
                    width: 30%;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 70%;
                    padding-left: 10px;
                    li {
                        padding: 10px 0;
                        font-size: rem(24);
                        text-overflow: ellipsis;
                        span {
                            font-size: rem(24);
                        }
                    }
                }
            }
        }
    }
    .c-world {
        h3 {
            margin: 10px 0;
            border-left: 2px solid #d30000;
            font-size: rem(30);
            text-indent: 1em;
        }
        .c-world-list {
            display: flex; // justify-content: space-between;
            flex-wrap: wrap;
            .c-world-billboard {
                width: 32%;
                margin-left: 1%;
               .lazyimg {
                    width: 100%;
                    height: auto!important;
                }
                .c-title {
                    line-height: rem(40);
                    padding: 10px;
                }
            }
        }
    }
}
</style>
