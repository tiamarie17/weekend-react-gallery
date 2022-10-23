
function GalleryItem({image, loveItBtn, id, handleToggle}){
   
    return (

    
        <div>
            <img src = {image.path} />
            <button onClick={() => loveItBtn(id)}>Love it!</button>
            <h3>{image.likes} people love it!</h3>
        
        
        </div>

        
    
    
    );
}

export default GalleryItem;