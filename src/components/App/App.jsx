import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

function App() {

    //Declaring gallery list array
    let [galleryList, setGalleryList] = useState([]);

    //Declaring toggle variable
    const [active, setActive] = useState(false);

    //Creating toggle click function
    const handleChangeActive = () => {
      setActive((previousImage) => {
        return !previousImage
      });
    }

    //On page load, get gallery list
    useEffect(()=>{
      getGallery();
    }, [])

    //GET request to get gallery images array from the database
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

    //PUT request to update the number of likes on an image
    const updateLikes = (id) => {
        console.log('in PUT gallery/like/:id client');

        axios.put(`/gallery/like/${id}`)

            .then(response => {
                console.log(response.data);
                //Calling getGallery function to render updated gallery array
                getGallery();
            })

            .catch(err => {

                console.log('error in PUT rerquest', err);
            })
  }



    return (
      <div className="App">
        <Header />
        <GalleryList galleryList = {galleryList} updateLikes = {updateLikes} handleChangeActive = {handleChangeActive} active = {active} />
      </div>
    );
}

export default App;
