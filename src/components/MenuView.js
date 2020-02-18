import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/actionCreators/interface';
import { selectItemList } from '../store/actionCreators/content';

//set selected items to local array and dispatch "PLAY_SELECTED" on menu closing
//add case to Loaded if SKIPPED then call next/previous again
const MenuView =() => {
    const dispatch = useDispatch();
    
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const selectedList = useSelector(state => state.selectedList);
    const [selected, setSelected] = useState([]);

    const switchMenu = useCallback((play) => {
        if (play) {
            //play selected is changing Loaded REDUCER and adding SKIPPED property if category is not choosen
            //dispatch(selectItemList(item));
        }
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const chooseCategory = useCallback((item, index) => {
        const duplicateArr = selected;
        duplicateArr[index].selected = !duplicateArr[index].selected
        setSelected([...duplicateArr]);
    }, [selected]);

    useEffect(() => {
        setSelected(selectedList);
    }, [selectedList]);

    return (
        <div className={`menu ${menuIsOpened ? 'expanded' : 'released'}`}>
            <button className="closeMenu" onClick={() => switchMenu()}>Close X</button>
            <div className="menuList">
                {
                    selected.map((item, index) => <div key={index} className={`menuItem ${item.selected ? 'selected' : ''}`} style={{backgroundImage: `url(./images/${item.category.toLowerCase()}.png)`}} onClick={() => chooseCategory(item, index)}>
                        {item.category}
                    </div>)
                }
            </div>
            <button className="playAll" onClick={() => switchMenu('play')}> &#9654; play selected</button>
        </div>
    )
};
export default MenuView;