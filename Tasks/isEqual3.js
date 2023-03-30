const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

function isEqual (a, b) {
    const first = Object.keys(a);
    const second = Object.keys(b);
    const third = Object.values(a);
    const fours = Object.values(b);
    
        if (first.length !== second.length) {
            return false;
        }
        for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]){ 
            return false;
        }
        if (third[i] !== fours[i]){ 
            return false;
        }
        }   
return true; 
           
}

console.log (isEqual (data, data2));
console.log (isEqual (data, data3));
console.log (isEqual (data2, data3));