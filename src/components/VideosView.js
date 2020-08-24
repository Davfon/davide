import React from 'react';
import '../style/App.scss';
import ReactPlayer from 'react-player/youtube';

import SVG from 'react-inlinesvg';
import Arrow from '../assets/arrow-right.svg';

import Vignette from './Vignette';
import Logo from './Logo';
import NavBar from './NavBar';
import Footer from './Footer';

class VideosView extends React.Component {

    constructor() {
        super()
        this.state = {
            displayArrow: 'idle',
            isBottom: false,
            playing: false,
            volume: 1,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        if ((window.pageYOffset) >= maxHeight) {
            console.log("end")
            this.setState({displayArrow: 'appear', isBottom: true});
        } else if ((window.pageYOffset) < maxHeight && this.state.isBottom) {
            this.setState({displayArrow: 'disappear', isBottom: false});
        } else {
            this.setState({displayArrow: 'idle', isBottom: false});
        }
    };

    render() {
        let arrowClassName = 'arrow-right';
        let arrowTextClassName = 'arrow-text';
        if (this.state.displayArrow === 'appear') {
            arrowClassName += ' appear';
            arrowTextClassName += ' appear';
        } else if (this.state.displayArrow === 'disappear') {
            arrowClassName += ' disappear';
            arrowTextClassName += ' disappear';
        } else {
            arrowClassName += ' idle';
            arrowTextClassName += ' idle';
        }
        return (
            <div className="App">
                <div className="background"/>
                <Vignette/>

                <Logo text="Davide Fontanella"/>

                <NavBar items={["Code", "Gallery", "Videos", "About"]} selection="Videos"/>
        
                <div className="app-body">
                    <div className="content-container">
                        <div className="video-player">
                            <div className="react-player-wrapper">
                                <ReactPlayer
                                    className="react-player"
                                    url="https://www.youtube-nocookie.com/embed/6wCwIoptf50?rel=0"
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="arrow-container-right point-to-third">
                    <SVG className={arrowClassName}  src={Arrow} />
                </div>
                <div className={arrowTextClassName + " third-text"}>
                    More<br/>videos
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

export default VideosView;