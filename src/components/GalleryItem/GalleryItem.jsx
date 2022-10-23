
function GalleryItem({image, loveItBtn, active, handleChangeActive}){
    
    let description = image.description;
    let id = image.id;

    //Using a ternary operator to render either description or images on toggle

    return (
        <>

    {active[id] ? (
    
       
        <h3 onClick = {() => handleChangeActive(id)}>{description}</h3>
   
    ) : (
   
            <div className = "images">
            <img onClick = {() => handleChangeActive(id)} src = {image.path} />
            <button onClick={() => loveItBtn(id)}>Love it!</button>
            <h3>{image.likes} people love it!</h3> 
            </div>
        )}
        </>
    );

    }
 

export default GalleryItem;