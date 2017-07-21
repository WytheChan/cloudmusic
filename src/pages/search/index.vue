<template>
  <div>
    <div class="search-page">
      <div class="search-top">
       <router-link to="/"> <i class="fa fa-arrow-left fa-3x"></i></router-link>
        <input class="search-text" type="text" placeholder="搜索音乐、歌手、歌词、用户" v-model="text">
      </div>
      <router-link to="/SingerType" class="singer-classfiy">
       <i class="fa fa-user-o"></i>
        歌手分类
        <i class="fa fa-angle-right"></i>
      </router-link>
      <div class="hot-search">
        <h6>热门搜索</h6>
        <div class="hot-search-item">
          <span class="hot-search-name">胡歌</span>
           <span class="hot-search-name">朴树</span>
            <span class="hot-search-name">醉玲珑</span>
             <span class="hot-search-name">无条件</span>
              <span class="hot-search-name">林忆莲</span>
               <span class="hot-search-name">我的一个道姑朋友</span>
                <span class="hot-search-name">初音</span>
                 <span class="hot-search-name">嘻哈</span>
                  <span class="hot-search-name">梁非凡</span>
                   <span class="hot-search-name">王力宏</span>
                    <span class="hot-search-name">超级机器人大战</span>
                     <span class="hot-search-name">勇者斗恶龙</span>
                      <span class="hot-search-name">前前世世</span>
                       <span class="hot-search-name">全都是你的{{text}}</span>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import footer from '../../components/J_footer/footer.vue';
  import {mapState} from 'vuex'
  export default {

  data(){
    return{
      text:''
    }
  },
  computed:{
   
  },
    components: {
      myfooter: footer
    },
    methods: {
        search:text=>{

        }
    },
    created(){
      this.$http.get('http://localhost:3000/search')
      .then(data=>{
        console.log(data)
      })
    }
  }

</script>

<style lang="scss">
  @import '../../scss/_function.scss';
  .search-page {
    .search-top{
      padding: 10px;
      background: #d30000;
      .fa{
      padding-top: 5px;
      color: #fff;
    }
    .search-text{
      width: 90%;
      margin-left: 10px;
      padding-bottom: 5px;
      border: none;
      border-bottom:1px solid #f1f1f1;
      background: transparent;
      outline: none;
      font-size: rem(30);
      color: #fff;
      
    }
    ::-webkit-input-placeholder{
      color: #f1f1f1;
      }
    }
    
    
    
      .singer-classfiy{
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #ddd;
        padding: rem(20) 0;
        text-align: center;
        color: gray;
        font-size: rem(36);
      }
      .hot-search{
        padding: 20px;
        h6{
        padding-bottom: 10px;        
          color: gray;
          font-size: rem(26);
        }
        .hot-search-item{
          display: flex;
          flex-wrap: wrap;
          .hot-search-name{
            margin:5px;
            padding:5px 10px;
            border: 1px solid #000;
            border-radius: 10px;
            font-size: rem(32);
          }
        }
      }
  }

</style>
