import React from 'react';
import Bio from '../bio/bio';
// import Companies from '../companies/companies'

import './dashboard.scss';
// import Projects from "../projects/projects";
import Contact from "../contact/contact";

class Dashboard extends React.Component {
    render(){
        return (
            <div>
            <div className='introBox'>
                <p>MY NAME IS BRAI</p>
            </div>
                <Bio/>
                {/* <Projects/> */}
                {/* <Companies/> */}
                <Contact/>
                
            </div>
        );
    }
}

export default Dashboard;
