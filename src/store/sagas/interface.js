import { take, fork, cancel, put, takeLatest} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { toggleMenu, toggleVolume } from "../actionCreators/interface";

function* switchMenu( action ) {
    yield put(toggleMenu(action.value.isOpened));
}

function* switchVolume( action ) {
    yield put(toggleVolume(action.value.turnedOn));
}

export function* watchMenu() {
    while (true) {
        yield takeLatest([actionTypes.OPEN_MENU, actionTypes.CLOSE_MENU], switchMenu);
    }
}

export function* watchVolume() {
    while (true) {
        yield takeLatest([actionTypes.MUTE_VOLUME, actionTypes.UNMUTE_VOLUME], switchVolume);
    }
}

