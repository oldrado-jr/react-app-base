import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './exampleSlice';

const request = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    toast.success('Sucesso!');
    yield put({
      type: actions.clickedButtonSucceeded.type,
    });
  } catch (error) {
    toast.error('Deu erro =(');
    yield put({
      type: actions.clickedButtonFailed.type,
    });
  }
}

export default all([
  takeLatest(actions.clickedButtonRequested.type, exampleRequest),
]);
