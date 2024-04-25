function generatePieChart(data) {
  const copyData = JSON.parse(data);
  let chart = 360;
  let sumData = 0;

  for (const key in copyData) {
    sumData += copyData[key];
  }

  for (const key in copyData) {
    copyData[key] = Math.round(100 * (copyData[key] * chart / sumData)) / 100;
  }

  return JSON.stringify(copyData);
}

const data = `{
  "cats": 182,
  "dogs": 213,
  "rabbits": 79
}`;

// console.log(generatePieChart(data));

function getCombinations(n) {

  if (n === 0) {
    return 0;
  }

  const combinationArray = [0, 1];

  for (let i = 0; i <= n; i++) {
    combinationArray.push(combinationArray[0] + combinationArray[1]);
    combinationArray.shift();
  }

  return combinationArray[0];
}

// console.log(getCombinations(0))
// console.log(getCombinations(1))
// console.log(getCombinations(2))
// console.log(getCombinations(5))
// console.log(getCombinations(9))
// console.log(getCombinations(27))

const animals = [
  { name: 'Bear', numberOfLegs: 4 },
  { name: 'Swan', numberOfLegs: 2 },
  { name: 'Fish', numberOfLegs: 0 },
  { name: 'Crow', numberOfLegs: 2 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Leopard', numberOfLegs: 4 },
  { name: 'Sparrow', numberOfLegs: 2 },
  { name: 'Fox', numberOfLegs: 4 }
];

function sortAnimals(animals) {
  if (animals.length === 0) {
    return [];
  }

  const sortAnimalsByLegs = animals.map(function copy(item) {
    return { ...item };
  });

  sortAnimalsByLegs.sort(function(a, b) {
    return a.numberOfLegs - b.numberOfLegs;
  });

  const sortByname = [];
  let numberLegs = sortAnimalsByLegs[0].numberOfLegs;
  let sortAnimalsByLegsAndNames = [];

  for (let i = 0; i < sortAnimalsByLegs.length; i++) {
    if (sortAnimalsByLegs[i].numberOfLegs === numberLegs) {
      sortByname.push(sortAnimalsByLegs[i]);
    } else {
      sortByname.sort((a, b) => (a.name).localeCompare(b.name));
      sortAnimalsByLegsAndNames = sortAnimalsByLegsAndNames.concat(sortByname);
      sortByname.splice(0, sortByname.length);
      numberLegs = sortAnimalsByLegs[i].numberOfLegs;
      i--;
    }
  }

  sortByname.sort((a, b) => (a.name).localeCompare(b.name));
  sortAnimalsByLegsAndNames = sortAnimalsByLegsAndNames.concat(sortByname);

  return sortAnimalsByLegsAndNames;
}

// console.log(sortAnimals(animals));

function getNextSmaller(num) {
  function transform(number) {
    return ('' + number)
    .split('')
    .sort()
    .join('');
  }

  const stringNum = transform(num);

  if (stringNum === '' + num) {
    return -1;
  }

  for (let i = num - 1; i > 0; i--) {
    if (transform(i) === stringNum) {
      return i;
    }
  }

  return -1;
}

// console.log(getNextSmaller(31)) // 13;
// console.log(getNextSmaller(482)) // 428;
// console.log(getNextSmaller(706)) // 670;
// console.log(getNextSmaller(8)) // -1;
// console.log(getNextSmaller(55)) // -1;
// console.log(getNextSmaller(369)) // -1;
// console.log(getNextSmaller(2048)) // -1;
// console.log(getNextSmaller(123456798)) // 123456789;
// console.log(getNextSmaller(123456789)) // -1;


function getCardIssuer(number) {

  if (('' + number).length === 13) {
    if (('' + number).slice(0, 1) === '4') {
      return 'VISA';
    }
  }

  if (('' + number).length === 15) {
    if (('' + number).slice(0, 2) === '34'
    || ('' + number).slice(0, 2) === '37') {
      return 'AMEX';
    }
  }

  if (('' + number).length === 16) {

    if (('' + number).slice(0, 4) === '6011') {
      return 'Discover';
    }

    if (('' + number).slice(0, 2) === '51'
    || ('' + number).slice(0, 2) === '52'
    || ('' + number).slice(0, 2) === '53'
    || ('' + number).slice(0, 2) === '54'
    || ('' + number).slice(0, 2) === '55'
    ) {
      return 'Mastercard';
    }

    if (('' + number).slice(0, 1) === '4') {
      return 'VISA';
    }
  }

  return 'Unknown';
}

// console.log(getCardIssuer(4111111111111))// === 'VISA'
// console.log(getCardIssuer(378282246310005))// === 'AMEX'
// console.log(getCardIssuer(6011111111111117))// === 'Discover'
// console.log(getCardIssuer(5105105105105106))// === 'Mastercard'
// console.log(getCardIssuer(9111111111111111))//=== 'Unknown'

function getMinSum(nums) {
  // write code here
  if (nums.length < 2) {
    return NaN
  }

  const sortNums = [...nums];
  sortNums.sort((a, b) => a - b );

  return sortNums[0] + sortNums[1];
}

// console.log(getMinSum([1, 2])) // === 3
// console.log(getMinSum([15, 28, 4, 2, 43])) // === 6

function rearrangeForMax(num) {

  if (num < 100 || num > 999) {
    return null
  }

  return +('' + num)
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

// console.log(rearrangeForMax(123))// === 321
// console.log(rearrangeForMax(444))// === 444
// console.log(rearrangeForMax(26))// === null
// console.log(rearrangeForMax(1692))// === null
// console.log(rearrangeForMax(-285))// === null
// console.log(rearrangeForMax(99))// === null

function formatOrder(string) {
  const menu = ['burger', 'fries', 'chicken',
    'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];

  const order = [];
  let food = '';

  for (let i = 0; i <= string.length; i++) {
    if (menu.includes(food)) {
      order.push([food, menu.indexOf(food)]);
      food = '';
      i--;
    } else {
      food += string[i];
    }
  }
  order.sort((a, b) => a[1] - b[1]);

  return order.map(item => item[0][0].toUpperCase() + item[0].slice(1))
    .join(' ');
}

// console.log(formatOrder('pizzasandwichcoke'));
// console.log(formatOrder('milkshakefriespizzaburger'));
// console.log(formatOrder('onionringscokeonionrings'));

function getWordCount(beach) {
  const smallBeach = beach.toLowerCase();
  const sandCount = smallBeach.split('sand').length - 1;
  const waterCount = smallBeach.split('water').length - 1;
  const fishCount = smallBeach.split('fish').length - 1;
  const sunCount = smallBeach.split('sun').length - 1;

  return sandCount + waterCount + fishCount + sunCount;
}

// console.log(getWordCount('WatEr'));
// console.log(getWordCount('sunsunWatersomemoreSunandSAnd'));
// console.log(getWordCount('ocean'));

function countDays(height, up, down) {
  // write code here
  if (height === up) {
    return 1;
  }

  const days = Math.ceil(height / (up - down));

  if (up * days - down * days === height) {
    return days - 1;
  } else {
    return days;
  }
}

function isAlphanumeric(str) {
  if (str.length === 0) {
    return false;
  }

  const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
  const bigLetters = smallLetters.toUpperCase();
  const numbers = '0123456789';
  const correctElements = smallLetters + bigLetters + numbers;

  for (const element of str) {
    if (!correctElements.includes(element)) {
      return false;
    }
  }

  return true;
}

// console.log(isAlphanumeric('abCDefG'))// === true
// console.log(isAlphanumeric('a1b2c3'))// === true
// console.log(isAlphanumeric('test input'))// === false
// console.log(isAlphanumeric('What?'))// === false
// console.log(isAlphanumeric(''))// === false

function isValidWalk(walk) {
  // write code here
  if (walk.length !== 10) {
    return false;
  }

  const northCount = walk.filter(item => item === 'n').length;
  const southCount = walk.filter(item => item === 's').length;
  const eastCount = walk.filter(item => item === 'e').length;
  const westCount = walk.filter(item => item === 'w').length;

  if (northCount === southCount && eastCount === westCount) {
    return true;
  }

  return false;
}

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))// === true
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))// === false // довша ніж 10 хвилин
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e']))// === false // коротша ніж 10 хвилин
// console.log(isValidWalk(['n', 'e', 'n', 's', 'n', 's', 'e', 's', 'n', 's']))// === false // не повертає тебе до вихідної точки
// console.log(isValidWalk(['w', 's', 'w', 's', 'n', 'n', 'e', 'w', 'e', 'e']))

function isSquare(n) {

  if (n < 0) {
    return false;
  }

  if (n === 0) {
    return true;
  }

  for (let i = 0; i <= n; i++) {
    if (n / i < i) {
      return false;
    }

    if (n / i === i) {
      return true;
    }
  }

}

// console.log(isSquare(16))// === true // 4 * 4 = 16
// console.log(isSquare(2))// === false // 2 - це не повний квадрат
// console.log(isSquare(-4))// === false // Від'ємні числа не можуть бути повними квадратами
// console.log(isSquare(144))
// console.log(isSquare(0))

function fixString(str) {
  // write code here
  const smallLetters = str.toLowerCase();
  const bigLetters = str.toUpperCase();
  let smallCounter = 0;
  let bigCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (smallLetters[i] !== str[i] && smallLetters[i] !== ' ') {
      smallCounter++;
    }
    if (bigLetters[i] !== str[i] && bigLetters[i] !== ' ') {
      bigCounter++;
    }
  }

  if (smallCounter <= bigCounter) {
    return smallLetters;
  }

  return bigLetters;
}

// console.log(fixString('Mate Academy'))// === 'mate academy'
// console.log(fixString('Mate ACADEmy'))
// console.log(fixString('maTE'))

function reverseOrRotate(digits, size) {
  if (size <= 0
    || digits === ''
    || size > digits.length) {
    return '';
  }

  const partArray = [];

  for (let i = 0; i < digits.length; i += size) {
    partArray.push(digits.slice(i, size + i));
  }

  if (partArray[partArray.length - 1].length < size) {
    partArray.pop();
  }

  const rotateArray = [];

  for (const part of partArray) {
    if (part
      .split('')
      .reduce((sum, current) => sum
      + (+current * +current * +current), 0) % 2 === 0) {
        rotateArray.push(part.split('').reverse().join(''));
      } else {
        rotateArray.push(part.slice(1, size) + part[0]);
      }
  }

  return rotateArray.join('');
}

// console.log(reverseOrRotate('24394', 5)) //=== '49342' // сума кубів цифр дорівнює 8 + 64 + 27 + 729 + 64 = 892, що ділиться на 2
// console.log(reverseOrRotate('3158', 4)) //=== '1583' // сума кубів цифр дорівнює 27 + 1 + 125 + 512 = 665, що не ділиться на 2
// console.log(reverseOrRotate('9762584', 3)) //=== '679582' // фрагмент '4' не включається до результату, оскільки його довжина менше 3
// console.log(reverseOrRotate('38945827', 0)) //=== ''
// console.log(reverseOrRotate('294', 7)) //=== ''
// console.log(reverseOrRotate('129472387548', 5))

function getMaxProfit(prices) {
  let minPrice = prices[0];
  let minindex = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minindex = i;
    }
  }

  const betterArray = prices.slice(minindex);

  let maxPrice = betterArray[0];

  for (const price of betterArray) {
    if (price > maxPrice) {
      maxPrice = price;
    }
  }

  return maxPrice - minPrice;
}

// console.log(getMaxProfit([5, 3, 10])) //=== 7 // купівля в день 2 і продаж в день 3
// console.log(getMaxProfit([7, 1, 5, 3, 6, 4])) //=== 5 // купівля в день 2 і продаж в день 5; купити в день 2 і продати в день 1 не можна
// console.log(getMaxProfit([8, 5, 4])) //=== 0 // в цьому випадку ніяких операцій не відбувається, і максимальний прибуток = 0.

const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]
// const grid = [
//   [12, 12, 12, 12],
//   [12, 12, 12, 12],
//   [12, 12, 12, 12],
//   [12, 12, 12, 12]
// ]
// const grid = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
// const grid = [[19, 98, 49], [52, 72, 40], [25, 65, 42]]

function maxIncrease(grid) {
  const vertLinelArray = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      vertLinelArray.push(grid[j][i]);
    }
  }

  const verticalArray = [];

  for (let m = 0; m < vertLinelArray.length; m += grid.length) {
    verticalArray.push(vertLinelArray.slice(m, m + grid.length));
  }

  const maxGorizValue = [];
  const maxVerticValue = [];

  function maxvalue(enterarr, exitarr, value = 0) {
    let a = value;

    for (const part of enterarr) {
      for (const num of part) {
        if (num > a) {
          a = num;
        }
      }
      exitarr.push(a);
      a = 0;
    }
  }

  maxvalue(grid, maxGorizValue);
  maxvalue(verticalArray, maxVerticValue);

  const nextGrid = [];

  for (const n of maxGorizValue) {
    for (const k of maxVerticValue) {
      if (n <= k) {
        nextGrid.push(n);
      } else {
        nextGrid.push(k);
      }
    }
  }

  let countGrid = 0;

  const flatGrid = grid.flat();

  for (let n = 0; n < flatGrid.length; n++) {
    countGrid += nextGrid[n] - flatGrid[n];
  }

  return countGrid || 0;
}

// console.log(maxIncrease(grid));


function toPigLatin(str) {
  if (str.length === 0) {
    return '';
  }

  const phraseArray = str.split(' ');

  const pigLatin = phraseArray.map(function(item) {
    if (item.toLowerCase() === item.toUpperCase()) {
      return item;
    }

    return item.slice(1) + item[0] + 'ay';
  });

  return pigLatin.join(' ');
}

// console.log(toPigLatin('code'))// === 'odecay'
// console.log(toPigLatin('Javascript is fun'))// === 'avascriptJay siay unfay'
// console.log(toPigLatin('Thank you !'))// === 'hankTay ouyay !'
// console.log(toPigLatin('d'))

function convertTime(seconds) {
  const secToHour = 3600;
  const secToMin = 60;

  const hourNumber = Math.floor((seconds / secToHour));
  const minutsNumber = Math.floor((seconds - hourNumber * secToHour) / secToMin);
  const secondsNumber = seconds - hourNumber * secToHour - minutsNumber * secToMin;

  const timeArray = [];

  function convert(numberTime, stringTime = '') {
    if (numberTime < 10) {
      timeArray.push('0' + numberTime);
    } else {
      timeArray.push(stringTime + numberTime);
    }
  }

  convert(hourNumber);
  convert(minutsNumber);
  convert(secondsNumber);

  return timeArray.join(':');
}

// console.log(convertTime(0)) // === '00:00:00'
// console.log(convertTime(20)) // === '00:00:20'
// console.log(convertTime(65)) // === '00:01:05'
// console.log(convertTime(3600)) // === '01:00:00'
// console.log(convertTime(123456)) // === '34:17:36'

function compareBy(type) {
  // write code here
  if (type === 'length') {
    return (a, b) => a.length - b.length;
  }

  if (type === 'alphabet') {
    return (a, b) => a.localeCompare(b);
  }

  return (a) => a;
}

// const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

// const compareByLength = compareBy('length');
// console.log([...words].sort(compareByLength)); // ['one', 'two', 'six', 'four', 'five', 'three', 'seven']

// const compareByAlphabet = compareBy('alphabet');
// console.log([...words].sort(compareByAlphabet)); // ['five', 'four', 'one', 'seven', 'six', 'three', 'two']

// const compareByUnknown = compareBy('unknown value');
// console.log([...words].sort(compareByUnknown)); // ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

function makeHistogram(results) {
  let empty = '';
  const hashtegArray = [];

  for (const num of results) {
    for (let i = 0; i < num; i++) {
      empty += '#';
    }

    if (num === 0) {
      hashtegArray.push('|' + empty);
    } else {
      hashtegArray.push('|' + empty + ' ' + num);
    }
    empty = '';
  }

  const histogramArray = hashtegArray.map(function(item, index, array) {
    return index + 1 + item;
  });

  return histogramArray
    .reverse()
    .join('\n') + '\n';
}

// console.log(makeHistogram([7, 3, 10, 1, 0, 5])) // === '6|##### 5\n5|\n4|# 1\n3|########## 10\n2|### 3\n1|####### 7\n'
// console.log(makeHistogram([3, 6, 1, 10, 5, 2]))

function groupByCommas(num) {
  let strNum = num + '';
  let firstSumbol = '';

  if (strNum[0] === '-') {
    strNum = strNum.slice(1);
    firstSumbol = '-';
  }

  const numArray = strNum.split('').reverse();
  const comaArray = [];

  for (let i = 0; i < numArray.length; i += 3) {
    comaArray.push(numArray.slice(i, i + 3).reverse().join(''));
  }

  return firstSumbol + comaArray.reverse().join(',');

}

// console.log(groupByCommas(1234567))// === '1,234,567'
// console.log(groupByCommas(-1234567))// === '-1,234,567'
// console.log(groupByCommas(-123456))// === '-123,456'
// console.log(groupByCommas(12))// === '12'
// console.log(groupByCommas(-123))// === '-123'

function fixAlphabet(str) {
  if (typeof (str) !== 'string') {
    return 'Input is not a string';
  }

  const checkString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let wrightWord = '';

  for (const element of str) {
    if (!checkString.includes(element)) {
      wrightWord += element;
    } else {
      if (element === 'a') {
        wrightWord += 'Z';
      } else {
        for (let i = 0; i < checkString.length; i++) {
          if (element === checkString[i]) {
            wrightWord += checkString[i - 1];
          }
        }
      }
    }
  }

  return wrightWord;
}

// console.log(fixAlphabet('abA'));
// console.log(fixAlphabet('Ifmmp xpsme!'));
// console.log(fixAlphabet(12));


function compose(func1, func2) {
  function union(...params) {
    const resA = func2(...params);
    return func1(resA);
  }

  return union;
}

const add2  = (n) => n + 2;
const times2 = (n) => n * 2;
const times2add2 = compose(add2, times2);
const add4 = compose(add2, add2);
const add2times2 = compose(times2, add2)

// console.log(times2add2(2))// === 6
// console.log(add2times2(2))// === 8
// console.log(add4(2))// === 6


function spyOn(func) {
  const elementArray = [];
  let countBond = 0;
  const resultsArray = [];

  function bond(...elements) {
    countBond++;
    elementArray.push(...elements);
    const resultBond = func(...elements);
    resultsArray.push(resultBond);

    return resultBond;
  }

  bond.callCount = function() {
    return countBond;
  };

  bond.wasCalledWith = function (a) {
    return elementArray.includes(a);
  }

  bond.returned = function (b) {
    return resultsArray.includes(b);
  }

  return bond;
}

function adder(n1, n2) {return n1 + n2;}
const spy = spyOn(adder);

// console.log(spy(2, 4))// === 6
// console.log(spy(3, 5))// === 8
// console.log(spy.callCount())// === 2
// console.log(spy.wasCalledWith(4))// === true
// console.log(spy.wasCalledWith(0))// === false
// console.log(spy.returned(8))// === true
// console.log(spy.returned(0))// === false

function generateRows(num) {
  const difArray = [[1]];

  if (num === 1) {
    return difArray;
  }

  const rowArray = [];

  for (let i = 1; i < num; i++) {
    for (let j = 1; j < difArray[i - 1].length; j++) {
      rowArray.push(difArray[i - 1][j] + difArray[i - 1][j - 1]);
    }
    rowArray.push(1);
    rowArray.unshift(1);
    difArray.push([...rowArray]);
    rowArray.splice(0, rowArray.length);
  }

  return difArray;
}

// console.log(generateRows(1))// === [[1]]
// console.log(generateRows(2))
// console.log(generateRows(3))// === [[1], [1, 1], [1, 2, 1]]
// console.log(generateRows(6))// === [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]
