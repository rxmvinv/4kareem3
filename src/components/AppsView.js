import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AppsView =() => {
    const isSuccess = false;
    const isnertedMail = '';

    return (
        <React.Fragment>
            <Link to={'./'} className={'closeInternal'}>CLOSE X</Link>
            <div className={`apps pageInternal`}>
                <Link to={'./'}>ENTER EMAIL FOR UPDATES</Link>
                COMING SOON TO iOS & APPLE TV
            </div>
        </React.Fragment>
    )
};
export default AppsView;