import actionTypes from '../actionTypes';

export function toggleMenu( isOpened ) {
  console.log(isOpened)
  return {
    type: !isOpened ? actionTypes.OPEN_MENU : actionTypes.CLOSE_MENU,
    isOpened
  };
}

export function toggleVolume( turnedOn ) {
  console.log(turnedOn)
  return {
    type: turnedOn ? actionTypes.MUTE_VOLUME : actionTypes.UNMUTE_VOLUME,
    turnedOn
  };
}

