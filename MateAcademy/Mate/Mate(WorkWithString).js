
function countMs(text) {
    // write code here
    let nuberLetterm = 0;  

    const smallLetter = text.toLowerCase();

    for (const letter of smallLetter) {

        if (letter === 'm') {
            nuberLetterm = nuberLetterm + 1;
        }
        
    }

  return nuberLetterm
}

// console.log(countMs(Mtext));

function removeVowels(doc) {
    // write code here
    let stringWithoutVowelLetter = '';
            
    const lettersVowels = 'aeiouyAEIOUY';
    

    for (const letter of doc) {

        if (lettersVowels.includes(letter) === false) {

            stringWithoutVowelLetter = stringWithoutVowelLetter + letter;
        }
    }

    return stringWithoutVowelLetter
}

// console.log(removeVowels('eASSFgcloo'));

function makeAbbr(words) {
    // write code here
    let wordsAbbr = words[0].toUpperCase();

    for (let i = 0; i < words.length; i++) {
   
        if (words[i] === ' ') {
            wordsAbbr = wordsAbbr + words[i+1].toUpperCase()
        }
    }
  
    return wordsAbbr
   
}
  
// console.log(makeAbbr('National Geographic chanel'));

function decryptMessage(message) {
    // write code here
    let decrMes = '';

    for (const letter of message) {
        decrMes = letter + decrMes 
    }

return decrMes

}

// console.log(decryptMessage('We like drinking beer!!!'));

function isWerewolf(target) {
    // write code here

    let firstString = '';
    let secondString ='';

    for (const letter of target) {
        if (letter.toLowerCase() !== letter.toUpperCase()) {
         
            firstString = firstString + letter;
            secondString = letter + secondString;

        }
    }
    return  firstString.toLowerCase() === secondString.toLowerCase()

  }
  
//   console.log(isWerewolf('eva, can i see bees in a cave'));

function getSuccessRate(statistic) {
    // write code here
    let understandNumber = 0;

    if (statistic === '') {
        return 0
    }

    for (const letter of statistic) {

        if (letter === '1') {
            understandNumber++
        }
    }
   
    return Math.round(100 * understandNumber/(statistic.length))

}

// console.log(getSuccessRate('1101'))
