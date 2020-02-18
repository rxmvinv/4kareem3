import C from "../actionTypes";
//import configs from "../../config/config";

export const currentItem = (state = {isPlaying: false}, action) => {
    switch (action.type) {
        case C.PREVIOUS_ITEM:
            console.log(state, action);
            return {...state, ...action.current};
        case C.NEXT_ITEM:
            console.log(state, action);
            return {...state, ...action.current};
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
            // let presented = state;
            // presented.forEach((tag, index) => {
            //     if (tag === action.selected) {
            //         delete presented[index];
            //     }
            // });
            // presented.push(action.selected);
            // console.log(presented, state, action)
            // return presented
            // // console.log(action)
            return [...state, action.selected]
        case C.PLAY_SELECTED:
            return action.selected//[...state]
        default:
            return state
    }
};

export const itemsLoaded = (state = [], action) => {
    switch (action.type) {
        case C.ITEMS_LOADING:
            return [...state]
        case C.ITEMS_LOADED:
            return action.loadedItems
        case C.ITEMS_NOT_LOADED:
            return state
        default:
            return state
    }
};