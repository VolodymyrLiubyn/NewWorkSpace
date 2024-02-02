
function formatNumber(template, number = 1234567890) {
  const formatArray = template.split(' ');

  let formatString = String(number);

  const finalArray = [];

  for (const element of formatArray) {
    let formatNum = '';

    for (const part of element) {
      if (part.toUpperCase() === part.toLowerCase()) {
        formatNum += part;
      } else {
        formatNum += formatString[0];
        formatString = formatString.slice(1) + formatString[0];
      }
    }

    finalArray.push(formatNum);
  }

  return finalArray.join(' ');
}

// console.log(formatNumber('xxx xxxxx xx'));
// console.log(formatNumber('+ 555 aaaa bbbb', 18031978));
// console.log(formatNumber('xxx yyy zzz', 4567));
// console.log(formatNumber('+nn (nnn) nnn nn nn', 380294943839));

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const board2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 6, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const board3 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 0, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 0, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 0, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

function validateSudoku(board) {
  // write code here
  const validString = '123456789';
  const checkBoard = [...board];
  const count = board.length;

  for (let i = 0; i < count; i++) {
    const column = [];

    for (let j = 0; j < count; j++) {
      column.push(board[j][i]);
    }
    checkBoard.push(column);
  }

  function check(number) {
    for (let m = 0; m < count; m += 3) {
      const firstElement = board[number].slice(m, m + 3);
      const secondElement = board[number + 1].slice(m, m + 3);
      const thirdElement = board[number + 2].slice(m, m + 3);

      checkBoard.push([...firstElement,
        ...secondElement,
        ...thirdElement]);
    }
  }

  for (let k = 0; k < count; k += 3) {
    check(k);
  }

  for (const item of checkBoard) {
    if (item.sort().join('') !== validString) {
      return false;
    }
  }

  return true;
}

// console.log(validateSudoku(board));
// console.log(validateSudoku(board2));
// console.log(validateSudoku(board3));

function countPairs(numbers) {
  // write code here
  let count = 0;
  const numbersObject = {};

  for (const n of numbers) {
    if (numbersObject[n]) {
      numbersObject[n] += 1;
    } else {
      numbersObject[n] = 1;
    }
  }

  for (let key in numbersObject) {
    count += Math.floor(numbersObject[key] / 2);
  }

  return count;
}

// console.log(countPairs([0, 0, 0, 0]))

function removeOddOccurences(nums) {
  const numObject = {};

  for (const n of nums) {
    if (numObject[n]) {
      numObject[n] += 1;
    } else {
      numObject[n] = 1;
    }
  }

  const deleteNums = [];

  for (let key in numObject) {
    if (numObject[key] % 2 > 0) {
      deleteNums.push(+key)
    }
  }

  let finalResult = [...nums]
  
  for (const element of deleteNums) {
    finalResult = finalResult.filter(item => item !== element)
  }

  return finalResult;
}

// console.log(removeOddOccurences([1, 1, 2, 2, 3, 3, 3, 4]));
// console.log(removeOddOccurences([26, 24, 24, 26]));
// console.log(removeOddOccurences([2, 6, 1, 2, 9, 2, 2, 1, 1, 9]));
// console.log(removeOddOccurences([1, 2, 3]));

function checkSafety(word) {
  let count = 0;

  for (let i = 0; i < word.length - 2; i++) {
    if (word[i] + word[i + 1] === word[i + 1] + word[i]
      || word[i + 1] + word[i + 2] === word[i + 2] + word[i + 1]
      || word[i] + word[i + 1] + word[i + 2]
      === word[i + 2] + word[i + 1] + word[i]) {
      count += 1;
    }
  }

  return count;
}

// console.log(checkSafety('wwwww'));
// console.log(checkSafety('mirror'));
// console.log(checkSafety('dddddddddddd'));
// console.log(checkSafety('number'));

function mergeArrays(letters, numbers) {
  // write code here
  const summaryArray = [];

  let count = letters.length;

  if (numbers.length > letters.length) {
    count = numbers.length
  }

  for (let i = 0; i < count; i++) {
    if (letters[i]) {
      summaryArray.push(letters[i]);
    }
    if (numbers[i]) {
    summaryArray.push(numbers[i]);
    }
  }

  return summaryArray;

}

// console.log(mergeArrays(['a', 'b'], [1, 2]));
// console.log(mergeArrays(['a', 'b', 'c'], [1]));
// console.log(mergeArrays(['a'], [1, 2, 3]));


function MinStack() {
  this.storage = [];
}

/**
 * @param {number} val
 *
 * @returns {void}
 */
MinStack.prototype.push = function(val) {
  if (val) {
    this.storage.push(val);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
  this.storage.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
  let minValue = this.storage[0];

  for (const number of this.storage) {
    if (number < minValue) {
      minValue = number;
    }
  }

  return minValue;

};

const stack = new MinStack();
stack.push(-2); // додає -2
stack.push(0); // додає 0
stack.push(-3); // додає -3
// console.log(stack.getMin());
stack.pop(); // видаляє -3
// console.log(stack.top());
// console.log(stack.getMin()); // повертає -2
// console.log(stack); // повертає -2
const stack2 = new MinStack()
stack2.push(-1);
stack2.push(-3);
// console.log(stack2);

function filterNumbers(objects, nums) {

  return nums.filter(objects.find(item => 
    typeof item !== 'number'));

}

// console.log(filterNumbers([(a => a % 2 === 0), 9, 3, 1, 0], [1, 2, 3, 4])); // [2, 4]
// console.log(filterNumbers([6, 2, 4, (a => a > 5), 5, -3], [4, 5, 6, 7, 8])); // [6, 7, 8]
// console.log(filterNumbers([(-4, 3, 10, -11, (a => a < 0))], [2, 0, 8, 9, 12])); // []

function chainer(functions) {

  function unionAll(b) {
    let result = functions[0](b);
    
    for (let i = 1; i < functions.length; i++) {
      result = functions[i](result);
    }

    return result;
  }
  
  return unionAll;
}

// function f1(x) {return x * 2};
// function f2(x) {return x + 2};
// function f3(x) {return Math.pow(x, 2)};

// console.log(chainer([f1, f2, f3])(0)) //=== 4;

function f1(x) {return x * 2}
function f2(x) {return x + 2}
function f3(x) {return Math.pow(x,2)}

// console.log(chainer([f3, f2, f1])(2))

function dashatizeNumber(num) {

  if (Math.floor(num) !== num || num === undefined) {
    return 'NaN';
  }

  let number = num;

  if (num < 0) {
    number = num * (-1);
  }

  const numArray = String(number).split('');
  const workArray = [];

  let element = numArray[0];

  for (let i = 1; i < numArray.length; i++) {
    
    if (numArray[i] % 2 === 0
      && element % 2 === 0) {
      element += numArray[i];
    } else {
      workArray.push(element);
      element = numArray[i];
    }
  }

  if (element) {
  workArray.push(element);
  }

  return workArray.join('-');
}

// console.log(dashatizeNumber(274));
// console.log(dashatizeNumber(5311));
// console.log(dashatizeNumber(86320));
// console.log(dashatizeNumber(-6));
// console.log(dashatizeNumber(5.7));
// console.log(dashatizeNumber(304993528346617));
// console.log(dashatizeNumber(2.71));


function countUniqueWords(words) {
  // write code here
  const morzeObject = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  const morzeArray = [];

  words.forEach(item => {
    let word = '';

    for (const n of item) {
      word += morzeObject[n];
    }

    if (!morzeArray.includes(word)) {
      morzeArray.push(word);
    }
  });

  return morzeArray.length;
}

// console.log(countUniqueWords(['gin', 'zen', 'gig', 'msg']));
// console.log(countUniqueWords(['abc', 'xyz', 'his']));
// console.log(countUniqueWords(['aaa', 'aaa', 'aaa', 'aaa', 'aaa']));

function createList(objs, name) {
  const propertyArray = [];

  objs.forEach(item => {
    if (name in item) {
      propertyArray.push(item[name]);
    } else {
      propertyArray.push(undefined);
    }
  },
  );

  return propertyArray;
}

//console.log(createList([{ a: 1 }, { a: 2 }], 'a'))// === [1, 2]
//console.log(createList([{ a: 1, b: 3 }, { a: 2 }], 'b')) //=== [3, undefined]
//console.log(createList([{ a: 1, b: 3 }, { a: 2 }], 'c'))// === [undefined, undefined]
//console.log(createList([], 'd'))//=== []

function reverseChars(str, k) {

  const partArray = [];

  let cutString = str;

  while (cutString.length > 0) {
    partArray.push(cutString.slice(0, k));
    cutString = cutString.slice(k);
  }

  for (let i = 0; i < partArray.length; i += 2) {
    partArray[i] = partArray[i].split('').reverse().join('');
  }

  return partArray.join('');
}

// console.log(reverseChars('abcdefg', 2)) //=== 'bacdfeg' 
// console.log(reverseChars('abcdabcdabcd', 3)) //=== 'cbadabadcbcd'
// console.log(reverseChars('qwerty', 6)) //=== 'ytrewq'
// console.log(reverseChars('zxcv', 1)) //=== 'zxcv'


// const people = [
//   { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
//   { name: 'Emma de Milliano', born: 1876, died: 1956 },
//   { name: 'Maria de Rycke', born: 1683, died: 1724 },
//   { name: 'Carel Haverbeke', born: 1796, died: 1837 },
// ];

function getPeopleWithLifeDurations(param) {
  // write code here
  const lifeDuration = [...param];

  return lifeDuration.map(function(item) {
    const element = {...item};
    element.lifeDuration = element.died - element.born;
    return element;
  })

}

// console.log(people);
// console.log(getPeopleWithLifeDurations(people))
// console.log(people);

// const people = [
//   { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
//   { name: 'Emma de Milliano', born: 1876, died: 1956 },
//   { name: 'Maria de Rycke', born: 1683, died: 1724 },
//   { name: 'Carel Haverbeke', born: 1796, died: 1837 },
// ];


function getPeopleWithCentury(people) {
  // write code here
  const lifeCentury = [...people];

  return lifeCentury.map(function(item) {
    const element = {...item};
    if (element.died / 100 === Math.floor(element.died / 100)) {
      element.century = Math.floor(element.died / 100);
    } else {
      element.century = Math.ceil(element.died / 100);
    }
    return element;
  })

}

// console.log(getPeopleWithCentury(people));
// console.log(people);


const carolus = { name: 'Carolus Haverbeke', father: 'Carel Haverbeke', mother: 'Maria van Brussel' };
const emma = { name: 'Emma de Milliano', father: 'Petrus de Milliano', mother: 'Sophia van Damme' };
const laurentia = { name: 'Laurentia Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };
const maria = { name: 'Maria de Rycke', father: 'Frederik de Rycke', mother: 'Laurentia van Vlaenderen' };
const carel = { name: 'Carel Haverbeke', father: 'Pieter Antone Haverbeke', mother: 'Livina Sierens' };
const elisabeth = { name: 'Elisabeth Haverbeke', father: 'Jan Haverbeke', mother: 'Maria de Rycke' };

const people = [carolus, emma, laurentia, maria, carel, elisabeth];



function getPeopleWithChildren(people) {
  // write code here
  const childrenArray = [...people];

  return childrenArray.map(function(item) {
    const element = {...item};
    element.children = people.filter(member => member.father === element.name || 
    member.mother === element.name)
    return element;
  })
}

// console.log(people)

// const peopleWithChildren = getPeopleWithChildren(people);

// console.log(peopleWithChildren)
// console.log(people)
// console.log(people[0].hasOwnProperty('children'))

function getHighestValue(str) {
  const lettersObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const lettersA = 'aeiou';

  const subStringArray = [];

  let part = '';

  for (const l of str) {
    if (lettersA.includes(l)) {
      subStringArray.push(part);
      part = '';
    } else {
      part += l;
    }
  }

  subStringArray.push(part);

  const subArray = subStringArray.filter(item => item.length > 0);

  const numberArray = subArray.map(item => {
    let num = 0;

    for (const n of item) {
      num += lettersObject[n];
    }

    return num;
  });

  let maxSubString = 0;

  for (const value of numberArray) {
    if (value > maxSubString) {
      maxSubString = value;
    }
  }

  return maxSubString;
}

// console.log(getHighestValue('aeuiae')) === 0 // немає приголосних
// console.log(getHighestValue('d')) === 4 
// console.log(getHighestValue('blink')) === 25 // 'nk' має найвище значення, що дорівнює 14 + 11 = 25
// console.log(getHighestValue('')) === 0 // немає приголосних

function partitionArray(pred, items) {
  const trueArray = [];
  const falseArray = [];

  items.forEach(item => {
    if (!pred(item)) {
      falseArray.push(item);
    } else {
      trueArray.push(item);
    }
  });

  items.splice(0, items.length);

  falseArray.forEach(item => items.push(item));
  trueArray.forEach(item => items.push(item));

  return falseArray.length;
}

// const items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 === 0};

// console.log(partitionArray(isEven, items))// === 3 // items зараз повинен бути [1, 3, 5, 2, 4, 6]
// console.log(items)

function generateColor() {
  const validString = '0123456789abcdef';
  const rgbArray = ['#'];
  const minValue = 0;
  const maxValue = 15;

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  let count = 6
  while (count > 0) {
    rgbArray.push(validString[Math.round(random(minValue, maxValue))])
    count --;
  }

  return rgbArray.join('');
};

// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());
// console.log(generateColor());



function findTransFactors(seq) {
  // write code here
  const factorsObject = {
    ATF6: 'TGACGT',
    CREB: 'TGACGCA',
    cMyc: 'CACGTG',
    Gata1: 'GATT',
    AhR: 'TGCGTG',
  };

  const transObject = {
    ATF6: [],
    CREB: [],
    cMyc: [],
    Gata1: [],
    AhR: [],
  };

  for (const key in factorsObject) {
    const count = factorsObject[key].length;

    for (let i = 0; i < seq.length; i++) {
      if (seq.slice(i, count + i) === factorsObject[key]) {
        transObject[key].push(i + 1);
      }
    };
  }

  for (const item in transObject) {
    if (transObject[item].length < 1) {
      delete transObject[item];
    }
  }

  return transObject;

}

// console.log(findTransFactors('GATT'))
// console.log(findTransFactors('ATGGCTGACGTCGTCATGGCGCCCCGATTGAACGATTCCTCCTCCT'))

function detectCapital(word) {
  const checkWord = word.trim();

  if (checkWord.length === 0) {
    return 'Enter a word here';
  }

  const wordArray = checkWord.split(' ');

  if (wordArray.length > 1) {
    return 'Enter one word at a time';
  }

  const smallLetters = checkWord.toUpperCase();
  const bigLetters = checkWord.toLowerCase();

  if (checkWord === smallLetters
    || checkWord === bigLetters) {
    return true;
  }

  if (checkWord[0].toUpperCase()
  + checkWord.slice(1).toLowerCase() === checkWord
  || checkWord[0].toUpperCase()
  + checkWord.slice(1).toUpperCase() === checkWord) {
    return true;
  }

  return false;
}

// console.log(detectCapital('UK')) //=== true 
// console.log(detectCapital('Mate')) //=== true 
// console.log(detectCapital('enTeR')) //=== false
// console.log(detectCapital('1ondon')) //=== true
// console.log(detectCapital('two words')) //=== 'Enter one word at a time'
// console.log(detectCapital(' test    ')) //=== true
// console.log(detectCapital('')) //=== 'Enter a word here'

function detectDuplicates(...arg) {
 let count = arg.length;

 while (count > 0) {
  let element = arg.pop();

  if (arg.includes(element)) {
    return true;
  }
  count--;
 }

 return false;

}

// console.log(detectDuplicates(1, 2, 3)) //=== false
// console.log(detectDuplicates(1, 2, 'a', 1)) //=== true
// console.log(detectDuplicates(true, true, false)) //=== true
// console.log(detectDuplicates(undefined, null, 0)) //=== false

function isLeapYear(year) {
  if (year / 400 === Math.round(year / 400)) {
    return true;
  }

  if (year / 100 === Math.round(year / 100)) {
    return false;
  }

  if (year / 4 === Math.round(year / 4)) {
    return true;
  }

  return false;
}

// console.log(isLeapYear(1884)) //=== true // 1884 ділиться на 4
// console.log(isLeapYear(1700)) //=== false // 1700 ділиться на 100
// console.log(isLeapYear(2000)) //=== true // 2000 ділиться на 400
// console.log(isLeapYear(1925)) //=== false // 1925 не ділиться на 4

function getTribonacciSequence(start, n) {
  if (n === 0) {
    return [];
  }

  const threeArray = [...start];

  for (let i = 2; i < n; i++) {
    threeArray.push(threeArray[i - 2] + threeArray[i - 1] + threeArray[i]);
  }

  return threeArray.slice(0, n);
  
}

// console.log(getTribonacciSequence([1, 1, 1], 5))// === [1, 1, 1, 3, 5]
// console.log(getTribonacciSequence([1, 2, 3], 8))// === [1, 2, 3, 6, 11, 20, 37, 68]
// console.log(getTribonacciSequence([2, 5, 8], 2))// === [2, 5]
// console.log(getTribonacciSequence([10, 11, 12], 0))// === []

const object = {
  person: {
    name: 'David',
    data: {
      hometown: 'Manchester',
      birthdate: '10.12.1998',
      bio: {
        funFact: 'I am fond of diving!'
      }
    }
  }
}

Object.prototype.extract = function extract(path) {
  const pathArray = path.split('.');
  let param = this;

  for (const item of pathArray) {
    param = param[item];
  }

  return param;
};

// console.log(object.extract('person.name')) === 'David'
// console.log(object.extract('person.data.hometown')) === 'Manchester'
// console.log(object.extract('person.data.nationality')) === undefined

function findStray(nums) {
  const firstArray = nums.filter(item => item !== nums[0]);
  const secondtArray = nums.filter(item => item === nums[0]);

  if (firstArray.length === 1) {
    return firstArray[0];
  }

  return secondtArray[0];

}

// console.log(findStray([1, 1, 2])) //=== 2
// console.log(findStray([17, 17, 3, 17, 17, 17, 17])) //=== 3
// console.log(findStray([-1, -1, 1, -1])) //=== 1

function getName(names, n) {
  // while (n > 1) {
  //   let element = names.shift();
  //   names.push(element, element);
  //   n--;
  // }
  const number = names.length;

  if (n <= number) {
    return names[n - 1];
  }

  const numArray = [];
  let count = 0;

  while (number * numArray.reduce((sum, current) => sum + current, 0) < n) {
    numArray.push(2 ** count);
    count++;
  }

  if (numArray.length > 1) {
    numArray.pop();
  }

  const summary = numArray.reduce((sum, current) => sum + current, 0);

  const dif = n - summary * number;

  let numCola = 1;

  if (dif - numCola * 2 ** (count - 1) === 0) {
    return names[0];
  }

  while (dif - numCola * 2 ** (count - 1) > 0) {
    numCola++;
  }
  numCola--;

  return names[numCola];
}

// console.log(getName(['Alice', 'Bob', 'Charlie', 'David'], 2));// 'Bob'
// console.log(getName(['Alice', 'Bob', 'Charlie', 'David'], 111)); //=== 'David'
// console.log(getName(['Harry', 'Ron', 'Hermione', 'Ginny', 'Neville', 'Luna'], 7)) //=== 'Harry';
// console.log(getName(['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'], 110)); //'Bart'
// console.log(getName(['Batman', 'Superman', 'Spiderman', 'Wonderwoman', 'Antman'], 23)); //'Superman'
// console.log(getName(['Arthur', 'Merlin', 'Morgana', 'Guinevere'], 239483859427382385)); //'Morgana'
// console.log(getName(['Frodo', 'Sam', 'Merry', 'Pippin'], 11)); //'Pippin'
// console.log(getName(['Sheldon', 'Leonard', 'Howard', 'Radjesh', 'Penny', 'Bernadette', 'Amy'], 9)); //'Sheldon'
// console.log(getName(['Alice', 'Bob', 'Charlie'], 3)); //'Charlie'

function countAndSay(n) {
  if (n === 1) {
    return '1';
  };

  let countString = '1';
  let count = 1;
  const finalArray = [];

  while (count < n) {
    let a = countString[0];
    const countArray = [];

    for (let i = 1; i < countString.length; i++) {
      if (countString[i] === a[0]) {
        a += countString[i];
      } else {
        countArray.push(a);
        a = countString[i];
      }
    }

    if (a.length > 0) {
      countArray.push(a);
    }

    const result
    = countArray.map(item => String(item.length) + item[0]).join('');

    countString = result;
    count++;
    finalArray.shift();
    finalArray.push(result);
  }

  return finalArray[finalArray.length - 1];
}

// console.log(countAndSay(6));







function adviseBefore(target, advice) {

  function wrapper(...elements) {
    const result = advice(elements);
    // console.log(result)
    // console.log(elements)

    if (Array.isArray(result)) {
      return target(result);
    }


    return target(elements);
  };

  return wrapper;
}

const target = function(arr) {
  return arr.map(x => x * 2);
};

const advice = function(...args) {
  return [args]
};

const result = adviseBefore(target, advice)(1, 2, 3) //=== [2, 4, 6]

// const target = function(...letters) {
//   const reversed = letters.reverse().join('');

//   return reversed;
// };

// const advice = function(...letters) {
//   return letters.join('');
// };

// const result = adviseBefore(target, advice)('a', 'b', 'c', 'd', 'e')

// console.log(result);

// console.log(advice(['a', 'b', 'c', 'd', 'e']))
// console.log(target('a', 'b', 'c', 'd', 'e'))



