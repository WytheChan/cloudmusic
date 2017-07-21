import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'



import Music from '../pages/music/music'
import MusicRouter from './music'
import Trends from './trends'
import User from './user'
import Playinterface from '../components/playInterface'
import Search from '../pages/search/index.vue'
import SingerType from '../pages/search/singerType.vue'




Vue.use(Router)
Vue.use(VueAwesomeSwiper)



export default new Router({

  routes: [{
      path:'/',
      name:'music',
      redirect:'/music/hot',
      component:Music
    },
    {
      path:'/Playinterface',
      component:Playinterface
    },
    {
      path:'/Search',
      component:Search
    },
    {
      path:'/SingerType',
      component:SingerType
    },
    MusicRouter,Trends,User
  ],
  linkActiveClass:'active'
  

})
