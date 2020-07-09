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
                <p>I'm a freelance Software Engineer currently based out of Seattle. I am a coding bootcamp grad who got their certificate in Full-Stack Javascript. I mainly focus on helping build awesome UI's. Before I made my transition to this industry, I was previously working in finance. Even though it was a stable career and a way for me to stay connected with my community, I wanted to take on a new challenge in a very tough industry.  I love working on new projects and weaving through a new codebase. It allows more opportunities for me to better my skill set as an engineer and connect with other developers. When I'm not coding in my free time, I enjoy making art and spending quality time with my English Bulldog named Ingrid.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Bio;
