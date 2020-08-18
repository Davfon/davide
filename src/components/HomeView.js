import React from 'react';
import '../style/App.scss'

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';

class HomeView extends React.Component {
    render() {
        return (
            <div className="App">
                <Logo text="Davide Fontanella"/>
                <NavBar items={["Code", "Gallery", "About"]}/>
        
                <div className="app-body">
                    <div className="profile-picture"/>
                    <p>I like coding, taking photos and videos.</p>
                    <p>I like minimalism and the color teal.</p>
                </div>
        
                <Vignette/>
            </div>
        );
    }
}

export default HomeView;