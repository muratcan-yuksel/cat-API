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
   img.src= response.data.images.original.url;
  });

  //assignment: Add a button
  const button= document.createElement("button");
  button.setAttribute("class", "button");
  button.textContent="Change GIF"
  
  //get the container div
  const container= document.getElementById("container");
  container.appendChild(button);

//add an event listener and call the changeGIF function
  button.addEventListener("click", changeGIF)

function changeGIF(){

fetch('https://api.giphy.com/v1/gifs/translate?api_key=ShwQz1yuFlZwCalQ6bPu2O53jS1GC80E&s=cats' , {
    mode: 'cors'
})
.then (response=>response.json())
.then(response2=>img.src=response2.data.images.original.url)
}

const searchBox= document.getElementById("search");

// console.log(document.getElementById("search").value);
//get the search butotn
const searcBtn= document.getElementById("searchBtn");
  
//add an event listener
searcBtn.addEventListener("click", searchGIF)
//get the error para
const errorPara= document.getElementById("error");
//write the searchGIF function
function searchGIF(){
    //get the search value
const searchVal= document.getElementById("search").value;
console.log(searchVal)

fetch('https://api.giphy.com/v1/gifs/translate?api_key=ShwQz1yuFlZwCalQ6bPu2O53jS1GC80E&s=' + searchVal, {
    mode: 'cors'
})
.then (response=>response.json())
.then(response2=>img.src=response2.data.images.original.url,
    //erase the error message if it fetches sth
    errorPara.textContent="")
    //give error message if the fetch fails
.catch(error=>errorPara.textContent="Couldn't find that")
}