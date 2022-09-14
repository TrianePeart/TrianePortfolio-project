// const form = document.querySelector("form")
let button = document.querySelector("button")
// let fortune = document.querySelector("fortune")


function fortuneTeller() {
  const answer = Math.floor((Math.random() * 7));
  //This is going down the length of my if statement it works how I wanted my other code to work but its less pretty. YES. Being pretty is important. 
  let fortune = ""
  //I needed a random variable to make my function, function. To be frank I didn't have to make it anything but I didn't like how it looked when it was just let fortune. 
 
  if (answer < 2) {
    fortune = "Yes"
  } else if (answer === 2) {
    fortune = "No."
  } else if (answer === 3) {
    fortune = "The Future Is Uncertain"
  } else if (answer === 4) {
    fortune = "Follow Your Heart"
  } else if (answer === 5) {
    fortune = "Yes, but be cautious"
  } else if (answer === 6) {
    fortune = "No, but something else will come"
  }else {
    fortune = "Maybe"
  }
  //This function works like an eightball. I hate that. But It works. 

  //update result by making that element this response
  document.getElementById('fortune').innerHTML = fortune;
}

button.addEventListener('click', () =>{
 fortuneTeller()
})

//IT Works BUT the submit doesn't stick

//CODE FRAME I WANTED

// let answers = [
//   "Yes",
//   "No",
//   "The Future Is Uncertain",
//   "Follow Your Heart",
//   "Yes, but be cautious",
//   "No, but something else will come",
//   "Maybe"
// ]

// I like the idea of having a dictionary instead of all those if statements. 

// function fortuneSelector(){
//   let answer = answers[Math.floor(Math.random() * answers.length)];
//   return answer
// }

//I wanted this to basically be like okay let me jumble up that dictionary and then from there I will lock 

// function showFortune(){
//   fortune.innerHTML = fortuneSelector();
//   button.innerHTML = "Come back tomorrow!";

//   button.addEventListener('click', showFortune);
    //  button.removeEventListener('click, showFortune)
// }

//This... idk what this is doing but it doesn't work. 