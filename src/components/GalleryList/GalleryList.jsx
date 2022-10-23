import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({active, galleryList, updateLikes, handleChangeActive}){
    console.log('galleryList is', galleryList);
    return (
        <>
        <h2>Gallery Images</h2>

       
        <div>
            
            {galleryList.map(image => (
            <div key={image.id} className = "photo">
            {/* Passing in image object and updateLikes function  */}
            <GalleryItem image = {image} id = {image.id} loveItBtn={updateLikes}  />
            </div>

            ))}
        </div>
      

          
      
       
        </>
    );
}

export default GalleryList;