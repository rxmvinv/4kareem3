import { take, fork, cancel, put, call, delay, takeLatest} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { callApi } from "./callApi";
import { selectItemList, toggleItemOrder, toggleItemProcess, 
    successItemLoading, failureItemLoading } from "../actionCreators/content";


function* addItemToList( { selected } ) {
    yield put(selectItemList(selected));
}

export function* watchList() {
    while (true) {
        const action = yield take(actionTypes.SELECT_ITEM);
        yield fork(addItemToList, action.value);
    }
}

function* startItemLoading( { url, category } ) {
    try {
        const res = yield call(callApi, url, 'GET', {category});
        yield put(successItemLoading(res)); //Loading real data by chunks
    } catch (e) {
        yield put(failureItemLoading(e));
    }
}

export function* watchItemStatus() {
    while (true) {
        const action = yield take(actionTypes.ITEM_LOADING);
        yield fork(startItemLoading, action.value);
    }
}

function* switchItemOrder( action ) {
    yield put(toggleItemOrder(action.value.order));
}

export function* watchItemOrder() {
    while (true) {
        yield takeLatest([actionTypes.PREVIOUS_ITEM, actionTypes.NEXT_ITEM], switchItemOrder);
    }
}

function* switchItemProcess( action ) {
    yield put(toggleItemProcess(action.value.process));
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