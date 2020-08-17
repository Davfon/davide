import React from 'react';
import '../style/App.scss'

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';

class AboutView extends React.Component {
    render() {
        return(
            <div className="App">
                <Logo text="Davide Fontanella"/>
                <NavBar items={["Code", "Gallery", "About"]} selection="About"/>
        
                <div className="app-body">
                    <p>About</p>
                </div>
                <Vignette/>
            </div>
        )
    }
}

export default AboutView;