import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedReducer from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer(rootReducer),
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
