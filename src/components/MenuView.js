import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/actionCreators/interface';
import { selectItemList } from '../store/actionCreators/content';


const MenuView =() => {
    const dispatch = useDispatch();
    
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const selectedList = useSelector(state => state.selectedList);

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);
    const chooseCategory = useCallback((item) => {
        console.log(item);
        dispatch(selectItemList(item));
    });


    return (
        <div className={`menu ${menuIsOpened ? 'expanded' : 'released'}`}>
            MenuView
            {
                selectedList.map((item, index) => <div key={index} onClick={() => chooseCategory(item)}>
                    {item}
                </div>)
            }
            <button onClick={() => switchMenu()}>play selected</button>
        </div>
    )
};
export default MenuView;