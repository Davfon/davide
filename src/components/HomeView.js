import React from 'react';
import '../style/App.scss';
import Davide from '../assets/davide.jpg';

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';
import Footer from './Footer';

class HomeView extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="background"/>
                <Vignette/>

                <Logo text="Davide Fontanella"/>

                <NavBar items={["Code", "Gallery", "Videos", "About"]}/>
        
                <div className="app-body">
                    <div className="content-container">
                        <img className="profile-picture" src={Davide} alt=""/>
                        <p>I like coding, taking photos and videos.</p>
                        <p>I like minimalism and the color teal.</p>
                    </div>
                </div>

                <div className="content-fadeout"/>

                <Footer 
                    items={["GitHub", "Instagram", "YouTube"]} 
                    links={["https://github.com/davfon", "http://www.instagram.com/fon.edit", "https://www.youtube.com/channel/UCYDd2K2ppnv8K_UlMrU3yqQ"]}
                />
            </div>
        );
    }
}

export default HomeView;