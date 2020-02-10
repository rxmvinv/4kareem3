import React, { Component } from 'react';

const MenuView =() => {
    const isOpened = false;
    const itemsList = [{
        label: 'Item 1',
        image: 'url',
        url: 'url'
    }];

    return (
        <div>
            MenuView
            {
                itemsList.map((item, index) => <div key={index}>
                    {item.label}
                </div>)
            }
            <button>play all</button>
        </div>
    )
};
export default MenuView;