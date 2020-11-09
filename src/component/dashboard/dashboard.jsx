import React from 'react';
import Bio from '../bio/bio';
import './dashboard.scss';
import Contact from "../contact/contact";

const Dashboard = () => {
    return (
        <div>
            <div className='introBox'>
                <p>MY NAME IS BRAI</p>
            </div>
            <Bio/>
            <Contact/>
        </div>
        );
    }

export default Dashboard;
