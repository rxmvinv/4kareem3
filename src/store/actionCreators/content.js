import actionTypes from '../actionTypes';


export function selectItemList( selected ) {
    return {
      type: actionTypes.SELECT_ITEM,
      selected
    };
}

export function toggleItemOrder( {order, current} ) {
    return {
      type: actionTypes[`${order}_ITEM`], //PREVIOUS/NEXT
      current,
      order
    };
}
  
export function toggleItemProcess( process ) {
    return {
        type: actionTypes[`${process}_ITEM`], //PAUSE/PLAY
        process
    };
}

export function requestItemsLoading( params ) {
  return {
    type: actionTypes.ITEMS_LOADING,
    params
  };
}

export function successItemsLoading( loadedItems ) {
  console.log(loadedItems, 'almost loaded')
    return {
      type: actionTypes.ITEMS_LOADED,
      loadedItems
    };
}

export function failureItemLoading(e) {
    console.log(e);
    return {
      type: actionTypes.ITEMS_NOT_LOADED
    };
}