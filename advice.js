const URL = "https://api.adviceslip.com/advice"
 
const advice = document.querySelector("#advice")

const button = document.querySelector("#button")

button.addEventListener('click', () => {
    randomAdvice()
   
})

function randomAdvice(){
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        const adviceData = data.slip
        //This is calling the random advice from the api slip
       advice.innerHTML = `<p>${adviceData.advice}</p>`

       button.style.display="none";
       //Taking away the button when done.
    })
    .catch((err) => {
        console.log(err)
    })
 
}

