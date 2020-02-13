import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFullScreen } from 'react-browser-hooks';
import { Link } from 'react-router-dom';
import { toggleItemProcess } from '../store/actionCreators/content';
import { toggleMenu, toggleVolume } from '../store/actionCreators/interface';


const MainContent = () => {
    const dispatch = useDispatch();
    const currentItemProcess = useSelector(state => state.currentItem.isPlaying);
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const volumeState = useSelector(state => state.volume);
    const fs = useFullScreen();

    const videoStatus = ['rendering', 'rendered'];
    const selectedItems = ['all', 'selected'];
    const process = currentItemProcess ? 'PAUSE' : 'PLAY';
    const volume = volumeState ? 100 : 0;

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const changeItemProcess = useCallback(() => {
        dispatch(toggleItemProcess(process));
    }, [currentItemProcess]);

    const switchVolume = useCallback(() => {
        dispatch(toggleVolume(volume));
    }, [volume]);

    useEffect(() => {
        console.log(currentItemProcess);
    }, [currentItemProcess]);

    useEffect(() => {
        console.log(menuIsOpened);
    }, [menuIsOpened]);

    useEffect(() => {
        console.log(volume);
    }, [volume]);

    useEffect(() => {
        console.log('heeeeey');
    }, []);

    return (
        <div>
            MainContent
            <button onClick={() => switchMenu()}>ARTISTS: {'ALL'}</button>
            <button>submit +</button>
            <button onClick={() => switchVolume()}>{volume ? 'mute' : 'unmute'}</button>
            <button>credit</button>

            <button>previous</button>
            <button onClick={() => changeItemProcess()}>{process}</button>
            <button>next</button>

            <Link to={'./'}>Home</Link>
            <Link to={'./about'}>about</Link>
            <Link to={'./apps'}>apps</Link>
            <Link to={'./stream'}>stream</Link>
            <Link to={'./share'}>share</Link>
            <button onClick={fs.toggle}>Fullscreen</button>
        </div>
    )
};
export default MainContent;