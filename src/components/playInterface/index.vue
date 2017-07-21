<template>
  <div class="interface-content">
    <div class="interface-top">
      <router-link class="interface-exit" to="/music/list">
        <i class="fa fa-chevron-down fa-3x"></i>
      </router-link>
      <ul>
        <li></li>
        <li class="active"></li>
        <li></li>
      </ul>
    </div>
    <div class="interface-img">
      <img :src="nowSong.pic" alt="">
      <h3 class="interface-name">{{nowSong.songname}}</h3>
      <p class="interface-singer">{{nowSong.singer}}</p>
      <div class="interface-icon">
        <i class="fa fa-heart-o fa-3x"></i>
        <i class="fa fa-download fa-3x"></i>
        <i class="fa fa-share-alt fa-3x"></i>
        <i class="fa fa-commenting-o fa-3x"></i>
        <i class="fa fa-ellipsis-h fa-3x"></i>
      </div>
    </div>
    <div class="play-control">
      <div class="play-time">
        <time>00:00</time>
        <div class="play-scroll"></div>
        <time>04:54</time>
      </div>
      <div class="play-menu">
        <i class="fa fa-random fa-3x"></i>
        <i class="fa fa-step-backward fa-4x"></i>
        <i class="fa fa-play-circle-o fa-5x" v-if="!isPlay" @click="isPlay = !isPlay"></i>
        <i class="fa fa-pause fa-5x" v-if="isPlay" @click="isPlay = !isPlay"></i>
        <i class="fa fa-step-forward fa-4x"></i>
        <i class="fa fa-navicon fa-3x"></i>
      </div>
    </div>
  </div>
</template>
<script>
import '../../../node_modules/font-awesome/scss/font-awesome.scss';
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      isPlay: false,
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
    ...mapActions([
      'getId'
    ])
  },
  play() {
    this.isPlay = !this.isPlay;
  }
}
</script>
<style lang="scss">
@import '../../scss/_function.scss';
.interface-content {
  padding: 20px;
  .interface-top {
    display: flex;
    justify-content: flex-start;
    .interface-exit {
      width: 45%;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: rem(16);
        height: rem(16);
        margin-left: 5px;
        border-radius: rem(8);
        background: red;
        &.active {
          background: #000;
        }
      }
    }
  }
  .interface-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    img {
      width: 80%;
      max-height: rem(500);
      margin-top: rem(80);
      overflow: hidden; // border: 1px solid #000;
    }
    .interface-name {
      font-size: rem(50);
      margin-top: rem(80);
    }
    .interface-singer {
      margin-top: rem(16);
      font-size: rem(36);
    }
    .interface-icon {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin-top: rem(100);
      color: gray;
    }
  }
  .play-control {
    margin-top: rem(80);
    .play-time {
      display: flex;
      justify-content: space-between;
      time {
        width: 10%;
        color: #d30000;
      }
      .play-scroll {
        width: 80%;
      }
    }
    .play-menu {
      display: flex;
      justify-content: space-between;
      margin-top: rem(80);
      color: #d30000;
    }
  }
}
</style>
