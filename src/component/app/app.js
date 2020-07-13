import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import ArtWork from '../artWork/artWork';
import Resume from '../resume/resume'
import '../../styles/base.scss';

class App extends React.Component {
    render() {
        return (
            <div className='main-Container'>
                <BrowserRouter>
                    <React.Fragment>
                        <nav className='navStyle'>
                            <header> <Link to='/'>BRAI FRAUEN</Link>
                            </header>
                            <ul>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/artWork'>Personal</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/resume'>Resume</Link></li>

                            </ul>
                        </nav>
                        <div>
                            <Route exact path='/' component={Dashboard}/>
                            <Route exact path='/projects' component={Projects}/>
                            <Route exact path='/artWork' component={ArtWork}/>
                            <Route exact path='/contact' component={Contact}/>
                            <Route exact path='/resume' component={Resume}/>
                        </div>
                        <footer>
                            <p>copyright &copy; Brai Frauen</p>
                        </footer>
                    </React.Fragment>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;
