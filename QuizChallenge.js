let arrQuestionText = ["What is the Capital City of Romania","What is the Capital City of Finland"]
let arrOptions = ["Bucharest","Helsinki","Paris"]
let arrCorrectOption = [0,1,2]
let displayEl = document.getElementById("questionText")


displayEl.textContent = arrQuestionText[0] + "?"

document.getElementById("firstAnswer").innerText = arrOptions[0]
document.getElementById("secondAnswer").innerText = arrOptions[1]
document.getElementById("thirdAnswer").innerText = arrOptions[2]

function makeGuess() {
    document.getElementById("firstAnswer").value = arrOptions[0] 
    document.getElementById("secondAnswer").value = arrOptions[1]
    document.getElementById("thirdAnswer").value = arrOptions[2]

    if (document.getElementById("firstAnswer").value == document.getElementById("firstAnswer").innerText) {
       document.getElementById("questionHealth").textContent = "Correct" 
    } else {
        document.getElementById("questionHealth").textContent = "Incorrect!, the correc answer is: " + arrOptions[0]  
    }
}






