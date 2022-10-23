import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}){
    console.log('galleryList is', galleryList);
    return (
        <>
        <h2>Gallery Images</h2>
        
        <div>
            
            {galleryList.map(image => (
            <div key={image.id} className = "photo">
            <GalleryItem image = {image} />
            </div>

            ))}
        </div>
      
       
        </>
    );
}

export default GalleryList;