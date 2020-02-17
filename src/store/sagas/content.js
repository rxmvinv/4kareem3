import { take, fork, cancel, put, call, delay, takeLatest, takeEvery} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { callApi } from "./callApi";
import { selectItemList, toggleItemOrder, toggleItemProcess, 
    successItemsLoading, failureItemLoading } from "../actionCreators/content";

const defaultList = [
    {
        id: 1,
        category: "Default",
        url: "https://www.youtube.com/watch?v=rUWxSEwctFU"
    },
    {
        id: 2,
        category: "Shabjdeed",
        url: "https://www.youtube.com/watch?v=oyq0PaCGnC0",
    },
    {
        id: 3,
        category: "Zenobia",
        url: "https://www.youtube.com/watch?v=baWVj9dMi0U",
    },
    {
        id: 4,
        category: "Soho Rezanejad",
        url: "https://www.youtube.com/watch?v=bUXU3jzYXcM",
    }
];

function* addItemToList( { selected } ) {
    // console.log(selected)
    // yield put(selectItemList(selected));
}

function* switchItemOrder( action ) {
    let {order, current} = action;
    yield put(toggleItemOrder({order, current}));
}

function* startItemsLoading({ url, category }) {
    try {
        console.log( url, category )
        //const res = yield call(callApi, url, 'GET', {category});
        const res = defaultList;
        if (res) {
            yield put(successItemsLoading(res)); //Loading real data by chunks
        }
    } catch (e) {
        yield put(failureItemLoading(e));
    }
}

function* switchItemProcess( action ) {
    yield put(toggleItemProcess(action.process));
}

export function* watchList() {
    // while (true) {
    //     const action = yield take(actionTypes.SELECT_ITEM);
    //     yield fork(addItemToList, action);
    // }
}

export function* watchItemOrder() {
    while (true) {
        const prevAction = yield take(actionTypes.PREVIOUS_ITEM);
        yield fork(switchItemOrder, prevAction);
        const nextAction = yield take(actionTypes.NEXT_ITEM);
        yield fork(switchItemOrder, nextAction);
    }
}

export function* watchItemsStatus() {
    while (true) {
        const action = yield take(actionTypes.ITEMS_LOADING);
        yield fork(startItemsLoading, action.params);
    }
}

export function* watchItemProcess() {
    while (true) {
        const playAction = yield take(actionTypes.PLAY_ITEM);
        yield fork(switchItemProcess, playAction);
        const pauseAction = yield take(actionTypes.PAUSE_ITEM);
        yield fork(switchItemProcess, pauseAction);
    }
}

// export function* watchList() {
//     while (true) {
//         const action = yield take(actionTypes.PLAY_SELECTED);
//         yield put(switchItemProcess(action.value));
//     }
// }