import React from 'react';

import HomeView from './components/HomeView';
import CodeView from './components/CodeView';
import GalleryView from './components/GalleryView';
import VideosView from './components/VideosView';
import Aboutview from './components/AboutView';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/App.scss';
import './style/Logo.scss';
import './style/NavBar.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path="/code" component={CodeView}/>
        <Route path="/gallery" component={GalleryView}/>
        <Route path="/videos" component={VideosView}/>
        <Route path="/about" component={Aboutview}/>
      </Switch>
    </Router>
  );
}

export default App;
