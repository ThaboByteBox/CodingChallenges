
let secretNumber = Math.floor(Math.random() * 100) + 1
let arrGueses = []
let attempts = 0

function makeGuess() {
    attempts++
    let userGuess = document.querySelector("input").value
    //console.log(userGuess)
    if (userGuess < secretNumber) {
        document.body.style.backgroundColor = "red"
        return alert("Too low!, Try Again")
    } else if (userGuess == secretNumber) {
        document.body.style.backgroundColor = "green"
        return alert("Congratulations! You guessed the correct number in: " + attempts + " attempts")
    } else if (userGuess > secretNumber){
        document.body.style.backgroundColor = "red"
        return alert("Too high!, Try Again")
    }
   arrGueses.push(userGuess)

}

function resetGame () {
    secretNumber =  Math.floor(Math.random() * 100) + 1
    attempts = 0
    arrGueses = []
    document.querySelector("input").value = ""
    document.body.style.backgroundColor = "white"
}