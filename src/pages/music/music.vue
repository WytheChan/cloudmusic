<template>
  <div>
    <navTop></navTop>
    <musicnav :music="music"></musicnav>
    <router-view></router-view>
    <myfooter></myfooter> 
  </div>
  
</template>

<script>
import navTop from '../../components/J_navTop/navTop'
import musicnav from '../../components/mainNav/mainNav'
import footer from '@/components/J_footer/footer'
export default {
  components: {
    navTop, musicnav,
     myfooter:footer,
  },
   data() {
        return {
            music: [
                {
                    path: '/music/hot',
                    title: '热门推荐'
                },
                {
                    path: '/music/top',
                    title: "榜单"
                },
                {
                    path: '/music/list',
                    title: "歌单",
                },
                {
                    path: '/music/radio',
                    title: '电台'
                }
            ],
            

        }
    }

}
</script>

<style lang="scss">

</style>
