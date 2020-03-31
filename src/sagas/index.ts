import { call, put, takeLatest } from 'redux-saga/effects'
import { requestSearchMoviesSuccess, REQUEST_SEARCH_MOVIES, REQUEST_MOVIE_DETAIL, requestMovieDetailSuccess, requestMovieDetailFailed, requestSearchMoviesFailed } from 'actions';
import { searchMovies, getMovieById } from 'api';
import { SearchMoviesAction, MovieDetailAction } from 'interfaces';

function* fetchMovies(action: SearchMoviesAction) {
  if(!action.payload.query) {
    yield put(requestSearchMoviesFailed('No query was provided'));
  } else {
    try {
      const movies = yield call(searchMovies, action.payload.query);
      if(movies.response === 'False') {
        yield put(requestSearchMoviesFailed('No movies were found'));
      } else {
        yield put(requestSearchMoviesSuccess(movies.Search));
      }
    } catch(e) {
      console.error(e);
      yield put(requestSearchMoviesFailed('Request failed'));
    }
  }
}

function* fetchMovieDetail(action: MovieDetailAction) {
  if(!action.payload.id) {
    yield put(requestMovieDetailFailed('No id was provided'));
  } else {
    try {
      const movie = yield call(getMovieById, action.payload.id);
      if(movie.Response === 'False') {
        yield put(requestMovieDetailFailed('No movie was found'));
      } else {
        yield put(requestMovieDetailSuccess(movie));
      }
    } catch(e) {
      console.error(e);
      yield put(requestMovieDetailFailed('Request failed'));
    }
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_SEARCH_MOVIES, fetchMovies);
  yield takeLatest(REQUEST_MOVIE_DETAIL, fetchMovieDetail);
}
