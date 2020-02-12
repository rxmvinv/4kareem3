import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleItemProcess } from '../store/actionCreators/content';
import { toggleMenu, toggleVolume } from '../store/actionCreators/interface';

const MainContent = () => {
    const dispatch = useDispatch();
    const currentItemProcess = useSelector(state => state.currentItem.isPlaying);
    const menuIsOpened = useSelector(state => state.menuIsOpened);
    const volume = useSelector(state => state.volume);

    const videoStatus = ['rendering', 'rendered'];
    const selectedItems = ['all', 'selected'];
    const process = currentItemProcess ? 'PAUSE' : 'PLAY';

    const switchMenu = useCallback(() => {
        dispatch(toggleMenu(!menuIsOpened));
    }, [menuIsOpened]);

    const changeItemProcess = useCallback(() => {
        dispatch(toggleItemProcess(process));
    }, [currentItemProcess]);

    const switchVolume = useCallback(() => {
        dispatch(toggleVolume(!volume));
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

    return (
        <div>
            MainContent
            <button onClick={() => switchMenu()}>submit +</button>
            <button onClick={() => switchVolume()}>{volume ? 'mute' : 'unmute'}</button>
            <button>credit</button>

            <button>previous</button>
            <button onClick={() => changeItemProcess()}>{process}</button>
            <button>next</button>

            <Link to={'./'}>Home</Link>
            <Link to={'./menu'}>menu</Link>
            <Link to={'./about'}>about</Link>
            <Link to={'./apps'}>apps</Link>
            <Link to={'./stream'}>stream</Link>
            <Link to={'./share'}>share</Link>
        </div>
    )
};
export default MainContent;