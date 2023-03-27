const data = { a: 1, b: 1 };

function makePairs (a) {
    return Object.entries(a);
}
console.log(makePairs(data));