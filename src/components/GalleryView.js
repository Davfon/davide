import React from 'react';
import '../style/App.scss'

import insta1 from '../assets/insta1.jpg';
import insta2 from '../assets/insta2.jpg';
import insta3 from '../assets/insta3.jpg';
import insta4 from '../assets/insta4.jpg';
import insta5 from '../assets/insta5.jpg';
import insta6 from '../assets/insta6.jpg';
import insta7 from '../assets/insta7.jpg';
import insta8 from '../assets/insta8.jpg';
import insta9 from '../assets/insta9.jpg';
import insta10 from '../assets/insta10.jpg';
import insta11 from '../assets/insta11.jpg';
import insta12 from '../assets/insta12.jpg';
import insta13 from '../assets/insta13.jpg';

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';
import Footer from './Footer';

class GalleryView extends React.Component {
    render() {
        return(
            <div className="App">
                <div className="fill-window"/>
                
                <Logo text="Davide Fontanella"/>

                <NavBar items={["Code", "Gallery", "About"]} selection="Gallery"/>
        
                <div className="app-body">
                    <div className="imagegrid">
                        <div className="image-container">
                            <img src={insta1} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta2} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta3} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta4} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta5} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta6} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta7} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta8} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta9} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta10} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta11} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta12} alt=""/>
                        </div>
                        <div className="image-container">
                            <img src={insta13} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="content-fadeout"/>

                <Footer 
                    items={["GitHub", "Instagram", "YouTube"]} 
                    links={["https://github.com/davfon", "http://www.instagram.com/fon.edit", "https://www.youtube.com/channel/UCYDd2K2ppnv8K_UlMrU3yqQ"]}
                />

                <Vignette/>
            </div>
        )
    }
}

export default GalleryView;