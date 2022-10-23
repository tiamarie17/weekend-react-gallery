
function GalleryItem({image, loveItBtn, active, handleChangeActive}){
    
    let description = image.description;
    let id = image.id;
    let likes = image.likes;

    //Using a ternary operator to render either description or images on toggle

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
            <button className="likeBtn" onClick={() => loveItBtn(id)} >Like <img className = "heart" src="/images/heart.png"/></button>
            
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