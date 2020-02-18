import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFullScreen } from 'react-browser-hooks';
import { Link, useLocation } from 'react-router-dom';
import { toggleItemProcess, requestItemsLoading, toggleItemOrder, selectItemList } from '../store/actionCreators/content';
import { toggleMenu, toggleVolume } from '../store/actionCreators/interface';
import ReactPlayer from 'react-player';


const MainContent = () => {
    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.currentItem);
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const volumeState = useSelector(state => state.volume);
    const itemsLoaded = useSelector(state => state.itemsLoaded);
    const fs = useFullScreen();
    const currentLocation = useLocation().pathname;

    const process = currentItem.isPlaying ? 'PAUSE' : 'PLAY';
    const volume = volumeState ? 100 : 0;

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const changeItemProcess = useCallback((proc) => {
        dispatch(toggleItemProcess(proc ? proc: process));
    }, [currentItem]);

    const switchVolume = useCallback(() => {
        dispatch(toggleVolume(volume));
    }, [volume]);

    const switchBack = useCallback(() => {
        itemsLoaded.find(item => {
            if (item.id === (currentItem.id - 1)) {
                dispatch(toggleItemOrder({order: 'PREVIOUS', current: item }))
            }
        });
    });

    const switchForward = useCallback(() => {
        itemsLoaded.find(item => {
            if (item.id === (currentItem.id + 1)) {
                dispatch(toggleItemOrder({order: 'NEXT', current: item }))
            }
        });
    });

    useEffect(() => {
        // for now it's selecting first element of list but it should dispatch list selector with defined tags
        // and this selection method should dispatch toggleNext;
        console.log(itemsLoaded);
        itemsLoaded.find(item => {
            dispatch(selectItemList(item.category));
            if (item.id === (currentItem.id ? currentItem.id : 1)) {
                dispatch(toggleItemOrder({order: 'NEXT', current: {...item, isPlaying: currentItem.isPlaying} }))
            }
        });
    }, [itemsLoaded]);

    useEffect(() => {
        dispatch(requestItemsLoading({url: '/', category: ['all']}))
    },[]);
    
    return (
        <div>
            <ReactPlayer
                url={currentItem.url}
                playing={currentItem.isPlaying}
                config={{
                  youtube: {
                    playerVars: { disablekb: 1, showinfo: 0 }
                  },
                  facebook: {
                    appId: '12345'
                  }
                }}
                width={'100vw'}
                height={'100vh'}
                onEnded={() => switchForward()}
                onPlay={() => changeItemProcess('PLAY')}
                onPause={() => changeItemProcess('PAUSE')}
            ></ReactPlayer>
            <button className={'itemsSelector'} onClick={() => switchMenu()}>ARTISTS: {'ALL'}</button>
            <div className="mainLogo">REVERBRAP.COM</div>
            <div className={'leftBottomCorner'}>
                <button>submit +</button>
                <button onClick={() => switchVolume()}>{volume ? 'mute' : 'unmute'}</button>
                <button>credit</button>
            </div>

            <div className={'centralButtons'}>
                <button onClick={() => switchBack()}>PREVIOUS</button>
                <button onClick={() => changeItemProcess()}>{process}</button>
                <button onClick={() => switchForward()}>NEXT</button>
            </div>

            <Link to={'./'}>Home</Link>
            
            <div className={'rightTopCorner'}>
                <Link to={'./about'} className={`${currentLocation === '/about' ? 'activeContent' : ''}`}>About</Link>
                <Link to={'./apps'} className={`${currentLocation === '/apps' ? 'activeContent' : ''}`}>Apps</Link>
                <Link to={'./store'}>Store</Link>
            </div>

            <div className={'rightBottomCorner'}>
                <Link to={'./stream'} className={`${currentLocation === '/stream' ? 'activeContent' : ''}`}>Stream</Link>
                <Link to={'./share'} className={`${currentLocation === '/share' ? 'activeContent' : ''}`}>Share</Link>
                <button onClick={fs.toggle}>Fullscreen</button>
            </div>
        </div>
    )
};
export default MainContent;