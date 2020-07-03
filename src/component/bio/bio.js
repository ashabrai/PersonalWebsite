import React from 'react';

import '../../styles/base.scss';
import './bio.scss';


import Selfie from '../../images/picture-ofMyself.jpg';
import Poliroid from '../../images/poloroid.jpg';

class Bio extends React.Component {
    render(){
        return (
            <div className='containerOne'>
                <div className='photos-container'>
                <img src={Selfie} alt='selfie' className='selfieOfMyself'/>
                <img src={Poliroid} alt='polor' className='polly'/>
            </div>
                <div className='bioResponse'>
                <h2>Elevator Pitch</h2>
                <div className='containerPar'>
                <p>Hello, I'm a UI Developer, Technologist Enthusiast, and Customer Service Wizard. Prior work experience I was in finance. I changed careers because I felt that my efforts were not truly making a difference in my community.
                   I love art and technology. The world is in constant change, and the job market in the tech industry is booming! 
                   I took it upon myself to become a developer. Coding has become a huge passion of mine. And though I still have a lot to learn, I am always open to new ideas and would love to work on new projects. </p>
                </div>
                </div>
            </div>
        )
    }
}

export default Bio;
