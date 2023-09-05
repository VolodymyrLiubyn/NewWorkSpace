
function checkNumber(number) {
    // write code here
    
    return [number > 0, number % 2 === 0, number % 10 === 0]
    
  }

// console.log(checkNumber(-30));

function getArraysSum(arr1, arr2) {
    // write code here
    if (arr1.length !== arr2.length) {
    return false
    }

    let sumAr1 = 0
    let sumAr2 = 0
    
    for (const n of arr1) {
        sumAr1 += n
    }

    for (const m of arr2) {
        sumAr2 += m
    }

    return sumAr1 + sumAr2
}

// console.log(getArraysSum([1, 2], [3, 4]));

function combineArrays(first, second) {
    // write code here
    if (first.length !== second.length) {
        return false
    }
    let summaryArr = [];

    for (let i = 0; i < first.length; i++) {
        
        summaryArr[i] = first[i] + second[i]
    }

    return summaryArr
}

// console.log(combineArrays([1, 2, 5], [3, 6, 1]));


function splitString(str) {
    // write code here
    
    let intermStr;

    str.length % 2 === 0 ? intermStr = str : intermStr = str + '_';

    let evenStr = intermStr;

    let doubleSimbolString = [];

    for (let i = 0; i < evenStr.length ; i = i + 2) {
        doubleSimbolString.push (evenStr[i] + evenStr[i + 1])
    }

return doubleSimbolString 

}

// console.log(splitString(''));

function scrollingText(word) {
    // write code here
    let wordUp = word.toUpperCase()
    
    let comboArr = [];
    
    for (let i = 0; i < wordUp.length ; i++) {

    comboArr.push(wordUp.slice(i) + wordUp.slice(0, i))

    }
    
    return comboArr

}

// console.log(scrollingText('robot'));


function isSpecialNumber(n) {
    // write code here
    let numberArray = Array.from(n.toString())

    for (const n of numberArray) {
        if ( n < 1 || n > 5) {
            return 'NOT!!'
        }
      
    }

    return 'Special!!'
}

// console.log(isSpecialNumber(22135));

function isTidy(number) {
    // write code here
    let tidyArray = Array.from(number.toString())
    
    for (let i = 0; i < tidyArray.length ; i++) {
        
        if (tidyArray[i] > tidyArray[i + 1]) {
            
            return false
        }
    }

    return true
}

// console.log(isTidy(234667));

function isJumping(number) {

    let jumpingArray = Array.from(number.toString())
    
    if (jumpingArray.length === 1) {
        
        return 'JUMPING'
    }

    for (let i = 1; i < jumpingArray.length ; i++) {

        if (jumpingArray[i] - jumpingArray[i - 1] !== 1 && jumpingArray[i] - jumpingArray[i - 1] !== - 1) {
            
            return 'NOT JUMPING' 
        }
    }
    
    return 'JUMPING'
}

console.log(isJumping(234543))