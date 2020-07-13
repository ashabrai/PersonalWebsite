import React, { Component } from 'react';
import Foundry from '../../images/foundry.png';
import ChangeHealth from '../../images/change.png';
// import Figure from '../../images/figureOne.jpg';

import './companies.scss';

export default class companies extends Component {
    render() {
        return (
            <div className='companies'>
                 <div className='recentCompanies'>
                    <p>Recent companies I've done work for</p>
                </div>
                {/* <div>
                    <img src={Figure} alt='Figure Drawing' className='figureDrawing'/>
                </div> */}
                <div className='companiesIveWorkedAt'>
                    <img src={Foundry} alt='Foundry Interactive' className='foundry'/>
                    <img src={ChangeHealth} alt='Change Healthcare' className='changeHealth'/>
                </div>
            </div>
        )
    }
}
