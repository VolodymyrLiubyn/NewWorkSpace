const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

function isEqual (a, b) {
    const first = Object.entries(a);
    const second = Object.entries(b);
    if (first.length !== second.length) {
        return false;
    }
    for (let i = 0; i < first.length; i++) {
        if (first[i][0] !== second[i][0]){ 
            return false;
        }
        if (first[i][1] !== second[i][1]){ 
            return false;
        }
    }
     
    return true;
}

console.log (isEqual (data, data2));
console.log (isEqual (data, data3));
console.log (isEqual (data2, data3));