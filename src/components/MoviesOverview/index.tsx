import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ShortMovie } from 'interfaces';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { recieveFavoriteMovies } from 'actions';
import { connect } from 'react-redux';
import { State } from 'reducers';
import styles from './MoviesOverview.module.scss';

interface Props {
  movies: ShortMovie[],
  favoriteMovies: ShortMovie[],
  recieveFavoriteMovies: (movies: ShortMovie[]) => Object,
}

const MoviesOverview: React.FC<Props> = ({ movies, favoriteMovies, recieveFavoriteMovies }) => {

  const toggleFav = (movie: ShortMovie) => {
    const favedMovie: ShortMovie[] = favoriteMovies.filter(a => a.imdbID === movie.imdbID);
    if(favedMovie.length > 0) {
      const newfavoriteMovies = [...favoriteMovies];
      newfavoriteMovies.splice(favoriteMovies.indexOf(favedMovie[0]), 1);
      recieveFavoriteMovies(newfavoriteMovies);
    } else {
      const newfavoriteMovies = [...favoriteMovies];
      newfavoriteMovies.push(movie);
      recieveFavoriteMovies(newfavoriteMovies);
    }
  }

  const isFavorited = (movieId: string) => favoriteMovies.filter(a => a.imdbID === movieId).length > 0;

  return (
    <div className={styles.wrapper}>
      {movies.map((movie, i) =>
        <Link to={`/movie/${movie.imdbID}`} className={styles.link} key={i}>
          <article className={styles.movie}>
            <div className={styles.movieImageWrapper}>
              <FontAwesomeIcon icon={faStar} className={`${styles.star} ${isFavorited(movie.imdbID) ? styles.starActive : ''}`}
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

const mapStateToProps = (state: State) => ({ favoriteMovies: state.favoriteMovies });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ recieveFavoriteMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesOverview);
