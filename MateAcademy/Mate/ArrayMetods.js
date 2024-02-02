const numbers = [1, 2, 3, 4, 5]

numbers.pop = function() {
  // write code here
  const numbers = this;

  if (numbers.length === 0) {
    return undefined;
  }

  let remove;

  for (let i = 0; i < numbers.length; i++) {
    remove = numbers[i];
  }
  numbers.length -= 1;

  return remove;
};

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

numbers.includes = function(item, from) {
  // write code here  let position = 0;
  let position = 0;

  if (from + this.length <= 0) {
    position = 0;
  }

  if (from + this.length > 0
  && from + this.length < this.length) {
    position = from + this.length;
  }

  if (from > this.length) {
    return false;
  }

  if (from
  && from >= 0
  && from <= this.length) {
    position = from;
  }

  for (let i = position; i < this.length; i++) {
    if (this[i] === item) {
      return true;
    }
  }

  return false;
};

numbers.reverse = function() {
  // write code here
  const copyThis = [...this];

  for (let i = 0; i < this.length; i++) {
    this[i] = copyThis[copyThis.length - 1 - i];
  }

  return this;
};

console.log(numbers)

console.log(numbers.reverse())

numbers.indexOf = function(item, from = 0) {
  // write code here
  let count = from;

  if (from >= this.length) {
    return -1;
  }

  if (-this.length >= from) {
    count = 0;
  }

  if (-this.length < from
  && from < 0) {
    count = this.length + from;
  }

  for (let i = count; i < this.length; i++) {
    if (item === this[i]) {
      return i;
    }
  }

  return -1;
};

numbers.join = function(delim) {
  // write code here
  if (this.length === 0) {
    return '';
  }

  let param = delim;

  if (delim === undefined) {
    param = ',';
  }

  if (delim === null) {
    param = 'null';
  }

  let word = '' + this[0];

  if (this[0] === undefined
    || this[0] === null) {
    word = '';
  }

  for (let i = 1; i < this.length; i++) {
    if (this[i] === undefined
    || this[i] === null) {
      this[i] = '';
    }
    word += param + this[i];
  }

  return word;
};

const numbers = [1, 2, 3, 4, 5, 6]


numbers.slice = function(start, end) {
  // write code here
  const thisCopy = [...this];
  let first = start;
  let second = end;

  if (!first && !second) {
    return thisCopy;
  }

  const copyLength = thisCopy.length;

  if (first > copyLength) {
    return [];
  }

  if (first < 0) {
    first = copyLength + first;
  }

  if (first < 0) {
    first = 0;
  }

  if (second === undefined) {
    second = copyLength;
  }

  if (second > copyLength) {
    second = copyLength;
  }

  if (second < 0) {
    second += copyLength;
  }

  if (first > second) {
    return [];
  }

  const resultArray = [];

  let count = 0;

  for (let i = first; i < second; i++) {
    resultArray[count] = thisCopy[i];
    count++;
  }

  return resultArray;
};

//  console.log(numbers.slice(-900, 3));

 numbers.find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    };
  }

  return undefined;
};

numbers.map = function(callback) {
  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    resultArray[i] = callback(this[i], i, this);
  }

  return resultArray;
};

numbers.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    };
  }

  return false;
};

numbers.every = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    };
  }

  return true;
};

numbers.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    };
  }

  return -1;
};

numbers.filter = function(callback) {
  const filterArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filterArray[filterArray.length] = this[i];
    };
  }

  return filterArray;
};

numbers.reduce = function(callback, initial) {
  let accumulator = this[0];

  if (initial !== undefined) {
    accumulator = initial;

    for (let j = 0; j < this.length; j++) {
      accumulator = callback(accumulator, this[j], j, this);
    };

    return accumulator;
  }

  for (let i = 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  };

  return accumulator;
};

numbers.lastIndexOf = function(searchElement, fromIndex) {
  let index = fromIndex;

  if (!index
  && index !== 0) {
    index = this.length - 1;
  }

  if (index < 0) {
    index += this.length;
  }

  if (index < 0) {
    index = 0;
  }

  for (let i = index; i >= 0; i--) {
    if (searchElement === this[i]) {
      return i;
    }
  }

  return -1;
};
