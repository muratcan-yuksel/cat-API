//get img element
const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=ShwQz1yuFlZwCalQ6bPu2O53jS1GC80E&s=dogs', {
    mode: 'cors'
})
//get the first object as a promise
  .then(function(response) {
    return response.json();
  })
  //now dig deeper and get the image
  .then(function(response) {
   // console.log(response);
   console.log(response.data.images.original.url);
   img.src= response.data.images.original.url;
  });

  //assignment: Add a button
  const button= document.createElement("button");
  button.setAttribute("class", "button");
  button.textContent="Change GIF"
  
  //get the container div
  const container= document.getElementById("container");
  container.appendChild(button);

  button.addEventListener("click", changeGIF)

function changeGIF(){
fetch('https://api.giphy.com/v1/gifs/translate?api_key=ShwQz1yuFlZwCalQ6bPu2O53jS1GC80E&s=cats', {
    mode: 'cors'
})
.then (response=>response.json())
.then(response2=>img.src=response2.data.images.original.url)

}