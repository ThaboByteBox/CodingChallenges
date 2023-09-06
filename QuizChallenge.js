let arrQuestionText = ["What is the Capital City of Romania","What is the Capital City of Finland"]
let arrOptions = ["Bucharest","Helsinki","Paris"]
let arrCorrectOption = [0,1,2]
let displayEl = document.getElementById("questionText")

document.getElementById("firstAnswer").style.visibility = "hidden"
document.getElementById("secondAnswer").style.visibility = "hidden"
document.getElementById("thirdAnswer").style.visibility = "hidden"

function beginQuiz() {
    
    for (i = 0; i < arrQuestionText.length; i++ ) {
        document.getElementById("firstAnswer").style.visibility = "visible"
        document.getElementById("secondAnswer").style.visibility = "visible"
        document.getElementById("thirdAnswer").style.visibility = "visible"
    
        document.getElementById("firstAnswer").innerText = arrOptions[0]
        document.getElementById("secondAnswer").innerText = arrOptions[1]
        document.getElementById("thirdAnswer").innerText = arrOptions[2]
    
        document.getElementById("startQuiz").style.visibility = "hidden"
    return  displayEl.textContent = arrQuestionText[i] + "?"  
}   
    }
   
    





function firstAnswerGuess() {
    let answer = document.getElementById("firstAnswer").innerText
    let guessHealthEl = document.getElementById("questionHealth").textContent
    if (answer == arrOptions[0]) {
    guessHealthEl = "Correct"
    } else {
    guessHealthEl = "Incorrect! The correct Answer is:  " + answer
    }
    console.log(answer)
}

function secondAnswerGuess() {
    i = 0
    let answer = document.getElementById("secondAnswer").innerText
    let guessHealthEl = document.getElementById("questionHealth").textContent
    if (answer == arrOptions[i]) {
      guessHealthEl = "Correct"
    } else {
     guessHealthEl = "Incorrect! The correct Answer is:  " + answer
    }
}

function thirdAnswerGuess() {
    let answer = document.getElementById("thirdAnswer").innerText
    console.log(answer)
    let guessHealthEl = document.getElementById("questionHealth").textContent
    if (answer == arrOptions[2]) {
    guessHealthEl = "Correct"
    } else {
    guessHealthEl = "Incorrect! The correct Answer is:  " + answer
    }
    //console.log(answer)
}






