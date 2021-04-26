import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original"

function Row(props) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerURL] = useState("")

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchURL)
            setMovies(request.data.results)
            return request.data.results
        }
        fetchData()
    }, [props.fetchURL])
    

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
    const handleClick = (movie) => {
        // console.log(movie.title)#
        if (trailerURL){
            setTrailerURL('')
        }
        else{
            movieTrailer(movie?.title || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'))
            }).catch(error => console.log(error))
        }
    }

    var rowClass = 'row__poster'
    var rowClassLg = 'row__poster__lg'

    return (
        <div className='row'>
            <h3><b>{props.title}</b></h3>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img onClick={()=>handleClick(movie)}
                        className={`${props.isLargeRow == true? rowClassLg:rowClass}`} 
                        key={movie.id} 
                        src={`${base_url}${props.isLargeRow == true ? movie.poster_path:movie.backdrop_path}`} 
                        alt={movie.name}
                    /> 
                ))}

            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} className='videoLinks' />}
        </div>
    )
}

export default Row
