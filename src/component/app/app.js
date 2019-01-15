import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import Contact from '../contact/contact';
import Projects from '../projects/projects';
import Social from '../social/social';

import '../../styles/base.scss';

class App extends React.Component {
    render() {
        return (
            <div className='main-Container'>
                <BrowserRouter>
                    <React.Fragment>
                        <nav className='navStyle'>
                            <header> <Link to='dashboard'>BRAI FRAUEN</Link>
                            </header>
                            <ul>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/social'>Personal</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>


                            </ul>
                        </nav>
                        <div>
                            <Route exact path='/dashboard' component={Dashboard}/>
                            <Route exact path='/projects' component={Projects}/>
                            <Route exact path='/social' component={Social}/>
                            <Route exact path='/contact' component={Contact}/>
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
