
function GalleryItem({image, loveItBtn, id, handleToggle, active, handleChangeActive}){
   
    if(active){
        return (
        
        
            <div>
                 <p>Active is {active}</p>

                <img src = {image.path} onClick = {() =>  handleChangeActive()} />
                <button onClick={() => loveItBtn(id)}>Love it!</button>
                <h3>{image.likes} people love it!</h3>
                <p>"DESCRIPTION"</p>
            
            </div>
    
        );

    } else {
        return (
        
        
            <div>
                <p>Active is {active}</p>

                <img src = {image.path}  onClick = {() => handleChangeActive()}/>
                <button onClick={() => loveItBtn(id)}>Love it!</button>
                
                <h3>{image.likes} people love it!</h3>
            
            </div>
        
        
        );
        
    }

}

export default GalleryItem;