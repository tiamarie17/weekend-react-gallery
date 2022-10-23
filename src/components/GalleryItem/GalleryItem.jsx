
function GalleryItem(image){
    console.log('image is',image);
    console.log('image.path is', image.image['path']);
    
    return (

    
        <div>
            <img src = {image.image.path} />
            <button>Love it!</button>
            <h3>{image.image.likes} people love it!</h3>
        
        
        </div>
    
    
    );
}

export default GalleryItem;