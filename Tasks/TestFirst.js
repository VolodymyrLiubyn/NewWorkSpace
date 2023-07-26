let s = "radency";
let p1 = "rdnc";
let p2 = "aey";

const stringChecker = function (s, p1, p2) {
    
    const phrase = Array.from(s);
    const firstPartOfPhrase = Array.from(p1);
    const secondPartOfPhrase = Array.from(p2);
    const firstPartOfPhrasecopy = Array.from(p2);
    const secondPartOfPhrasecopy = Array.from(p1);
    
    if (phrase.length !== (firstPartOfPhrase.length + secondPartOfPhrase.length)) {
        return false
    }
    
    let phrase2 = [];
    
    for (let i = 0; i < phrase.length; i++) {

        const condition = phrase[i] === firstPartOfPhrase[0];

        condition ? phrase2.push(firstPartOfPhrase[0]) : phrase2.push(secondPartOfPhrase[0])
               
        condition ? firstPartOfPhrase.shift(0) : secondPartOfPhrase.shift(0)
       
    }

    let phrase3 = [];
    
    for (let i = 0; i < phrase.length; i++) {

        const condition = phrase[i] === firstPartOfPhrasecopy[0];

        condition ? phrase3.push(firstPartOfPhrasecopy[0]) : phrase3.push(secondPartOfPhrasecopy[0])
               
        condition ? firstPartOfPhrasecopy.shift(0) : secondPartOfPhrasecopy.shift(0)
    
    }
    
    if ((phrase.join ('') === phrase2.join ('')) || (phrase.join ('') === phrase3.join (''))) {
        
        return true
    }     

    return false;

}

console.log (stringChecker(s, p1, p2))