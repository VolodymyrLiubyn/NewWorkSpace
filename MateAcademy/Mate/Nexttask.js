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
