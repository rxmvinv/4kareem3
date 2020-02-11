import { take, fork, cancel, put, takeLatest} from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import { toggleMenu, toggleVolume } from "../actionCreators/interface";

function* switchMenu( { isOpened } ) {
    yield put(toggleMenu(isOpened));
}

function* switchVolume( { turnedOn } ) {
    yield put(toggleVolume(turnedOn));
}

export function* watchMenu() {
    while (true) {
        yield takeLatest([actionTypes.OPEN_MENU, actionTypes.CLOSE_MENU], switchMenu, action.value);
    }
}

export function* watchVolume() {
    while (true) {
        yield takeLatest([actionTypes.MUTE_VOLUME, actionTypes.UNMUTE_VOLUME], switchVolume, action.value);
    }
}

