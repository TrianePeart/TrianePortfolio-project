const URL = "https://api.adviceslip.com/advice"

fetch(URL)
.then(res => res.json())
.then((res) => console.log(res))
.catch((err) => console.log(err))