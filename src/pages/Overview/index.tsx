import React, { MouseEvent } from 'react';
import { ShortMovie } from 'interfaces';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import styles from './OverviewPage.module.scss';
interface Props {
  movies: ShortMovie[],
  favMovies: ShortMovie[],
  setFavMovies: (movies: ShortMovie[]) => void,
}

const OverviewPage: React.FC<Props> = ({ movies, favMovies, setFavMovies }) => {
  const toggleFav = (movie: ShortMovie) => {
    const favedMovie: ShortMovie[] = favMovies.filter(a => a.imdbID === movie.imdbID);
    if(favedMovie.length > 0) {
      const newFavMovies = [...favMovies];
      newFavMovies.splice(favMovies.indexOf(favedMovie[0]), 1);
      setFavMovies(newFavMovies);
    } else {
      const newFavMovies = [...favMovies];
      newFavMovies.push(movie);
      setFavMovies(newFavMovies);
    }
  }

  return (
    <div className={styles.wrapper}>
      {movies.map((movie, i) =>
        <Link to={`/movie/${movie.imdbID}`} className={styles.link} key={i}>
          <article className={styles.movie}>
            <div className={styles.movieImageWrapper}>
              <FontAwesomeIcon icon={faStar} className={`${styles.star} ${favMovies.filter(a => a.imdbID === movie.imdbID).length > 0 ? styles.starActive : ''}`}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  toggleFav(movie);
                }}
              />
              <img className={movie.Poster === 'N/A' ? styles.movieImage : ''} src={movie.Poster} alt={movie.Title} />
            </div>
            <span className={styles.movieTitle}>{movie.Title}</span>
            <span className={styles.movieYear}>{movie.Year}</span>
          </article>
        </Link>
      )}
      {movies.length === 0 &&
        <h1>{'No movies here...'}</h1>
      }
    </div>
  )
}

const mapStateToProps = (state: any) => ({ movies: state.searchMoviesReducer });

export default connect(mapStateToProps)(OverviewPage);