import React from 'react';
import './App.css';
import axios from 'react';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
