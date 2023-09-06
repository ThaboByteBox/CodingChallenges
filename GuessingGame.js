
let secretNumber = Math.floor(Math.random() * 100) + 1
//secretNumber = 15
let arrGueses = []
let attempts = 0




/**
 * uses IF loops to determine if what the user guesses is the correct random number generated
 * @returns {string} alert depending on user's guess, either too high, low or correct 
 */
function makeGuess() {
    attempts++
    let userGuess = document.querySelector("input").value
    
   
    if (userGuess < secretNumber) {
        document.body.style.backgroundColor = "red"
        return alert("Too low!, Try Again")
    } else if (userGuess == secretNumber) {
        document.body.style.backgroundColor = "green"
        document.getElementById("checkGuess").style.visibility = "hidden"
        return alert("Congratulations! You guessed the correct number in: " + attempts + " attempts")
    } else if (userGuess > secretNumber){
        document.body.style.backgroundColor = "red"
        return alert("Too high!, Try Again")
    }
   arrGueses.push(userGuess)

    const guessPara = document.createElement("p")
    const guessNode = document.createTextNode(arrGueses)
    guessPara.appendChild(guessNode)

    const guessListEL = document.getElementById("guessList")
    guessListEL.appendChild(guessPara)
}

function resetGame () {
    secretNumber =  Math.floor(Math.random() * 100) + 1
    attempts = 0
    arrGueses = []
    document.querySelector("input").value = ""
    document.body.style.backgroundColor = "white"
    document.getElementById("checkGuess").style.visibility = "visible"
}