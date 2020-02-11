import C from "../actionTypes";
//import configs from "../../config/config";

export const menuIsOpened = (state = false, action) => {
    switch (action.type) {
        case C.OPEN_MENU:
            return true
        case C.CLOSE_MENU:
            return false
        default:
            return state
    }
};

export const volume = (state = 100, action) => {
    switch (action.type) {
        case C.MUTE_VOLUME:
            return 0
        case C.UNMUTE_VOLUME:
            return 100
        default:
            return state
    }
};