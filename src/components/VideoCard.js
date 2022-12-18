import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'
import { ChevronRightOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom";



const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        
        <div ref={ref} className="video-card">
            
            <img alt={ movie.title || movie.name || movie.original_name } src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} />
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <Link to={`/trailer/${movie.id}`} className='cek'>

            <h2>{ movie.title || movie.name || movie.original_name } </h2>
            <span><ChevronRightOutlined></ChevronRightOutlined></span>
            </Link>
            <p className="video-card-stats">
                {movie.media_type ? movie.media_type : ''} {'• '}
                {movie.release_date || movie.first_air_date} {'• '}
                <ThumbUpSharp /> {' '}
                {movie.vote_count}</p>
        </div>
    )
})

export default VideoCard
