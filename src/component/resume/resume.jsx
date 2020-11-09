import React from 'react';
import Iframe from 'react-iframe';
import './resume.scss';

const Resume = () => {
    return (
        <div className='wrapper'>
            <div className="resume">
                <Iframe url="https://docs.google.com/document/d/e/2PACX-1vSBR4r7cgWGURa_mZejYZUITvqiTy4UeWB9Bi81qPGuWleX2npuAH-yvN7MoLFMKZwpjPtA7R5-9PQy/pub?embedded=true"
                    width="60%"
                    height="900px"
                    className="resume"
                    display="initial"
                />
            </div>                     
            <div className="message">
                <p>Please view on desktop</p>
            </div>
        </div>
    )
}

export default Resume;

