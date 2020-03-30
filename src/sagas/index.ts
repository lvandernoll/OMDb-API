import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_HELLO_WORLD, RECIEVE_HELLO_WORLD, recieveHelloWorld } from 'actions';
import { Action } from 'redux';

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

export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}
