import React from 'react';
import Bio from '../bio/bio';


import './dashboard.scss';
import Accomplishment from "../accomplishment/accomplishment";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

class Dashboard extends React.Component {
    render(){
        return (
            <div>
            <div className='introBox'>
                <p>MY NAME IS BRAI</p>
            </div>
                <Bio/>
                <Accomplishment/>
                <Projects/>
                <Contact/>
            </div>


        );
    }
}

export default Dashboard;
