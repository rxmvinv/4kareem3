import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';
import * as reducers from './reducers';
import stateData from './initialState';

const storeFactory = ( initialState=stateData ) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(rootSaga);

    return store;
}


export default storeFactory