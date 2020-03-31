import React, { useEffect, MouseEvent } from 'react';
import { ShortMovie, FullMovie } from 'interfaces';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMovieDetail, recieveFavoriteMovies } from 'actions';
import { State } from 'reducers';
import styles from './MoviePage.module.scss';
import { MovieDetailState } from 'reducers/movieDetail';

interface Props {
  favoriteMovies: ShortMovie[],
  movieState: MovieDetailState,
  requestMovieDetail: (id: string) => Object,
  recieveFavoriteMovies: (movies: ShortMovie[]) => Object,
}

const MoviePage: React.FC<Props> = ({ favoriteMovies, recieveFavoriteMovies, requestMovieDetail, movieState }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if(id) {
      requestMovieDetail(id);
    } else {
      history.push('/');
    }
  }, [id, requestMovieDetail, history]);

  useEffect(() => {
    if(movieState.error) {
      history.push('/');
    }
  }, [movieState.error, history]);

  const toggleFav = (movie: FullMovie) => {
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
    <>
      {movieState.isLoading || !movieState.movie ?
        <span>{'Loading...'}</span>
        :
        <>
          <h1 className={styles.title}>
            <span>
              {movieState.movie.Title}
            </span>
            <FontAwesomeIcon icon={faStar} className={`${styles.star} ${isFavorited(movieState.movie.imdbID) ? styles.starActive : ''}`}
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                toggleFav(movieState.movie);
              }}
            />
          </h1>
          <div className={styles.movieInfo}>
            {movieState.movie.Poster !== 'N/A' && <img className={styles.movieImage} src={movieState.movie.Poster} alt={movieState.movie.Title} />}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={`${styles.tableHeader} ${styles.tableHeaderLarge}`} colSpan={2}>{'Info'}</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(movieState.movie).map((key, i) => {
                  const value = Object.values(movieState.movie)[i];
                  if(key !== 'Title' && key !== 'Poster' && key !== 'Response' && key !== 'imdbID'
                    && key !== 'imdbRating' && key !== 'imdbVotes' && key !== 'Type'
                    && typeof value === 'string' && value !== 'N/A') {
                    return (
                      <tr key={i}>
                        <td className={styles.tableHeader}>{key}</td>
                        <td>{value}</td>
                      </tr>
                    )
                  }
                  return false;
                })}
                <tr>
                  <td className={`${styles.tableHeader} ${styles.tableHeaderLarge}`} colSpan={2}>{'Ratings'}</td>
                </tr>
                {movieState.movie.Ratings && movieState.movie.Ratings.map((rating, i) =>
                  <tr key={i}>
                    <td className={styles.tableHeader}>{rating.Source}</td>
                    <td>{rating.Value}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      }
    </>
  )
}

const mapStateToProps = (state: State) => ({ movieState: state.movieDetail, favoriteMovies: state.favoriteMovies });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ requestMovieDetail, recieveFavoriteMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
