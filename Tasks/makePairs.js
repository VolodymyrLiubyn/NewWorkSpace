const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 2 };

  function makePairs (a) {
    return Object.entries(a);
  }


console.log(makePairs(data));
console.log(makePairs(data2));