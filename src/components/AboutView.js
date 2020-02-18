import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AboutView =() => {
    return (
        <React.Fragment>
            <Link to={'./'} className={'closeInternal'}>CLOSE X</Link>
            <div className={`about pageInternal`}>
                <Link to={'./'}>ABOUT</Link>
                <p>
                REVERB RAP AIMS TO PROVIDE A 
                DIFFERENT AESTHETIC TO YOUR 
                FAVORITE HIP HOP AND RAP ARTISTS.
                <br/>
                <br/>
                INSPIRED BY <span className="hightLighted">FOREIGNRAP.COM</span>
                <br/>
                <br/>
                MADE BY: <span className="hightLighted">@KVREEM </span>
                <br/>
                <br/>
                <br/>
                FOLLOW US ON TWITTER & INSTAGRAM <span className="hightLighted">@REVERBRAP</span>
                </p>
            </div>
        </React.Fragment>
    )
};
export default AboutView;