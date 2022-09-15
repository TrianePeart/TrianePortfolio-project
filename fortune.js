
let otherButton = document.querySelector("#daily")

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
  //This function works like an eightball. 

  //update result by making that element this response
  document.getElementById('fortune').innerHTML = fortune;
}

otherButton.addEventListener('submit', (e) =>{
  e.preventDefault()
  if(input.value === ""){
  alert("Please Fill In Question")
  }
  fortuneTeller()
  otherButton.reset()
})
