function toJadenCase(quote) {
  const text = quote.trim().toLowerCase();
  let textWithOutSeveralSpaces = '';

  for (let j = 0; j < text.length; j++) {
    if (text[j] + text[j + 1] !== '  ') {
      textWithOutSeveralSpaces += text[j];
    }
  }

  const textArray = textWithOutSeveralSpaces.split(' ');
  const textJaden = [];

  for (let i = 0; i < textArray.length; i++) {
    textJaden.push(textArray[i][0].toUpperCase()
    + textArray[i].slice(1));
  }

  return textJaden.join(' ');
}
// console.log(toJadenCase('  no   more    words'));

function arrayReverse(words) {
  // write code here
  const joinString = words.join('');
  let reverseString = '';

  for (const num of joinString) {
    reverseString = num + reverseString;
  }

  const reverseArray = [];
  let part = '';

  for (let j = 0; j < words.length; j++) {
    let i = 0;

    while (words[j].length > part.length) {
      part += reverseString[i];
      i++;
    };

    reverseArray.push(part);
    reverseString = reverseString.slice(i);
    part = '';
    i = 0;
  }

  return reverseArray;
}
// console.log(arrayReverse(['I', 'am', 'a', 'student!']));

function getFibonacciNumber(n) {
  const fibonacciArray = [0, 1];
  let i = 2;

  while (fibonacciArray.length <= n) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    i++;
  }

  return fibonacciArray[n];
}

// console.log(getFibonacciNumber(7));


recipe = { flour: 500, sugar: 200, eggs: 1 };

available = { flour: 1500, sugar: 1200, eggs: 5, milk: 200 };

function countCakes(recipe, available) {
  // write code here
  const cakeArray = [];

  for (const key in recipe) {
    if (!(key in available)) {
      return 0;
    }
    cakeArray.push(Math.floor((available[key] / recipe[key])));
  }

  let cakeNumber = cakeArray[0];

  for (let j = 0; j < cakeArray.length; j++) {
    if (cakeNumber > cakeArray[j]) {
      cakeNumber = cakeArray[j];
    }
  }

  return +cakeNumber;
}

// console.log(countCakes(recipe, available))

function constructRectangle(area) {
  if (area === 0) {
    return [0, 0];
  }

  const length = [];
  const width = [];

  for (let i = area; i > 0; i--) {
    if (area % i === 0) {
      length.push(i);
      width.unshift(i);
    }
  }

  let a = length[0];
  let b = width[0];
  let minDifference = a - b;

  for (let j = 0; j < length.length; j++) {
    if (length[j] >= width[j]) {
      if (length[j] - width[j] < minDifference) {
        minDifference = length[j] - width[j];
        a = length[j];
        b = width[j];
      }
    }
  }

  return [a, b];
}

// console.log(constructRectangle(102));

function getCoinCombination(cents) {
  const twentyFive = 25;
  const ten = 10;
  const five = 5;
  const one = 1;
  const quarter = Math.floor(cents / twentyFive);
  const dime = Math.floor((cents - quarter * twentyFive) / ten);
  const nicel = Math.floor((cents - quarter * twentyFive - ten * dime) / five);
  const penni = Math.floor((cents - quarter * twentyFive - ten * dime - nicel * five) / one);

  return [penni, nicel, dime, quarter];
  
}
// console.log(getCoinCombination(41));

function validateIP(str) {
  const arrayIP = str.split('.');

  if (arrayIP.length !== 4) {
    return false;
  }

  for (let i = 0; i < arrayIP.length; i++) {
    if (+arrayIP[i] > 255 || +arrayIP[i] < 0) {
      return false;
    }

    if ((+arrayIP[i]).toString() !== arrayIP[i]) {
      return false;
    }
  }

  return true;
}

// console.log(validateIP('1.255.0.0'));



// function getRow(rowIndex) {
//   if (rowIndex === 0) {
//     return [1];
//   }

//   if (rowIndex === 1) {
//     return [1, 1];
//   }

//   let result = [];



// }

// console.log(getRow(5));

function removeElement(nums, val) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }

  return nums.length;

}
//  console.log(removeElement([2, 2, 2], 2));

function getOriginalPrice(salePrice, discount) {

 return +(salePrice / (1 - discount / 100)).toFixed(2)
}

// console.log(getOriginalPrice(63, 15));

function countNines(n) {
  let countNine = 0;
  let stringNine = '';

  for (let i = 1; i <= n; i++) {
    stringNine = stringNine + i;
  }

  for (let j = 0; j <= stringNine.length; j++) {
    if (stringNine[j] === '9') {
      countNine++;
    }
  }

  return countNine;
}

// console.log(countNines(20));

function findMaximumProduct(nums, size) {
  // write code here
  const maxArray = nums.sort((a, b) => b - a);
  let maxSize = 0;

  if (nums.length < size) {
    maxSize = nums.length;
  } else {
    maxSize = size;
  }

  if (size === 0) {
    return 1;
  }

  let multiple = maxArray[0];

  for (let i = 1; i < maxSize; i++) {
    multiple *= maxArray[i];
  }

  return multiple;
}
// console.log(findMaximumProduct([0, 2, 6, -3, 10] , 3));

function reduceDirections(route) {
  for (let i = 0; i <= route.length; i++) {
    if (route[i] + route[i + 1] === 'northsouth'
    || route[i] + route[i + 1] === 'southnorth'
    || route[i] + route[i + 1] === 'eastwest'
    || route[i] + route[i + 1] === 'westeast') {
      route.splice(i, 2);
      i = i - 2;
    }
  }

  return route;
}
// console.log(reduceDirections(['north', 'south', 'east', 'west']));

const ticket = {
  Home: '£74',
  Away: '£36',
  Draw: '£5',
};

const results = ['3-3', '2-2', '1-2'];

function totalWinning(ticket, results) {
  let winning = 0;
  const numResult = [];

  for (const num of results) {
    numResult.push(num.split('-'));
  }

  if (+numResult[0][0] > +numResult[0][1]) {
    winning += +(ticket.Home.slice(1));
  }

  if (+numResult[1][0] < +numResult[1][1]) {
    winning += +(ticket.Away.slice(1));
  }

  if (+numResult[2][0] === +numResult[2][1]) {
    winning += +(ticket.Draw.slice(1));
  }

  return '£' + winning;
}

// console.log(totalWinning(ticket, results));

function isPerfectNum(num) {
  // write code here
  const idealArray = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      idealArray.push(i);
    }
  }

  let sumIdealArray = 0;

  idealArray.forEach((item) => {
    sumIdealArray += item;
  });

  return sumIdealArray === num;

}

// console.log(isPerfectNum(28));

function checkGroups(str) {
let checkString = '';
for (const element of str) {
  if (element !== ' ') {
    checkString = checkString + element;
  }
}

const checkArray = checkString.split('')
for (let i = 0; i <= checkArray.length; i++) {
 if (checkArray[i] + checkArray[i + 1] === '()'
 || checkArray[i] + checkArray[i + 1] === '{}'
 || checkArray[i] + checkArray[i + 1] === '[]') {
 checkArray.splice(i, 2)
  i = i - 2;
 }
}

return checkArray.length === 0;
}
// console.log(checkGroups('[[] ({ })]'));

shoes1 = [[0, 20],
         [1, 21],
         [1, 20],
         [1, 21]];


function pairShoes(shoes) {
  // write code here
  const copyShoes = [...shoes];

  for (let j = 0; j < copyShoes.length; j++) {
    for (let i = 1; i < copyShoes.length; i++) {
      if (copyShoes[j][0] + copyShoes[i][0] === 1
      && copyShoes[j][1] === copyShoes[i][1]) {
        copyShoes.splice(i, 1);
        copyShoes.splice(0, 1);
        i = 0;
      }
    }
  }
  
    return copyShoes.length === 0;
}
  
// console.log(pairShoes(shoes1));

function countDuplicates(str) {
  let counterSumbol = 0;
  const stringLowerCase = str.toLowerCase();

  const sumbolObject = {};

  for (const element of stringLowerCase) {
    if (!sumbolObject[element]) {
      sumbolObject[element] = 0;
    }
    sumbolObject[element]++;
  }

  for (const key in sumbolObject) {
    if (sumbolObject[key] > 1) {
      counterSumbol++;
    }
  }

  return counterSumbol;
}
// console.log(countDuplicates('aA11'));

function sortString(words) {
  const sortArray = words.split(' ');
  const correctArray = [];

  for (let i = 0; i <= sortArray.length; i++) {
    for (const num of sortArray) {
      if (num.includes(i)) {
        correctArray.push(num);
      }
    }
  }

  return correctArray.join(' ');
}

// console.log(sortString(''));

function reverseMessage(message) {
  const messageArray = message.split(' ');
  const reverseArray = [];
  let reverseWord = '';

  for (let i = 0; i < messageArray.length; i++) {
    for (let j = 0; j < messageArray[i].length; j++) {
      reverseWord = messageArray[i][j] + reverseWord;
    } reverseArray.push(reverseWord);
    reverseWord = '';
  }

  return reverseArray.join(' ');
}
// console.log(reverseMessage('tpircsavaJ si eht egaugnal fo erutuf'));

const wish = `I want a short stylish haircut, like my brother's`;

function getOrder(wish, wordsCount) {
  // write code here
  return wish.split(' ').splice(0, wordsCount).join(' ');
}
// console.log(getOrder(wish, 6));

function sortBooks(shelves) {
  // write code here
  const sortArray = [];
    for(const book of shelves) {
      for (let i = 0; i < book.length; i++)
      sortArray.push(book[i]);
    }

  return sortArray.sort();
}
// console.log(sortBooks([
//   ['Going Over', 'Brazen'],
//   ['The Enemy'],
//   ['Followers', 'Belle Epoque']
// ]));

const robot = {
  name: 'Sundar',
};
const workPlaces = [
  {
    name: 'mate academy',
    staff: ['Roma', 'Misha', 'Yura'],
  },
  {
    name: 'Google',
    staff: ['Larry', 'Sergey', 'Sundar'],
  },
];

const searchRobot = (robot, workPlaces) => {
  // write code here
  for (let i = 0; i < workPlaces.length; i++) {
    if (workPlaces[i].staff.includes(robot.name)) {
      return workPlaces[i].name;
    }
  }
}

// console.log(searchRobot(robot, workPlaces));






