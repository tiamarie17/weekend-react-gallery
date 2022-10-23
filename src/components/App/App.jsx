import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {

    //Declaring gallery list array
    let [galleryList, setGalleryList] = useState([]);

    //On page load, get gallery list
    useEffect(()=>{
      getGallery();
    }, [])

    const getGallery = () => {
        console.log('in GET /gallery client');
        axios.get('/gallery')

        .then(response => {
          setGalleryList(response.data)
          
          console.log(response.data);
      })
      .catch(err => {
          console.log('error in GetGallery client', err);
      })

        
    }



    return (
      <div className="App">
        <Header />
        <GalleryList galleryList = {galleryList} />
      </div>
    );
}

export default App;
