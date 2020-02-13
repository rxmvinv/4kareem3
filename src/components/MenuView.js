import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/actionCreators/interface';

const MenuView =() => {
    const dispatch = useDispatch();
    const itemsList = [{
        label: 'Item 1',
        image: 'url',
        url: 'url'
    }];
    
    const menuIsOpened = useSelector(state => state.menuIsOpened);

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);


    return (
        <div className={`menu ${menuIsOpened ? 'expanded' : 'released'}`}>
            MenuView
            {
                itemsList.map((item, index) => <div key={index}>
                    {item.label}
                </div>)
            }
            <button onClick={() => switchMenu()}>play selected</button>
        </div>
    )
};
export default MenuView;