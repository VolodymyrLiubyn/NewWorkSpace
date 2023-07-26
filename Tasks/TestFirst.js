let s = "w27y7";
let p1 = "27";
let p2 = "w7y";

const stringChecker = function (s, p1, p2) {
    
    const phrase = Array.from(s);
    const firstPartOfPhrase = Array.from(p1);
    const secondPartOfPhrase = Array.from(p2);
    const firstPartOfPhrasecopy = Array.from(p1);
    const secondPartOfPhrasecopy = Array.from(p2);
    
    if (phrase.length !== (firstPartOfPhrase.length + secondPartOfPhrase.length)) {
        return false
    }
    
    let phrase2 = [];

    let phrase3 = [];

    for (let i = 0; i < phrase.length; i++) {

        const condition = phrase[i] === firstPartOfPhrase[0];

        condition ? phrase2.push(firstPartOfPhrase[0]) : phrase2.push(secondPartOfPhrase[0])
               
        condition ? firstPartOfPhrase.shift(0) : secondPartOfPhrase.shift(0)


        const condition2 = phrase[i] === secondPartOfPhrasecopy[0];

        condition2 ? phrase3.push(secondPartOfPhrasecopy[0]) : phrase3.push(firstPartOfPhrasecopy[0])
               
        condition2 ?  secondPartOfPhrasecopy.shift(0) : firstPartOfPhrasecopy.shift(0)

    }
    
    if (phrase.join ('') === phrase2.join ('') || phrase3.join ('') ) {
        
        return true
    }     
    
    return false;

}

console.log (stringChecker(s, p1, p2))