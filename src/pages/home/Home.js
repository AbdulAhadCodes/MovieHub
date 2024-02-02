import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movies from '../movies/Movies';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a79387120926e593770330ed5eca18ac&language=en-US");
                setMovies(response.data.results);

            } catch (error) {
                console.log(error);
            }
        };

        getAllMovies();
    }, []);

    console.log(movies);

    return (
        <>
            <Carousel
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                className="custom-carousel mt-4"
            >
                {movies.map((movie) => (
                    <div key={movie.id} className="carousel-image-wrapper">
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="carousel-image" />
                    </div>
                ))}
            </Carousel>

            <Movies />
        </>
    );
};

export default Home;
