import React from 'react';
import { useContext, useEffect} from 'react';
import { MoviesContext } from './moviesContext';
import { AuthContext } from './authContext';

export const PublicPage = () => {
    return <h2>Public Page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies?context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> }):<br />}
        </div>
    </>
}
 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 