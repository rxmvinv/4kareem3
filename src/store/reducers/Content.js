import C from "../actionTypes";
//import configs from "../../config/config";

export const currentItem = (state = {isPlaying: false}, action) => {
    switch (action.type) {
        case C.PREVIOUS_ITEM:
            console.log(action);
            return {...state, current: action.value};
        case C.NEXT_ITEM:
            console.log(action);
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

const defaultList = [
    {
        id: 1,
        category: "Shabjdeed",
        url: "https://www.youtube.com/watch?v=oyq0PaCGnC0",
    },
    {
        id: 2,
        category: "Zenobia",
        url: "https://www.youtube.com/watch?v=baWVj9dMi0U",
    },
    {
        id: 3,
        category: "Soho Rezanejad",
        url: "https://www.youtube.com/watch?v=bUXU3jzYXcM",
    }
];

export const itemsLoaded = (state = defaultList, action) => {
    switch (action.type) {
        case C.ITEMS_LOADING:
            return state
        case C.ITEMS_LOADED:
            return defaultList//action.loadedItems
        case C.ITEMS_NOT_LOADED:
            return state
        default:
            return state
    }
};