import { takeEvery, all } from 'redux-saga/effects';
import { createTestAsync } from './test';
import { REQUEST } from '../contants/index';

export default function * rootSaga () {
  yield all([
    takeEvery(REQUEST, createTestAsync)
  ])
}
