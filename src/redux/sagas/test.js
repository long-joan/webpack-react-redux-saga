import { select, put, call } from 'redux-saga/effects';
import { getData } from '../../utils/api';
import { requestSuccAction } from '../actions/index';

export function * createTestAsync () {
  const json = yield call(getData);
  yield put(requestSuccAction(json.data.data));
}
