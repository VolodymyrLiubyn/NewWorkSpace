// let count = 0;

// function MagicFunction(...param) {
//   const magicArray = [];
//   for(const element of param) {
//     if (typeof(element) !== 'number') {
//       magicArray.push(0);
//     } else {
//     magicArray.push(+element)
//     }
//   }
//   magicArray.forEach((item) => {
//     count += item;
//   })

//   return count;
// }

// console.log(MagicFunction(2, -1, 5));


function getLongestChain(word) {
  const smallLetters = 'aeiou';
  const lettersArray = [];
  let letters = '';

  for (const letter of word) {
    if (smallLetters.includes(letter)) {
      letters = letters + letter;
    } else {
      letters = letters + ' ';
    };
  }

  const vowelLetters = letters.trim();

  for (const part of vowelLetters) {
    lettersArray.push(part);
  }

  for (let j = 0; j < lettersArray.length; j++) {
    if (lettersArray[j] === ' ' && lettersArray[j + 1] === ' ') {
      lettersArray.splice(j, 1);
      j -= 1;
    }
  }

  const vowelLettersArray = lettersArray.join('').split(' ');
  let vowelLetterscount = 0;

  for (const element of vowelLettersArray) {
    if (element.length > vowelLetterscount) {
      vowelLetterscount = element.length;
    }
  }

  return vowelLetterscount;
}

// console.log(getLongestChain('hellouooo'));

function formatDate(date) {
  // write code here
  return date.split('-').reverse().join('.');
}

// console.log(formatDate('2020-02-19'));

function makeOrderList(order) {
  // write code here
  let checkRow = order.trim();

  if (checkRow === '') {
    return {};
  }

  const listArray = order.split(', ');
  const separateList = [];

  for (const element of listArray) {
    separateList.push(element.split(' '))
  }
  
  const listObject = {};

  for (const num of separateList) {
    listObject[num.splice(1).join('_')] = num.shift();
  }

  return listObject;
}
// console.log(makeOrderList('1 coca cola'));


function calculate(operands, operation) {
  // write code here
  const a = operands[0];
  const b = operands[1];
  return operation(a, b)
}

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

// console.log(calculate([2, 6], subtract));

function capitalize (word) {
  return word[0].toUpperCase() + word.slice(1);
}

function formatMessage(message, callback) {
  // write code here
  const messageArray = message.split(' ');
  const formatArray = [];
  for (const element of messageArray) {
    formatArray.push(callback(element));
  }

  return formatArray.join(' ');
}

// console.log(formatMessage('this is sparta', capitalize));
const years = [1900, 1899, 2001, 2000, 1455, 14];

function getCenturies(years) {
  // write code here
  const centuriesArray = years.map(item => Math.ceil(item / 100));

  return centuriesArray;
}

// console.log(getCenturies(years));
const charlie = {
  serial: 100,
  chipVer: 12,
  wheels: 6,
}

function createRobotCopy(robot) {
  // write code here
  const robotCopy = { ...robot };

  robotCopy.serial = +robot.serial + 1;

  return robotCopy;

}

// console.log(createRobotCopy(charlie));

const joy = { name: 'Joy' };
const lordy = { name: 'Lordy' };

function makeRobotsPair(robot1, robot2) {
  // write code here
  if (robot2) {
  robot1.partner = robot2;
  robot2.partner = robot1;
  } else {
    robot1.partner = null;
  }
  
}

// makeRobotsPair(lordy, joy);

// console.log(lordy, joy);

function factorial(rowIndex) {
  return rowIndex ? rowIndex * factorial(rowIndex - 1) : 1;
}

function getRow(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  const trianglePasArray = [];

  for (let i = 1; i < rowIndex; i++) {
    trianglePasArray.push(factorial(rowIndex)
  / (factorial(i) * factorial(rowIndex - i)));
  }

  trianglePasArray.push(1);
  trianglePasArray.unshift(1);

  return trianglePasArray;
}

// console.log(getRow(5));

function registerRobot(robot, warehouse) {
  // write code here
  warehouse.aiStaff.push(robot.id);
  robot.currentWorkPlace = warehouse;
  // write code here
}

const kobi = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
}

const parts = [
  { wheels: 6 },
  { chipVer: 16 },
  { displays: 2 },
];

function upgradeRobot(robot, parts) {

  return Object.assign(robot, ...parts)

}

// console.log(upgradeRobot(kobi, parts));

const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };

function inverseRobot(robot) {
  // write code here

  const robotArray = {};

  for (const key in robot) {
    robotArray[robot[key]] = key;
  }

  if (Object.keys(robot).length !== Object.keys(robotArray).length) {
    return null;
  }

  return robotArray;
}

// console.log(inverseRobot(kolli));

const statistics = { cleaner: 2, driver: 8, washer: 14 }

function generateChart(statistics) {
  // write code here
  const pieChart = { ...statistics };
  const circle = 360;
  let sum = 0;

  for (const key in statistics) {
    sum += statistics[key];
  }

  for (const key in pieChart) {
    pieChart[key] = Math.round(circle * pieChart[key] / sum);
  }

  return pieChart;
}
//  console.log(generateChart(statistics));

const bucket = {
  display: 20,
  wheel: 100,
  cpu: 40,
}

const products = {
  amazobot: {
    wheel: 12.5,
  },
  robozetka: {
    display: 56.2,
    cpu: 150,
  },
}

function calculateCost(bucket, products) {
  // write code here
  let sum = 0;
  const allShops = Object.values(products);
  const priceObjeckt = {};

  Object.assign(priceObjeckt, ...allShops);

  for (const key in bucket) {
    for (const prop in priceObjeckt) {
      if (key === prop) {
        sum += bucket[key] * priceObjeckt[prop];
      }
    }
  }

  return sum;
}

// console.log(calculateCost(bucket, products));



