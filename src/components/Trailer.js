import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { forwardRef } from "react";
import axios, { fetchMovie } from "../services/axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const Trailer = forwardRef(({ movie }, ref) => {
    const { id = "" } = useParams()
    const [movies, setMovies] = useState([])


    const loadMovie = async () => {
        const response = await fetchMovie(id)
        setMovies(response.videos.results)
        // console.log({response})
    }


    const renderTrailer = () => {
        return movies.map((movie, index) => (
            <div>
                <ReactPlayer
                    width="100%"
                    height="640px"
                    url={`https://www.youtube.com/watch?v=${movie.key}`} />
                {console.log(movie, index)}
            </div>

        ))
    }
    useEffect(() => {
        loadMovie()
    }, [])

    console.log({ movies })

    return (
        <div>
            {renderTrailer()}
        </div>
    );
})

export default Trailer;