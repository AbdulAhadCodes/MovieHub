import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetail = () => {
    const [movieDetail, setMovieDetail] = useState();

    const { id } = useParams();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a79387120926e593770330ed5eca18ac&language=en-US`);
            setMovieDetail(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container text-white">
                <div className="top-img">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ''}`}
                        alt=""
                        className="w-100"
                        style={{ height: '620px', width: '200px' }}
                    />

                    <h2 className="mt-3">{movieDetail ? movieDetail.title : ''}</h2>
                </div>

                <div className="row mt-4">
                    <div className="col-6">
                        <h5>Revenue: ${movieDetail ? movieDetail.revenue : ''}</h5>
                    </div>
                    <div className="col-6 text-end">
                        <h5>Date: {movieDetail ? movieDetail.release_date : ''}</h5>
                    </div>
                </div>

                <div className="description mt-4 mb-4">
                    <p>{movieDetail ? movieDetail.overview : ''}</p>
                </div>

                <div className="genre mt-4 mb-4">
                    <h5>Genres:</h5>
                    <ul>
                        {movieDetail &&
                            movieDetail.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MoviesDetail;
