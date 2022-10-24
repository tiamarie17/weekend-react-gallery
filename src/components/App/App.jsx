import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

    //Declaring gallery list array
    let [galleryList, setGalleryList] = useState([]);

     //Declaring variable to track changes in the array using a boolean value
    const [activeUpdated, setActiveUpdated]= useState(true)

    //Declaring toggle variable as an empty array
    const [active, setActive] = useState([]);
    console.log(active)


    //On page load, get gallery list
    useEffect(()=>{
      getGallery();
    }, [])


    //Creating toggle click function
    //Updating the boolean value of active variable at the id clicked
    //using setActive to update the active array with new boolean values
    //Source: https://marysallent.medium.com/how-to-toggle-images-icons-using-react-hooks-for-beginners-by-a-beginner-e4b8459f1ce4
    const handleChangeActive = (id) => {
      active[id] = !active[id] 
      setActive(active)
      //Using another useState to track changes in the array so it will render it again
      setActiveUpdated(!activeUpdated)
    }

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

    //POST request to send input from form to database

    const addImage = (newImage) => {

      axios({

          method: 'POST',
          url: '/gallery',
          data: newImage

      })
          .then((response) => {
              console.log('POST response from server', response.data);

              getGallery();
          })
          .catch((err) => {
              console.log('POST error from server', err);

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


  //DELETE request to delete an image when clicked on using its id

      const deleteImage = (id) => {
        axios({
        
            method: 'DELETE',
            url: `/gallery/${id}`
            
        })
            .then((response) => {
                console.log('Image deleted', response);

                getGallery()
            })
            .catch((err) => {
                console.log('Error in delete', err);

            })
    }



    return (
      <div className="App">
        <Header />
        <GalleryForm addImage = {addImage}/>
        <GalleryList galleryList = {galleryList} updateLikes = {updateLikes} active={active} handleChangeActive={handleChangeActive}/>
      </div>
    );
}

export default App;
