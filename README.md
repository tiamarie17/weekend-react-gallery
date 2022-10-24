# Project Name
Full Stack React Gallery App

## Technologies
JavaScript, React, SQL, Node, HTML, CSS


## Description

For this project, I created an app that allows a user to add images to a gallery, display those images on the DOM, like images using a button, and remove imagess from the gallery. When the user clicks on an image in the gallery, the description of the image appears in place of the image, and the user can toggle back and forth between the image and the description. Data about each image (including its description, URL, and number of likes) are stored in a database and updated when the user likes an image, deletes an image, or adds a new image with a description. 

To create this app, I first created a database with some test images and set up the server and pool.js files. Then, I started working on setting up the App.jsx file. I declared my state variables and created a function with an axios GET request in order to render all of the images in the gallery. I also called this function with useEffect so that the images in the database load on page load. I added a GET router to the router file. Next, I began creating components for this app. The first component I created was the Header component, which stores the HTML for the header and is called in the return portion of the App.jsx file.

After that, I created a component named GalleryList. This component uses a .map method to render each image in the array. I put each image in the array in a separate component called Galleryitem.js and imported that into the GalleryList component. I used props to pass functions from the app and the GalleryList through to the GalleryItem.

To handle the toggle feature, I first declared two new state variables in the App.jsx file: active and updateActive. The active variable was initialized as an empty array, which allows each image in the array to have its own active status. The updateActive variable is a boolean that allows me to track changes in the array. I then made a function in the App.jsx file called HandleChangeActive. This function sets the active variable to toggle and uses the updateActive boolean value to track changes in the array and cause those changes to be rendered to the DOM. Last, I used props to pass that function and the image id through to the GalleryItem component, so that only the image that was clicked would change. In that component, I used conditional rendering with a ternary operator. If the status of active is true, the description appears. Otherwise, the image with a like and remove button appears. 

To handle the Like button, I used an axios PUT request in the App.jsx file, updated the count in the database by using SQL and by passing in the id of the image that was clicked, and added a PUT router on the server side. I also created a ternary operator upon render that changes the wording if just 1 person likes the image versus if multiple people like it. 

To handle the remove button, I created an axios delete request in the App.jsx file and added a delete router on the server side. The delete function, like the updateLikes function, passes in the id of the image that was clicked in order to remove the image that was clicked. 

To handle the inputs, I created a POST axios request function in the App.jsx file and connected it to a POST router on the server side. Then, I created a GalleryForm component and passed in the addImage function (the POST request) using props. The GalleryForm component renders the form to the dom, makes inputs required, and clears the fields when the user clicks the 'add' button. The inputs are sent as an object to the database, and finally the new image is added to the DOM when the user clicks add. The GalleryForm is imported that into the App.jsx file and is called in the return along with the GalleryList component. 

To style this app, I used flex containers and flexbox in CSS to align and display the images and the inupts on the page. I also gave the buttons hover and active selectors, and added icons next to the like nad remove buttons. 



