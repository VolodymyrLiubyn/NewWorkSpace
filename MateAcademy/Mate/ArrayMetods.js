const numbers = [1, 2, 3, 4, 5]

numbers.push = function(...items) {
  // write code here
    for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }

};

numbers.push(6)
// console.log(numbers);

numbers.unshift = function(...items/* you need to add params */) {
  // write code here
  for (let j = items.length; j > 0; j--) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this[0] = items[j - 1];
  }

  return this.length;
};

numbers.unshift(7, 8, 9)
// console.log(numbers);

numbers.shift = function() {
  // write code here
  if (this.length === 0) {
    return undefined;
  }

  const first = this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length -= 1;

  return first;
};

numbers.shift()
// console.log(numbers);

