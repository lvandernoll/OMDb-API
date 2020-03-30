import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_HELLO_WORLD, RECIEVE_HELLO_WORLD, recieveHelloWorld, recieveSearchMovies, REQUEST_SEARCH_MOVIES, REQUEST_MOVIE_DETAIL, recieveMovieDetail } from 'actions';
import { Action } from 'redux';
import { searchMovies, getMovieById } from 'api';
import { SearchMoviesAction, MovieDetailAction } from 'interfaces';

function* helloWorld(action: Action<any>) {
  try {
    // do api call
    // const user = yield (call(Api.fetchUser, action.payload.userId));
    yield put(recieveHelloWorld('Hello world from redux saga!'))
  } catch(e) {
    yield put({
      type: RECIEVE_HELLO_WORLD,
      text: 'Error world from redux saga!',
    });
  }
}

function* fetchMovies(action: SearchMoviesAction) {
  try {
    const movies = yield call(searchMovies, action.payload.query || '');
    yield put(recieveSearchMovies(movies.Search || []));
  } catch(e) {
    console.error(e);
  }
}

function* fetchMovieDetail(action: MovieDetailAction) {
  try {
    const movie = yield call(getMovieById, action.payload.id || '');
    yield put(recieveMovieDetail(movie));
  } catch(e) {
    console.error(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(REQUEST_SEARCH_MOVIES, fetchMovies);
  yield takeLatest(REQUEST_MOVIE_DETAIL, fetchMovieDetail);
}
