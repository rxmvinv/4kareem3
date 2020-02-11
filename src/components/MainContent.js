import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
    const videoStatus = ['rendering', 'rendered', 'playing'];
    const selectedItems = ['all', 'selected'];

    return (
        <div>
            MainContent
            <button>submit +</button>
            <button>mute</button>
            <button>credit</button>

            <button>previous</button>
            <button>play</button>
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