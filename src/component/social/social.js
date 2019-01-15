import React from 'react';
import './social.scss';

import paintingOne from '../../images/BR-painting.jpg';
import paintingTwo from '../../images/closeup.jpg';
import paintingThree from '../../images/painting-onBC.jpg';
import paintingFour from '../../images/painting-with-candle.jpg';
import paintingFive from '../../images/painting.jpg';
import paintingSix from '../../images/wall-pink-painting.jpg';


class Social extends React.Component {
    render() {
        return(
            <div className='container-box'>
                <div><h2>When I'm not coding...</h2></div>

                <div className='paintings'>
                    <img src={paintingOne}/>
                    <img src={paintingTwo}/>
                    <img src={paintingThree}/>
                    <img src={paintingFour}/>
                    <img src={paintingFive}/>
                    <img src={paintingSix}/>            
            </div>

                </div>
            )
        }
}

export default Social;

