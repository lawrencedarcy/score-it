import React from 'react';
import Iframe from 'react-iframe'

import './MoviePlayer.css'
function MoviePlayer(props) {
  return (
    <div className='movie-container'>
      It's the movie playa
      <Iframe url="https://archive.org/details/CC_1916_07_10_TheVagabond" width="100%"  height="100%" display="initial"
        position="relative" frameborder="0" allowfullscreen/>
    </div>
  );
}

export default MoviePlayer;