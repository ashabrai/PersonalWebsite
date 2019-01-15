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
                    <div><h3>FLOWER SHOP</h3>
                    <p>A sample site I built for a local florist. Site is only used for wireframing practice. Still being built.</p>
                    <a href='https://github.com/ashabrai/flowerShop'>Click for Github account</a>
                    </div>
                    <div><h3>DOC TALK</h3>
                    <p>A complete app, both frontend and backend logic built with a team. I contributed mostly in the front-end. Building components and login/signup functionality as well as styling.</p>
                    <a href='http://doc-talk-fe.s3-website-us-west-2.amazonaws.com/'>Click for site</a>
                    </div>
                    <div><h3>MOOD FELLOWS</h3>
                    <p>A complete app built with a team, has functional front-end and back-end logic. A blog forum that allows you to post anonomously. App judges the context of the text.</p>
                    <a href='http://www.moodfellows.org/'> Click for site</a>
                    </div>
                </div>


            </section>
        )
    }
}

export default Projects;
