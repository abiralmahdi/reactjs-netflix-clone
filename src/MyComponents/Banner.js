import React, {useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'
import {Link} from "react-router-dom";
import movieTrailer from 'movie-trailer'

function Banner() {
    
    const [movie, setMovie] = useState([])
    const [trailerURL, setTrailerURL] = useState("")
    
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRated)

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData()
        }, []) 
    // console.log(movie)

    

    movieTrailer(movie?.name || "" || movie?.title)
    .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get('v'))
    }).catch(error => console.log(error))


    let bannerStyle = {
        backgroundSize:"cover",
        backgroundPosition:"center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        minHeight: "500px",
        objectFit: "contain",
    }

    return (
        <header className='banner' style={bannerStyle}>
            <div className="banner__contents">
                <h1 className='banner__title'>{movie?.name}</h1>
                <div className="banner__buttons">
                <Link to={`/trailer/`} className='links'><button className="banner_button">Play</button></Link>
                    <button className="banner_button">My List</button>
                </div>
                <div className="banner_description">
                    <h3>{movie?.overview}</h3>
                </div>
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner

