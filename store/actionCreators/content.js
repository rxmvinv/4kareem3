import actionTypes from '../actionTypes';


export function selectItemList ( selected ) {
    return {
      type: actionTypes.SELECT_ITEM,
      selected
    };
}

export function toggleItemOrder( order ) {
    return {
      type: actionTypes[`${order}_ITEM`], //PREVIOUS/NEXT
      order
    };
}
  
export function toggleItemProcess( process ) {
    return {
        type: actionTypes[`${process}_ITEM`], //PAUSE/PLAY
        process
    };
}

export function successItemLoading( loadedItem ) {
    return {
      type: actionTypes.ITEM_LOADED,
      loadedItem
    };
}

export function failureItemLoading(e) {
    console.log(e);
    return {
      type: actionTypes.ITEM_NOT_LOADED
    };
}