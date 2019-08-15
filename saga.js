import { put, takeLatest, all } from 'redux-saga/effects';
import es6promise from 'es6-promise'
import { addTodo, loadData, failure } from './actions/';
import { actionTypes } from './actions/actionTypes';

const delay = (ms) => new Promise(res => setTimeout(res, ms));
es6promise.polyfill();

function* loadDataAsync () {
  try {
    const res = yield fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = yield res.json();
    yield put(loadData(data.results));
  } catch (err) {
    yield put(failure(err));
  }
}

function* todoAsync(data) {
  yield delay(1000);
  yield put(addTodo(data.text));
}

function* watchTodoAsync() {
  yield takeLatest(actionTypes.ADD_TODO_ASYNC, todoAsync);
}

function* watchLoadDataAsync() {
  yield takeLatest(actionTypes.LOAD_DATA_ASYNC, loadDataAsync);
}

export default function* rootSaga() {
  yield all([
    watchLoadDataAsync(),
    watchTodoAsync()
  ])
};