let s = "radency";
let p1 = "rdnc";
let p2 = "aey";

const stringChecker = function (s, p1, p2) {
    
    const first = s.split('');
    const second = (p1 + p2).split('');
    if (first.length !== second.length) {
        return false
    }
  
    const a = first.sort();
    const b = second.sort();

    const h = a.join ('');
    const k = b.join ('');

    if (h === k ) {
        return true
    }
               
    return false;

}

console.log (stringChecker(s, p1, p2))