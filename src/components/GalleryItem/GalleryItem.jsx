
function GalleryItem({image, loveItBtn, active, handleChangeActive}){
   let id = image.id
   let activeStr = ""
   
   if(active[id]){
    activeStr = "True"
   }
    else{
        activeStr = "False"
    }
   console.log(activeStr)

    if(active[id]){
        return (
        
        
            <div>
                 <p>Active is {activeStr}</p>
                <h3 onClick={() => handleChangeActive(id)}> {image.description}</h3>
            </div>
    
        );

    } else {
        return (
        
        
            <div>
                <p>Active is {active}</p>

                <img src = {image.path}  onClick = {() => handleChangeActive(id)}/>
                <button onClick={() => loveItBtn(id)}>Love it!</button>
                
                <h3>{image.likes} people love it!</h3>
            
            </div>
        
        
        );
        
    }

}

export default GalleryItem;