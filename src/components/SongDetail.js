import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song){
        return <div>Select a song</div>
    } else {
        return (
            <div className='ui segment'>
                <h3>Song Details  </h3>
                <p>
                    Title: {song.title}
                    <br />
                    Duration: {song.duration}
                </p>
            </div>
          );
    };
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);