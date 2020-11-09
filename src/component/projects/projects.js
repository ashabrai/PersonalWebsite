import React from 'react';
import './projects.scss';

const Projects = () => { 
        return(
            <section className='containerFour'>
                <div className='projectTitle-div'>
                    <p> Projects</p>
                </div>
                <div className='projectDiv'>
                    <div><h3>COVID-19</h3>
                        <p>A data app, that allows a user to see COVID-19 data results on ether a state or country.</p>
                        <a href='http://cov19-reactapp.herokuapp.com/'>Click to view site</a>
                    </div>
                    <div>
                        <h3>Change Healthcare/Trading Partner</h3>
                        <p>Developed a public-facing application allowing end-users to search for Healthcare providers/payers.</p>
                        <a href='https://payerlist.changehealthcare.com/'>Click to view site</a>
                    </div>
                    <div>
                        <h3>Website</h3>
                        <p>A ongoing project, constantly updating with new work and information that I've done. Currently you are viewing the site.</p>
                        <a href='https://github.com/ashabrai/PersonalWebsite'>Click to view Github Repo</a>
                    </div>
                </div>
            </section>
        )
    }

export default Projects;
