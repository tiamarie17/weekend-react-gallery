import {useState} from 'react';

//Create input form for gallery
function GalleryForm({addImage}) {

//State variables and functions
const [newDescription, setNewDescription]  = useState('');
const [newPath, setNewPath] = useState('');

//Prevent reload on form submit and wrap inputs into a new object
const handleSubmit = (evt) => {
    evt.preventDefault();

    //creating new object
    let newImage = {
        description: newDescription,
        path: newPath   
    };

    //add new object to the gallery
    addImage(newImage);
}
    //render inputs to the DOM
    return (
        <>
            <form onSubmit = {handleSubmit}>
                <div>
                    {/* Input item description */}
                    <input 
                        type = "text"
                        placeholder='Description'
                        onChange={(evt)=> setNewDescription(evt.target.value)}
                        value = {newDescription}
                        />
                </div>
                <div>
                    {/* Input item URL */}
                    <input 
                        type = "text"
                        placeholder='Type URL here'
                        onChange={(evt)=> setNewPath(evt.target.value)}
                        value = {newPath}
                        />
            
                {/* Submit button on form  */}
                <button type = "submit">Add</button>
                </div>

            </form>
        </>
    );
}

export default GalleryForm;