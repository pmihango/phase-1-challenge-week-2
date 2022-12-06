document.addEventListener("DOMContentLoaded", () => {
   getCharacters()
})

const url = "http://localhost:3000/characters"


   
   function getCharacters(){ 
    fetch(url)
    .then (res => res.json())
    .then(data => {
        console.log(data)
        data.forEach (characters => {
            displayCharacters(characters)
        })
    })
   }

  function displayCharacters(characters) {
    console.log(characters.name);
    const name = document.createElement('p');
    name.innerHTML = characters.name
    const main = document.getElementById("main") 
    main.append(name)
    name.addEventListener("click", () => {
          getSingleCharacters(characters)
    })
  }
//get a single element and display   
  function getSingleCharacters(characters){
    document.getElementById("charactersname").innerHTML = characters.name
    document.getElementById("charactersimage").src = characters.image
    document.getElementById("characterslikes").innerHTML = `likes ${characters.votes}`
//add a button to increment the votes by one per click
    let btn = document.getElementById("characterslikes")
    btn.textContent = `Votes: ${characters.votes}`
    btn.addEventListener('click', () => {
      characters.votes+=1
      btn.textContent = `Votes: ${characters.votes}`
    })
  }
 
   
  // let count = 0; 
  // document.getElementById("characterslikes").onclick = function(){
  // count+=1;
  // document.getElementById("countLabel").innerHTML = count;
  // }
   
  // //this is for the reset button that resets the votes back to zero when pressed
  // document.getElementById("reset").onclick = function(){ 
  // count =0;
  // document.getElementById("countLabel").innerHTML = count;
  // }