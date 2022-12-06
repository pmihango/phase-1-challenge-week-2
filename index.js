document.addEventListener("DOMContentLoaded", () => {
    getCharacters(characters)  
})

const url = "http://localhost:3000/characters"
let characterslikes = document.getElementById('characterslikes');
const characters = [
    {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ]
   
   function getCharacters(){ 
    fetch(url)
    .then (res => res.json())
    .then(data => {
        console.log(data)
        data.forEach (character => {
            displayCharacters(character)
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
  function getSingleCharacters(characters){
    document.getElementById("charactersname").innerHTML = characters.name
    document.getElementById("charactersimage").src = characters.image
    document.getElementById("characterslikes").innerHTML = `likes ${characters.votes}`
  }
 
   
  let count = 0; 
  document.getElementById("characterslikes").onclick = function(){
  count+=1;
  document.getElementById("countLabel").innerHTML = count;
  }
   
  //this is for the reset button that resets the votes back to zero when pressed
  document.getElementById("reset").onclick = function(){ 
  count =0;
  document.getElementById("countLabel").innerHTML = count;
  }