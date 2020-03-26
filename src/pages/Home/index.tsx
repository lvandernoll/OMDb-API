import React from 'react';
import { ShortMovie } from 'interfaces';
import styles from './HomePage.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  movies: ShortMovie[],
}

const HomePage: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.wrapper}>
      {movies.map((movie, i) =>
        <Link to={`/movie/${movie.imdbID}`} className={styles.link} key={i}>
          <article className={styles.movie}>
            <img className={movie.Poster === 'N/A' ? styles.movieImage : ''} src={movie.Poster} alt={movie.Title} />
            <span className={styles.movieTitle}>{movie.Title}</span>
            <span className={styles.movieYear}>{movie.Year}</span>
          </article>
        </Link>
      )}
    </div>
  )
}

export default HomePage;
