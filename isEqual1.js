
function isEqual (a, b) {
    const c = JSON.stringify(a);
    const d = JSON.stringify(b);

    if  ( c === d) {
       console.log ('true');
    } else {
   console.log ('false') };

}
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

console.log (isEqual (data, data2));
console.log (isEqual (data, data3));
console.log (isEqual (data2, data3));

