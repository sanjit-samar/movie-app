import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import MovieApi from '../../Common/Api/MovieApi';
import { KEY } from '../../Common/Api/MovieApiKey';



const HomePage = () => {

    useEffect(()=>{
        const fetchMovies = async () =>{
            const response = await MovieApi.get(`?apikey=${KEY}&s='Batman'&type=movie`)
            .catch( err => console.log(err, 'error'))
            console.log(response,'res');
        }
        fetchMovies();
    },[])

    return (
        <div className='banner-img'>
            <MovieList />
        </div>
    )
}

export default HomePage;