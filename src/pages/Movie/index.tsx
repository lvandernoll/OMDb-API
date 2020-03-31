import React, { useEffect, MouseEvent } from 'react';
import { FullMovie, ShortMovie } from 'interfaces';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMovieDetail, recieveFavoriteMovies } from 'actions';
import { State } from 'reducers';
import styles from './MoviePage.module.scss';

interface Props {
  favoriteMovies: ShortMovie[],
  movie: FullMovie,
  requestMovieDetail: (id: string) => Object,
  recieveFavoriteMovies: (movies: ShortMovie[]) => Object,
}

const MoviePage: React.FC<Props> = ({ favoriteMovies, recieveFavoriteMovies, requestMovieDetail, movie }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if(id) {
      requestMovieDetail(id);
    } else {
      history.push('/');
    }
  }, [id, history, requestMovieDetail])

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
    <>
      <h1 className={styles.title}>
        <span>
          {movie.Title}
        </span>
        <FontAwesomeIcon icon={faStar} className={`${styles.star} ${isFavorited(movie.imdbID) ? styles.starActive : ''}`}
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            toggleFav(movie);
          }}
        />
      </h1>
      <div className={styles.movieInfo}>
        {movie.Poster !== 'N/A' && <img className={styles.movieImage} src={movie.Poster} alt={movie.Title} />}
        <table className={styles.table}>
          <tbody>
            <td className={`${styles.tableHeader} ${styles.tableHeaderLarge}`}colSpan={2}>{'Info'}</td>
            {Object.keys(movie).map((key, i) => {
              const value = Object.values(movie)[i];
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
            <td className={`${styles.tableHeader} ${styles.tableHeaderLarge}`} colSpan={2}>{'Ratings'}</td>
            {movie.Ratings && movie.Ratings.map((rating, i) =>
              <tr key={i}>
                <td className={styles.tableHeader}>{rating.Source}</td>
                <td>{rating.Value}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

const mapStateToProps = (state: State) => ({ movie: state.movieDetail, favoriteMovies: state.favoriteMovies });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ requestMovieDetail, recieveFavoriteMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
