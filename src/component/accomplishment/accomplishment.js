import React from 'react';
import highFive from '../../images/clap-hands.jpg';

import './accomplishment.scss';


class Accomplishment extends React.Component {
    render() {
        return (
          <section className='containerThree'>
              <div className='accomplish-Div'><p>Accomplishments</p></div>
              <div className='div-next-photo'><p>Certificate of Achievement for Full-Stack Javascript </p></div>
              <img src={highFive} className='high'/>

          </section>

        )
    }
}

export default Accomplishment;
