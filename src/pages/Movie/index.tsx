import React, { useState, useEffect } from 'react';
import { FullMovie } from 'interfaces';
import { useParams } from 'react-router-dom';
import styles from './MoviePage.module.scss';

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    const apiUrl: string = 'http://www.omdbapi.com';
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
    fetch(encodeURI(`${apiUrl}?apiKey=${apiKey}&i=${id}`))
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(console.error);
  }, [])

  return (
    <div>
      {movie &&
        <>
          <h1>{movie.Title}</h1>
          <div className={styles.movieInfo}>
            {movie.Poster !== 'N/A' && <img className={styles.movieImage} src={movie.Poster} alt={movie.Title} />}
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span>Year:</span>
                <span>{movie.Year}</span>
              </li>
              <li className={styles.listItem}>
                <span>Rated:</span>
                <span>{movie.Rated}</span>
              </li>
              <li className={styles.listItem}>
                <span>Released:</span>
                <span>{movie.Released}</span>
              </li>
              <li className={styles.listItem}>
                <span>Runtime:</span>
                <span>{movie.Runtime}</span>
              </li>
              <li className={styles.listItem}>
                <span>Genre:</span>
                <span>{movie.Genre}</span>
              </li>
              <li className={styles.listItem}>
                <span>Director:</span>
                <span>{movie.Director}</span>
              </li>
              <li className={styles.listItem}>
                <span>Writer:</span>
                <span>{movie.Writer}</span>
              </li>
              <li className={styles.listItem}>
                <span>Actors:</span>
                <span>{movie.Actors}</span>
              </li>
              <li className={styles.listItem}>
                <span>Plot:</span>
                <p>{movie.Plot}</p>
              </li>
              <li className={styles.listItem}>
                <span>Language:</span>
                <span>{movie.Language}</span>
              </li>
              <li className={styles.listItem}>
                <span>Country:</span>
                <span>{movie.Country}</span>
              </li>
              <li className={styles.listItem}>
                <span>Awards:</span>
                <span>{movie.Awards}</span>
              </li>
              <li className={styles.listItem}>
                <span>Metascore:</span>
                <span>{movie.Metascore}</span>
              </li>
              <li className={styles.listItem}>
                <span>imdb rating:</span>
                <span>{movie.imdbRating}</span>
              </li>
              <li className={styles.listItem}>
                <span>imdb votes:</span>
                <span>{movie.imdbVotes}</span>
              </li>
              <li className={styles.listItem}>
                <span>DVD released:</span>
                <span>{movie.DVD}</span>
              </li>
              <li className={styles.listItem}>
                <span>BoxOffice:</span>
                <span>{movie.BoxOffice}</span>
              </li>
              <li className={styles.listItem}>
                <span>Production:</span>
                <span>{movie.Production}</span>
              </li>
              <li className={styles.listItem}>
                <span>Website:</span>
                <span>{movie.Website}</span>
              </li>
            </ul>
          </div>
        </>
      }
    </div>
  )
}

export default MoviePage;
