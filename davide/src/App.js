import React from 'react';
import Portrait from './assets/davide.jpg';
import Vignette from './components/Vignette';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import './style/App.scss';
import './style/Image.scss';
import './style/Logo.scss';
import './style/NavBar.scss';

function App() {

  return (
    <div className="App">
      <Vignette/>
      <Logo text="Davide Fontanella"/>
      <NavBar items={["Code", "Gallery", "About"]}/>

      <div className="app-body">
        <img src={Portrait} alt=""/>
        <p>I like coding, taking photos and videos.</p>
      </div>

    </div>
  );
}

export default App;
