import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
