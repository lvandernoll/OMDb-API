import React, { MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ShortMovie } from 'interfaces';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { requestFavoriteMoviesSuccess } from 'actions';
import { connect } from 'react-redux';
import { State } from 'reducers';
import { FavoriteMoviesState } from 'reducers/favoriteMovies';
import styles from './MoviesOverview.module.scss';

interface Props {
  movies: ShortMovie[],
  favoriteMoviesState: FavoriteMoviesState,
  recieveFavoriteMovies: (movies: ShortMovie[]) => Object,
}

const MoviesOverview: React.FC<Props> = ({ movies, favoriteMoviesState, recieveFavoriteMovies }) => {

  const toggleFav = (movie: ShortMovie) => {
    const favedMovie: ShortMovie[] = favoriteMoviesState.movies.filter(a => a.imdbID === movie.imdbID);
    if(favedMovie.length > 0) {
      const newfavoriteMovies = [...favoriteMoviesState.movies];
      newfavoriteMovies.splice(favoriteMoviesState.movies.indexOf(favedMovie[0]), 1);
      recieveFavoriteMovies(newfavoriteMovies);
    } else {
      const newfavoriteMovies = [...favoriteMoviesState.movies];
      newfavoriteMovies.push(movie);
      recieveFavoriteMovies(newfavoriteMovies);
    }
  }

  const isFavorited = (movieId: string) => favoriteMoviesState.movies.filter(a => a.imdbID === movieId).length > 0;

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

const mapStateToProps = (state: State) => ({ favoriteMoviesState: state.favoriteMovies });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ recieveFavoriteMovies: requestFavoriteMoviesSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesOverview);
