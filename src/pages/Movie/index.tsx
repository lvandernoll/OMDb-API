import React, { useEffect, MouseEvent } from 'react';
import { FullMovie, ShortMovie } from 'interfaces';
import { useParams, useHistory } from 'react-router-dom';
import styles from './MoviePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMovieDetail } from 'actions';

interface Props {
  favMovies: ShortMovie[],
  movie: FullMovie,
  setFavMovies: (movies: ShortMovie[]) => void,
  requestMovieDetail: (id: string) => Object,
}

const MoviePage: React.FC<Props> = ({ favMovies, setFavMovies, requestMovieDetail, movie }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if(id) {
      // (async () => {
      //   const data = await getMovieById(id);
      //   if(data.Response === 'True') {
      //     setMovie(data);
      //   } else {
      //     history.push('/');
      //   }
      // })();
      requestMovieDetail(id);
    } else {
      history.push('/');
    }
  }, [id, history, requestMovieDetail])

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
    <>
      <h1 className={styles.title}>
        <span>
          {movie.Title}
        </span>
        <FontAwesomeIcon icon={faStar} className={`${styles.star} ${favMovies.filter(a => a.imdbID === movie.imdbID).length > 0 ? styles.starActive : ''}`}
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

const mapStateToProps = (state: any) => ({ movie: state.movieDetailReducer });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ requestMovieDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);