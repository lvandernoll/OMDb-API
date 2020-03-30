import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_HELLO_WORLD, RECIEVE_HELLO_WORLD, recieveHelloWorld, recieveSearchMovies, REQUEST_SEARCH_MOVIES } from 'actions';
import { Action } from 'redux';
import { searchMovies } from 'api';
import { SearchMoviesAction } from 'interfaces';

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

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(REQUEST_SEARCH_MOVIES, fetchMovies);
}
