<template>
    <footer class="play">
        <div class="play-info">
            <router-link class="play-img" to="/Playinterface">
                <img :src="nowSong.pic" alt="fff">
            </router-link>
            <div class="play-text">
                <h6 class="play-name">{{nowSong.songname}}</h6>
                <p class="play-songer">{{nowSong.singer}}</p>
            </div>
        </div>
        <ul class="play-control">
    
            <li>
                <i class="fa fa-play fa-2x" v-if="!isPlay" @click="play()"></i>
                <i class="fa fa-pause fa-2x" v-if="isPlay" @click="play()"></i>
            </li>
    
            <li>
                <i class="fa fa-step-forward fa-2x"></i>
            </li>
            <li>
                <i class="fa fa-list fa-2x"></i>
            </li>
        </ul>
        <audio :src="nowSong.url" ref="audio" autoplay></audio>
    </footer>
</template>
    
<script>
import { mapState, mapActions } from 'vuex'
export default {

    data() {
        return {
            isPlay: true,
            // cuttentTime: 0
        }
    },
    computed: {
        ...mapState({
            musicId: state => state.music.musicId,
            nowSong: state => state.music.nowSong,
        })
    },
    created() {
        this.getId(this.musicId)
    },
    methods: {
        play() {
            this.isPlay = !this.isPlay;
            let audio = this.$refs.audio;

            if (this.isPlay) {

                audio.play();
            } else {
                audio.pause();
            }

        },
        ...mapActions([
            'getId'
        ]),
    },
    watch: {
        musicId(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.getId(newValue)
                let audio = this.$refs.audio;
                //  audio.play();
                audio.autoPlay = true;
                //  this.isPlay = !this.isPlay;
            }
        }
    }

}
</script>

<style lang="scss">
@import '../../scss/_function.scss';
.play {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    background: rgba(255, 255, 255, .8);
    display: flex;
    justify-content: space-between;
    .play-info {
        display: flex;
        justify-content: space-between;
        width: 70%;
        .play-img {
            // width:30%;
            img {
                margin-right: 10px;
                width: 50px;
            }
        }
        .play-text {
            width: 80%;
            .play-name {
                font-size: rem(32);
            }
            .play-songer {
                margin-top: 10px;
                font-size: rem(28);
                color: #94908b;
            }
        }
    }
    .play-control {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        right: 30px;
        width: 30%;
        transform: translateY(-50%);
        li {
            color: #b30000;
        }
    }
}
</style>
