import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, updateLikes, active, handleChangeActive, deleteImage}){
    console.log('galleryList is', galleryList);
    return (
        <>
       
        <div className = "flex-container">
            
            {galleryList.map(image => (
            <div key={image.id} className = "pointer">
            {/* Passing in image object, handleChangeActive function, active array and updateLikes function  */}

            <GalleryItem image = {image} loveItBtn={updateLikes} handleChangeActive={handleChangeActive} active ={active} deleteBtn = {deleteImage}  />

            </div>

            ))}
        </div>
      

          
      
       
        </>
    );
}

export default GalleryList;