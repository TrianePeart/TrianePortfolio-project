const form = document.querySelector("form")
let button = document.querySelector("submit")
let fortune = document.querySelectorAll("fortune")

//NOTE IT Its half working must fix code. 

let answers = [
    "Yes",
    "No",
    "The Future Is Uncertain",
    "Follow Your Heart",
    "Yes, but be cautious",
    "No, but something else will come",
    "Maybe"
]
// button.addEventListener('click', () =>{
//     trueRandom()
// })

function fortuneSelector(){
    let randomFortune = Math.floor(Math.random() * answers.length);
    return answers[randomFortune];
  }
  
  function showFortune(){
    fortune.innerHTML = fortuneSelector();
    button.innerHTML = "Come back tomorrow!";
    button.style.cursor = "default";
  
    button.addEventListener('click', showFortune);
    //add your code here
    button.removeEventListener('click',showFortune);
  }
  

// function trueRandom(){
//     let random = Math.floor(Math.random() * answers.length)
//     //This might not work. If fails issue is here. 
//     document.getElementById("fortune").innerHTML = answers[random];
// }
//This function is to make sure the answers are random. If works make one function. 

// function answer() {
//     fortune.innerHTML = trueRandom()
//     //Should show a response if it works 
    
//     button.innerHTML = "Please Come Back Another Time."
//     //If it works this will be the response. 
    
//     button.removeEventListener("click", answer)
//     //should only allow for one question to make it daily. 

    
//     // if(document.getElementById("input").value.length === 0){
//     //     alert("Please enter question")
//     // }

//     //This might not work. If dont ask instruction team. 
// }