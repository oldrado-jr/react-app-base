import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { clickedButtonRequested } from './example-slice';
import { clickedButtonFailed, clickedButtonSucceeded } from './actions';

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(request);
    toast.success('Sucesso!');
    yield put(clickedButtonSucceeded());
  } catch (error) {
    toast.error('Deu erro =(');
    yield put(clickedButtonFailed());
  }
}

export default all([takeLatest(clickedButtonRequested.type, exampleRequest)]);
