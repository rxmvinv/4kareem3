import React from 'react';
import { Link } from 'react-router-dom';

const StreamView =() => {

    return (
        <React.Fragment>
            <Link to={'./'} className={'closeInternal'}>CLOSE X</Link>
            <div className={`stream pageInternal`}>
                <Link to={'./'}>STREAM TRACK</Link>
                <button>spotify</button>
                <button>apple</button>
                <button>tidal</button>
            </div>
        </React.Fragment>
    )
};
export default StreamView;