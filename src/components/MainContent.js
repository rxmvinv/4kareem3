import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFullScreen } from 'react-browser-hooks';
import { Link } from 'react-router-dom';
import { toggleItemProcess, requestItemsLoading, toggleItemOrder } from '../store/actionCreators/content';
import { toggleMenu, toggleVolume } from '../store/actionCreators/interface';
import ReactPlayer from 'react-player';


const MainContent = () => {
    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.currentItem);
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const volumeState = useSelector(state => state.volume);
    const itemsLoaded = useSelector(state => state.itemsLoaded);
    const selectedList = useSelector(state => state.selectedList);

    const fs = useFullScreen();
    const [itemsList, setItemList] = useState([]);
    let current = itemsLoaded.find(item => {
        return item.id === (currentItem.id ? currentItem.id : 1)
    });

    const videoStatus = ['rendering', 'rendered'];
    const selectedItems = ['all', 'selected'];
    const process = currentItem.isPlaying ? 'PAUSE' : 'PLAY';
    const volume = volumeState ? 100 : 0;

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const changeItemProcess = useCallback(() => {
        dispatch(toggleItemProcess(process));
    }, [currentItem]);

    const switchVolume = useCallback(() => {
        dispatch(toggleVolume(volume));
    }, [volume]);

    useEffect(() => {
        console.log(currentItem);
    }, [currentItem]);

    useEffect(() => {
        console.log(volume);
    }, [volume]);

    useEffect(() => {
        setItemList(itemsLoaded);
    }, [itemsLoaded]);

    useEffect(() => {
        toggleItemOrder(itemsLoaded);
    }, [itemsList]);

    useEffect(() => {
        dispatch(requestItemsLoading({url: '', category: ['all']}))
    },[]);

    return (
        <div>
            <ReactPlayer
                url={"https://www.youtube.com/watch?v=oyq0PaCGnC0"}
                config={{
                  youtube: {
                    playerVars: { disablekb: 1, showinfo: 0 }
                  },
                  facebook: {
                    appId: '12345'
                  }
                }}
            ></ReactPlayer>
            <button className={'itemsSelector'} onClick={() => switchMenu()}>ARTISTS: {'ALL'}</button>
            <div className={'leftBottomCorner'}>
                <button>submit +</button>
                <button onClick={() => switchVolume()}>{volume ? 'mute' : 'unmute'}</button>
                <button>credit</button>
            </div>

            <div className={'centralButtons'}>
                <button onClick={() => toggleItemOrder({order: 'PREVIOUS', current })}>PREVIOUS</button>
                <button onClick={() => changeItemProcess()}>{process}</button>
                <button onClick={() => toggleItemOrder({order: 'NEXT', current })}>NEXT</button>
            </div>

            <Link to={'./'}>Home</Link>
            
            <div className={'rightTopCorner'}>
                <Link to={'./about'}>About</Link>
                <Link to={'./apps'}>Apps</Link>
                <Link to={'./store'}>Store</Link>
            </div>

            <div className={'rightBottomCorner'}>
                <Link to={'./stream'}>Stream</Link>
                <Link to={'./share'}>Share</Link>
                <button onClick={fs.toggle}>Fullscreen</button>
            </div>
        </div>
    )
};
export default MainContent;