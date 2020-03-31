import { call, put, takeLatest } from 'redux-saga/effects'
import { recieveSearchMovies, REQUEST_SEARCH_MOVIES, REQUEST_MOVIE_DETAIL, requestMovieDetailSuccess, requestMovieDetailFailed } from 'actions';
import { searchMovies, getMovieById } from 'api';
import { SearchMoviesAction, MovieDetailAction } from 'interfaces';

function* fetchMovies(action: SearchMoviesAction) {
  try {
    const movies = yield call(searchMovies, action.payload.query || '');
    yield put(recieveSearchMovies(movies.Search || []));
  } catch(e) {
    console.error(e);
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
