
function GalleryItem({image, loveItBtn, active, handleChangeActive, deleteBtn}){
    
    let description = image.description;
    let id = image.id;
    let likes = image.likes;

    //Using a ternary operator to render either an image description or the images with like and delete buttons (on toggle)

    return (
        <>

    {active[id] ? (
    
       <>
       <div className= "flex-box">
       <div className = "description" onClick = {() => handleChangeActive(id)}>
        <h3>{description}</h3></div>
        </div>
        </>
   
    ) : (
   
            <div className = "flex-box">
            <img onClick = {() => handleChangeActive(id)} src = {image.path} />
            <div className = "imageButtons">
            <button className="likeBtn" onClick={() => loveItBtn(id)} >Like <img className = "heart" src="/images/heart.png"/></button>
            <button className = "deleteBtn" onClick={()=> deleteBtn(id)} type="click">Remove <img className="deleteIcon" src="images/delete.png"/></button>
            </div>
            
            {likes === 1 ? (
                 <>
                 <div className ="likeCountText">
                 <h3>{likes} person likes it!</h3> 
                 </div>
                 </>

            ) : (
                <>
                <div className = "likeCountText">
                <h3>{likes} people like it!</h3> 
                </div>
                </> 
            )}
            
            </div>
        )}
        </>

    );

}

export default GalleryItem;