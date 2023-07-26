let s = "radency";
let p1 = "rdnc";
let p2 = "aey";

const stringChecker = function (s, p1, p2) {
    
    const phrase = s.split('');
    const firstPartOfPhrase = p1.split('');
    const secondPartOfPhrase = p2.split('');
    if (phrase.length !== (firstPartOfPhrase.length + secondPartOfPhrase.length)) {
        return false
    }
    
    let phrase2 = [];

    for (let i = 0; i < phrase.length; i++) {

        phrase[i] === firstPartOfPhrase[0] ? phrase2.push(firstPartOfPhrase[0]) : phrase2.push(secondPartOfPhrase[0])
               
        phrase[i] === firstPartOfPhrase[0] ? firstPartOfPhrase.shift(0) : secondPartOfPhrase.shift(0)
    }
    
    if (phrase.join ('') === phrase2.join ('') ) {
        return true
    }     
    
    return false;

}

console.log (stringChecker(s, p1, p2))