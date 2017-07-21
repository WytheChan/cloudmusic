export default {
    done: state => {
        state.isDone = true
    },
    updateOfficalList: (state,officialList) => {
        state.officialList = officialList;
    },
    updateWorldList: (state,worldList) => {
        state.worldList = worldList;
    },
     updatePlayList: (state,playList) => {
        state.playList = playList;
    },
    updateMusicId:(state,id)=>{
        state.musicId=id;
    },
    updateNowSong:(state,song)=>{
        state.nowSong=song
    }
}