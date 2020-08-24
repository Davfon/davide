import React from 'react';
import '../style/App.scss'

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';
import Footer from './Footer';

class AboutView extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="background"/>
                <Vignette/>

                <Logo text="Davide Fontanella"/>

                <NavBar items={["Code", "Gallery", "Videos", "About"]} selection="About"/>
        
                <div className="app-body">
                    <div className="content-container">
                        <p>About</p>
                    </div>
                </div>

                <div className="content-fadeout"/>

                <Footer 
                    items={["GitHub", "Instagram", "YouTube"]} 
                    links={["https://github.com/davfon", "http://www.instagram.com/fon.edit", "https://www.youtube.com/channel/UCYDd2K2ppnv8K_UlMrU3yqQ"]}
                />
            </div>
        )
    }
}

export default AboutView;