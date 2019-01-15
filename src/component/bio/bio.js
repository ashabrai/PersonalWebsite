import React from 'react';

import '../../styles/base.scss';
import './bio.scss';


import Selfie from '../../images/picture-ofMyself.jpg';
import Poliroid from '../../images/poloroid.jpg';

class Bio extends React.Component {
    render(){
        return (
            <div className='containerOne'>
                <img src={Selfie} className='selfieOfMyself'/>
                <img src={Poliroid} className='polly'/>

                <div className='bioResponse'>
                <h2>Elevator Pitch</h2>
                <div className='containerPar'>
                <p>Hello, I'm a UI Developer, Technologist Enthusiasts, and Customer Service Wizard. My previous work experience I was in finance. I changed careers because my efforts weren't truly making a difference in my community.
                    I love art, I love technology. The world is changing, and everything is revolving around technology. And I wanted to be a part of it.
                    So I decided the best thing for me was to become a developer. I have the chance to build something from the ground up. Coding has become a huge passion of mine. It's tough but extremely rewarding. I'm always open to new ideas and would love to work on new projects. Please reach out to me. </p>
                </div>
                </div>
            </div>
        )
    }
}

export default Bio;
