import { take, fork, cancel, put, call, delay, takeLatest, takeEvery} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { callApi } from "./callApi";
import { selectItemList, toggleItemOrder, toggleItemProcess, 
    successItemsLoading, failureItemLoading } from "../actionCreators/content";


function* addItemToList( { selected } ) {
    yield put(selectItemList(selected));
}

function* switchItemOrder( action ) {
    let {order, current} = action.value
    yield put(toggleItemOrder({order, current}));
}

function* startItemsLoading( { url, category } ) {
    try {
        console.log('starting', { url, category });
        const res = yield call(callApi, url, 'GET', {category});
        if (res) {
            yield put(successItemsLoading(res)); //Loading real data by chunks
        }
    } catch (e) {
        yield put(failureItemLoading(e));
    }
}

function* switchItemProcess( action ) {
    yield put(toggleItemProcess(action.value.process));
}

export function* watchList() {
    while (true) {
        const action = yield take(actionTypes.SELECT_ITEM);
        yield fork(addItemToList, action.value);
    }
}

export function* watchItemOrder() {
    while (true) {
        yield takeLatest([actionTypes.PREVIOUS_ITEM, actionTypes.NEXT_ITEM], switchItemOrder);
    }
}

export function* watchItemsStatus() {
    while (true) {
        // const action = yield take(actionTypes.ITEMS_LOADING);
        // console.log(action);
        yield takeLatest([actionTypes.ITEMS_LOADING], startItemsLoading);
        // yield fork(startItemsLoading, action.params);
    }
}

export function* watchItemProcess() {
    while (true) {
        yield takeLatest([actionTypes.PAUSE_ITEM, actionTypes.PLAY_ITEM], switchItemProcess);
    }
}

// export function* watchList() {
//     while (true) {
//         const action = yield take(actionTypes.PLAY_SELECTED);
//         yield put(switchItemProcess(action.value));
//     }
// }