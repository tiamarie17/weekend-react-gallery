import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, updateLikes, active, handleChangeActive}){
    console.log('galleryList is', galleryList);
    return (
        <>
        <h2>Gallery Images</h2>

       
        <div className = "flex-container">
            
            {galleryList.map(image => (
            <div key={image.id} className = "images">
            {/* Passing in image object, handleChangeActive function, active array and updateLikes function  */}

            <GalleryItem image = {image} loveItBtn={updateLikes} handleChangeActive={handleChangeActive} active ={active}  />

            </div>

            ))}
        </div>
      

          
      
       
        </>
    );
}

export default GalleryList;