import C from "../actionTypes";
//import configs from "../../config/config";

export const currentItem = (state = {}, action) => {
    switch (action.type) {
        case C.PREVIOUS_ITEM:
            return {...state, current: action.value};
        case C.NEXT_ITEM:
            return {...state, current: action.value};
        case C.PAUSE_ITEM:
            return {...state, isPlaying: false}
        case C.PLAY_ITEM:
            return {...state, isPlaying: true}
        case C.PLAY_SELECTED:
            return {...state, isPlaying: true}
        default:
            return state
    }
};

export const selectedList = (state = [], action) => {
    switch (action.type) {
        case C.SELECT_ITEM:
            return [...state, action.value]
        case C.PLAY_SELECTED:
            return [...state]
        default:
            return state
    }
};

export const itemIsLoaded = (state = false, action) => {
    switch (action.type) {
        case C.ITEM_LOADING:
            return state
        case C.ITEM_LOADED:
            return true
        case C.ITEM_NOT_LOADED:
            return false
        default:
            return state
    }
};