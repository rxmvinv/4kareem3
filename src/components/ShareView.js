import React from 'react';
import { Link } from 'react-router-dom';

const ShareView =() => {
    return (
        <React.Fragment>
            <Link to={'./'} className={'closeInternal'}>CLOSE X</Link>
            <div className={`share pageInternal`}>
                <Link to={'./'}>SPREAD THE WORD</Link>
                <button>twitter</button>
                <button>facebook</button>
                <button>copy link</button>
            </div>
        </React.Fragment>
    )
};
export default ShareView;