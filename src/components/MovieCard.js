import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
        <>
        <Link to = {`/movie/${movie.id}`} style={{textDecoration : "none", color : "white"}}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" style={{ width: "250px", height: "350px" }} />
            <h2 style={{fontSize : "20px" , height:"50px"}} className='mt-3'>{movie ? movie.title : ""}</h2>
            <div className="row">
                <div className="col-6">
                    <p style={{fontSize : "14px"}}>{movie.release_date}</p>
                </div>
                <div className="col-6 text-end">
                    <p style={{fontSize : "14px"}}>Ratings : {movie.vote_average}</p>
                </div>
                <hr />
            </div>
            </Link>
        </>
    )
}

export default MovieCard