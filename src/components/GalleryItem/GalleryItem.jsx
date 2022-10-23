
function GalleryItem({image, loveItBtn, active, handleChangeActive}){
    
    let description = image.description;
    let id = image.id;
    let likes = image.likes;

    //Using a ternary operator to render either description or images on toggle

    return (
        <>

    {active[id] ? (
    
       
        <h3 onClick = {() => handleChangeActive(id)}>{description}</h3>
   
    ) : (
   
            <div className = "flex-box">
            <img onClick = {() => handleChangeActive(id)} src = {image.path} />
            <button className="pointer" onClick={() => loveItBtn(id)} >Love it!</button>
            {likes === 1 ? (
                 <>
                 <div className ="likeCountText">
                 <h3>{likes} person loves it!</h3> 
                 </div>
                 </>

            ) : (
                <>
                <div className = "likeCountText">
                <h3>{likes} people love it!</h3> 
                </div>
                </> 
            )}
            
            </div>
        )}
        </>

    );

}

export default GalleryItem;