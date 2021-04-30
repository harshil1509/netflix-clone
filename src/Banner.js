import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './get';
import axios from './axios'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetFlixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]) //Selecting a random number among 20 array items

            return request;
        }
        fetchData();
    }, [])

    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                   {movie?.title || movie?.name || movie?.original_name}
            </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                </button>
                    <button className="banner__button">
                        My List
                </button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
