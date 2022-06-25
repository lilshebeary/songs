import { combineReducers } from 'redux';

// reducers
const songsReducer = () => {
    return [
        { title: 'Flowers in Your Hair', duration: '1:49' },
        { title: 'Delicate', duration: '3:55' },
        { title: "Just Can't Get Enough", duration: '3:32' },
        { title: 'Stuck On You', duration: '3:12' }, 
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});