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
            // dispatch(selectItemList(item));
        }
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const chooseCategory = useCallback((item) => {
        const tags = selected;
        for (let t in tags) {
            if (tags[t] === item) {
                delete tags[t];
            } 
            // else {
            //     tags.push(item);
            // }
        }
        const uniq = [...new Set(tags)];
        setSelected(uniq);
    }, [selected]);

    useEffect(() => {
        console.log(selectedList);
        setSelected(selectedList);
    }, [selectedList]);

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <div className={`menu ${menuIsOpened ? 'expanded' : 'released'}`}>
            <button className="closeMenu" onClick={() => switchMenu()}>Close X</button>
            <div className="menuList">
                {
                    selectedList.map((item, index) => <div key={index} className={`menuItem ${''}`} style={{backgroundImage: `url(./images/${item.toLowerCase()}.png)`}} onClick={() => chooseCategory(item)}>
                        {item}
                    </div>)
                }
            </div>
            <button className="playAll" onClick={() => switchMenu('play')}> &#9654; play selected</button>
        </div>
    )
};
export default MenuView;