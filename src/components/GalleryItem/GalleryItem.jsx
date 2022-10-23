
function GalleryItem(image){
    console.log('image is',image);
    console.log('image.path is', image.image['path']);
    
    return (

    
        <div><img src = {image.image.path} /></div>
    
    
    );
}

export default GalleryItem;