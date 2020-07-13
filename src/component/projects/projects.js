import React from 'react';
import './projects.scss';

class Projects extends React.Component {

    render() {
        return(
            <section className='containerFour'>

                <div className='projectTitle-div'>
                    <p> Projects</p>
                </div>

                <div className='projectDiv'>
                    <div><h3>Change Healthcare/Trading Partner</h3>
                    <p>Developed a public-facing application allowing end-users to search for Healthcare providers/payers.</p>
                    <a href='https://payerlist.changehealthcare.com/'>Click to view site</a>
                    </div>
                    <div><h3>Website</h3>
                    <p>A ongoing project, constantly updating with new work and information that I've done. Currently you are viewing the site.</p>
                    <a href='https://github.com/ashabrai/PersonalWebsite'>Click to view Github Repo</a>
                    </div>
                    <div><h3>MOOD FELLOWS</h3>
                    <p>A complete app built with a team, has functional front-end and back-end logic. A blog forum that allows you to post anonomously. App judges the context of the text.</p>
                    <a href='http://www.moodfellows.org/'>Click to view site</a>
                    </div>
                </div>


            </section>
        )
    }
}

export default Projects;
