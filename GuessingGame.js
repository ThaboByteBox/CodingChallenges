
//let secretNumber = Math.floor(Math.random() * 100) + 1
secretNumber = 15
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
        arrGueses.push(userGuess)
        document.getElementById("guessList").textContent = arrGueses
        return alert("Too low!, Try Again")
    } else if (userGuess == secretNumber) {
        arrGueses.push(userGuess)
        document.getElementById("guessList").textContent = arrGueses
        document.body.style.backgroundColor = "green"
        document.getElementById("checkGuess").style.visibility = "hidden"
        return alert("Congratulations! You guessed the correct number in: " + attempts + " attempts")
    } else if (userGuess > secretNumber){
        arrGueses.push(userGuess)
        document.getElementById("guessList").textContent = arrGueses
        document.body.style.backgroundColor = "red"
        return alert("Too high!, Try Again")
    }
  

}

/**
 * @returns {number} secretNumber returns a randomly generated number
 * sets all other vairables to their default values 
 */
function resetGame () {
    secretNumber =  Math.floor(Math.random() * 100) + 1
    attempts = 0
    arrGueses = []
    document.querySelector("input").value = ""
    document.body.style.backgroundColor = "white"
    document.getElementById("checkGuess").style.visibility = "visible"
    document.getElementById("guessList").textContent = ""
}