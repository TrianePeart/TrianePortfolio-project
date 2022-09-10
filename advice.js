//CODE NOT WORKING REDO
const URL = "https://api.adviceslip.com/advice"
//This is my URL I like it to be away from everything just because. 

const advice = document.querySelector("#advice")
//I'm making a query to find the advice result. I don't like naming things result. 
const button = document.querySelector("#button")

const body = document.querySelector("Body")
//This will be my button to call upon it. 

button.addEventListener('click', () => {
    randomAdvice()
})
//This should work as a regular button.

//NOTE: Might need an onload but depends Ask Instructor 

function randomAdvice(){
    //create a function that displays advice when clicked 
    //NOTE: I want to try to do this without the event being inside it because I couldn't make it work during the weather app. 
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        //Making a function to call the slipped. It worked for the weather app so why not?
        const adviceData = data.slip
        //This is calling the random advice from the api slip
       advice.innerHTML = `<p>${adviceData.advice}</p>`
        //I can't remember who I saw do this... I think it was Edgy. It's basically creating an HTML placement for the advice. The way I did this before was way too complicated. 

    })
    .catch((err) => {
        console.log(err)
    })

    button.removeEventListener("click", randomAdvice)
    //IF This works I it will remove  the button then I can name it daily advice. 
}

