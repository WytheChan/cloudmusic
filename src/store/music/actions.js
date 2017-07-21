import Vue from 'vue';
const apiUrl = 'http://localhost:3000';

export default {

    // 获取官方榜
    getOfficialList: store => {
        Promise.all([Vue.http.get('http://localhost:3000/top/list?idx=0'),
                Vue.http.get('http://localhost:3000/top/list?idx=1'),
                Vue.http.get('http://localhost:3000/top/list?idx=2'),
                Vue.http.get('http://localhost:3000/top/list?idx=3'),
                Vue.http.get('http://localhost:3000/top/list?idx=4'),
            ])
            .then((datas) => {
                let officialList = [];
                officialList = datas;
                store.commit('updateOfficalList', officialList);
            })
    },

    // 获取全球榜  
    getWorldList: store => {
        Promise.all([
                Vue.http.get('http://localhost:3000/top/list?idx=5'),
                Vue.http.get('http://localhost:3000/top/list?idx=6'),
                Vue.http.get('http://localhost:3000/top/list?idx=7'),
                Vue.http.get('http://localhost:3000/top/list?idx=8'),
                Vue.http.get('http://localhost:3000/top/list?idx=9'),
                Vue.http.get('http://localhost:3000/top/list?idx=10'),
                Vue.http.get('http://localhost:3000/top/list?idx=11'),
                Vue.http.get('http://localhost:3000/top/list?idx=12'),
                Vue.http.get('http://localhost:3000/top/list?idx=13'),
                Vue.http.get('http://localhost:3000/top/list?idx=14'),
                Vue.http.get('http://localhost:3000/top/list?idx=15'),
                Vue.http.get('http://localhost:3000/top/list?idx=16'),
                Vue.http.get('http://localhost:3000/top/list?idx=17'),
                Vue.http.get('http://localhost:3000/top/list?idx=18'),
                Vue.http.get('http://localhost:3000/top/list?idx=19'),
                Vue.http.get('http://localhost:3000/top/list?idx=20'),
                Vue.http.get('http://localhost:3000/top/list?idx=21'),
            ])
            .then((datas) => {
                let worldList = datas;
                store.commit('updateWorldList', worldList);
            })
    },

        //获取歌单
        getPlayList:store=>{
             Vue.http.get('http://localhost:3000/top/playlist')
            .then(function (data) {
                let result = data.body;
                let playLists = result.playlists;
                store.commit('updatePlayList',playLists)
            })
        },
    

        //获取歌曲详情
        getId:(store,id)=>{
            let musicId=store.state.musicId
            musicId=id;
            store.commit('updateMusicId',musicId)
             Promise.all([Vue.http.get('http://localhost:3000/music/url?id=' + musicId),
            Vue.http.get('http://localhost:3000/song/detail?ids=' + musicId)]).
                then(data => {
                    let song={};
                    song.url = data[0].body.data[0].url;
                    song.singdata = data[1].data.songs[0];
                    song.songname = song.singdata.name;
                    song.singer = song.singdata.ar[0].name;
                    song.pic = song.singdata.al.picUrl;

                    store.commit('updateNowSong',song)
                    
                })
        },

        
}