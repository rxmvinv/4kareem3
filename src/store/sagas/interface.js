import { take, fork, cancel, put, takeLatest} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { toggleMenu, toggleVolume } from "../actionCreators/interface";

function* switchMenu( action ) {
    yield put(toggleMenu(action.isOpened));
}

function* switchVolume( action ) {
    yield put(toggleVolume(action.turnedOn));
}

export function* watchMenu() {
    while (true) {
        const openAction = yield take(actionTypes.OPEN_MENU);
        yield fork(switchMenu, openAction);
        const closeAction = yield take(actionTypes.CLOSE_MENU);
        yield fork(switchMenu, closeAction);
    }
}

export function* watchVolume() {
    while (true) {
        const muteAction = yield take(actionTypes.MUTE_VOLUME);
        yield fork(switchVolume, muteAction);
        const unmuteAction = yield take(actionTypes.UNMUTE_VOLUME);
        yield fork(switchVolume, unmuteAction);
    }
}

