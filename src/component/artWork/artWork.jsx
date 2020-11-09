import React from 'react';
import './artWork.scss';

import paintingOne from '../../images/BR-painting.jpg';
import paintingTwo from '../../images/closeup.jpg';
import paintingThree from '../../images/painting-onBC.jpg';
import paintingFour from '../../images/painting-with-candle.jpg';
import paintingFive from '../../images/painting.jpg';
import paintingSix from '../../images/wall-pink-painting.jpg';


const ArtWork = () => {
    return(
        <div className='container-box'>
            <div className='paintings'>
                <img src={paintingOne} alt="one"/>
                <img src={paintingTwo}alt="two"/>
                <img src={paintingThree} alt="three"/>
                <img src={paintingFour}alt="four"/>
                <img src={paintingFive}alt="five"/>
                <img src={paintingSix}alt="six"/>      
            </div>
        </div>
    )
}

export default ArtWork;

