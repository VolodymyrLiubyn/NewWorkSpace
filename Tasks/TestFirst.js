let s = "radency";
let p1 = "rdnc";
let p2 = "aey";

const stringChecker = function (s, p1, p2) {
    
    const first = s.split('');
    const second = p1.split('');
    const third = p2.split('');
    if (first.length !== (second.length + third.length)) {
        return false
    }
    
    const differenceA = first.filter(num => !second.includes(num))
    
    const differenceB = first.filter(num => !third.includes(num))

    const h = differenceA.join ('');
    const k = differenceB.join ('');
    
        if (h !== p2 ) {
            return false
        }
        
        if (k === p1 ) {
            return true       
        }
    
    return false;

}

console.log (stringChecker(s, p1, p2))