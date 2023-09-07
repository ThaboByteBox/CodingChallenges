let iLineCounter = 0
let arrTextLine = []
let isValid = true

/**
 * @returns fully randomised line of text with randomised colour and adds it to the HTML display element and
 * keeps track if the max number of entries have been added, max number being 9, disables the button if max number is
 * reach
 */
function addLineHandler () {
    iLineCounter ++

/**
 * @returns complete radomised line of text with a radomised colour assinged to it 
 */
    function generateRandomLine(){

    }

/**
 * @returns randomly generated colour using hex codes
 */
        function generateRandomColour () {
            const colourHexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
            let colourRep = "#"
            for (let iColour = 0;iColour < 6;iColour++) {
                const randomColour = Math.floor(Math.random()* colourHexCharacters.length)
                colourRep += colourHexCharacters[iColour] + randomColour 
            }
            return colourRep
        }
    }
/**
 * @returns randomly generated text 
 */
        function generateRandomText () {
            let randomText = (Math.random()).toString(36).replace(".","")
            return randomText 
        
    }
let textLine = generateRandomLine()
if (iLineCounter > 9) {
 
} else if (iLineCounter < 9) {

}



/**
 *  Removes the lastChild added to the HTML display element
 */
function removeLineHandler() {
    if(isValid = true) {
        function removeChild () {

        }

    }else if (isValid = false) {
        function removeChild() {
            
        }
    }
}
