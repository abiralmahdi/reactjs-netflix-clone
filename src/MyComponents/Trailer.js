import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Trailer(props) {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

    return (
        <div>
          <h1 style={{color:'white'}}>window.location.href</h1>
            <YouTube videoId={props.movie} opts={opts} className='videoLinks' />
        </div>
    )
}


export default Trailer
