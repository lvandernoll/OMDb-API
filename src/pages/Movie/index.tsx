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
            <table className={styles.table}>
              <th className={`${styles.tableHeader} ${styles.tableHeaderLarge}`}colSpan={2}>{'Info'}</th>
              {Object.keys(movie).map((key, i) => {
                const value = Object.values(movie)[i];
                if(key !== 'Title' && key !== 'Poster' && key !== 'Response' && key !== 'imdbID'
                  && key !== 'imdbRating' && key !== 'imdbVotes' && key !== 'Type'
                  && typeof value === 'string' && value !== 'N/A') {
                  return (
                    <tr key={i}>
                      <th className={styles.tableHeader}>{key}</th>
                      <td>{value}</td>
                    </tr>
                  )
                }
                return false;
              })}
              <th className={`${styles.tableHeader} ${styles.tableHeaderLarge}`} colSpan={2}>{'Ratings'}</th>
              {movie.Ratings && movie.Ratings.map((rating, i) =>
                <tr key={i}>
                  <th className={styles.tableHeader}>{rating.Source}</th>
                  <td>{rating.Value}</td>
                </tr>
              )}
            </table>
          </div>
        </>
      }
    </div>
  )
}

export default MoviePage;
