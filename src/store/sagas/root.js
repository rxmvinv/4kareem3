import { all, call } from 'redux-saga/effects';
import { watchMenu, watchVolume } from './interface';
import { watchList, watchItemOrder, watchItemsStatus, watchItemProcess } from './content';

export default function* rootSaga() {
    yield all([
        call(watchMenu),
        call(watchVolume),
        call(watchList),
        call(watchItemOrder),
        call(watchItemsStatus),
        call(watchItemProcess)
    ]);
}