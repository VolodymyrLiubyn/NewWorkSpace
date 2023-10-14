const people = [
  { sex: 'm', name: 'Jan', born: 1883, died: 1964, mother: 'Mia', father: 'Mike' },
  { sex: 'f', name: 'Mia', born: 1724, died: 1794, mother: 'Liana', father: 'Peter' },
  { sex: 'm', name: 'Lee', born: 1983, died: undefined, mother: 'Mari', father: 'John' },
  { sex: 'm', name: 'Peter', born: 1923, died: 1995, mother: 'Elen', father: 'Mike'},
  { sex: 'm', name: 'Jone', born: 1683, died: 1764, mother: 'Elen', father: 'Mike' },
  { sex: 'f', name: 'Jane', born: 1987, died: undefined , mother: 'Elen', father: 'Mike'},
  { sex: 'f', name: 'Emma', born: 1989, died: undefined, mother: 'Margo', father: 'John'},
  { sex: 'f', name: 'Anna', born: 1988, died: undefined, mother: 'Janifer', father: 'Mike'},
  { sex: 'f', name: 'Janifer', born: 1893, died: 1984, mother: 'Mary', father: 'Joseph' },
]

function calculateAverageDif(difArray) {
  const now = new Date();
  const year = now.getFullYear();
  const ageArray = difArray.map(item => item.died - item.born
  || year - item.born);
  const result = ageArray.reduce((sum, current) => sum + current, 0);

  return result / difArray.length;
}

function calculateMenAverageAge(people, century) {

  let menArray = people.filter(item => item.sex === 'm');

  if (typeof(century) === "number") {
    menArray = menArray.filter(item => Math.ceil(item.died / 100) === century)
  }

  if (menArray.length < 1) {
    return 0;
  }

  return calculateAverageDif(menArray);

}

// console.log(calculateMenAverageAge(people, 20));

function calculateWomenAverageAge(people, withChildren) {
  // write code here
  let womenArray = people.filter(item => item.sex === 'f');

  const motherNameString = people.map(item => item.mother).join(' ');

  if (withChildren === true) {
    womenArray = womenArray.filter(item => motherNameString.includes(item.name)
    === true);
  }

  if (womenArray.length < 1) {
    return 0;
  }

  return calculateAverageDif(womenArray);
}
// console.log(calculateWomenAverageAge(people, true));

function calculateMotherAverageAge(people, onlyWithSon) {
  // write code here
  const motherString = people.map(item => item.mother).join(' ');
  const motherArray = people.filter(item => motherString.includes(item.name)
  === true && item.sex === 'f');

  const motherInString = motherArray.map(item => item.name).join(' ');
  let childrenArray
  = people.filter(item => motherInString.includes(item.mother));

  if (onlyWithSon === true) {
    childrenArray = childrenArray.filter(item => item.sex === 'm');
  }

  if (childrenArray.length < 1 || motherArray.length < 1) {
    return 0;
  }

  const difAgeArray = [];

  for (const child of childrenArray) {
    for (const mother of motherArray) {
      if (child.mother === mother.name) {
        difAgeArray.push(child.born - mother.born);
      }
    }
  }

  const result = difAgeArray.reduce((sum, current) => sum + current, 0);

  return result / childrenArray.length;
}

// console.log(calculateMotherAverageAge(people));

const actions = [
  {
   type: 'addProperties',
   extraData: {
     name: 'Jim',
     hello: 'world',
   }
 },
 {
   type: 'removeProperties',
   keysToRemove: ['bar', 'hello'],
 },
 {
   type: 'addProperties',
   extraData: { another: 'one' },
 }
// {
//   type: 'clear',
// }
];

const state = { foo: 'bar', bar: 'foo' };

function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      actions[i].keysToRemove.forEach((element) => {
        delete state[element];
      });
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
  return state;
}

//  console.log(transformState(state, actions));

const customer = {
  money: 140, // залишок грошей на рахунку клієнта 
  vehicle: {
    maxTankCapacity: 40, // Об'єм бака
    fuelRemains: 14, // Залишок палива у баку
  }
};

function fillTank(customer, fuelPrice, amount) {
  // write code here
  const maxVolume = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  
  let liters = Math.floor(10 * amount) / 10;

  if (amount > maxVolume || amount === undefined){
    liters = maxVolume;
  }

  const maxLitters = Math.floor(10 * customer.money / fuelPrice) / 10;

  if (liters > maxLitters) {
    liters = maxLitters;
  }

  if (liters < 2) {
    liters = 0;
  }
  customer.money -= Math.round(100 * liters * fuelPrice) / 100;
  customer.vehicle.fuelRemains += liters;

  return customer;

}

// console.log(fillTank(customer, 10, 9.47));

let box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';
let cost = 124; // 100 ≤ cost ≤ 1000


function getTofu(cost, box) {
  // write code here
  const boxArray = box.split(' ');
  const monCost = 1;
  const monteCost = 60;
  let monCount = 0;
  let monmeCount = 0;

  boxArray.forEach(item => {
    if (item === 'mon') {
      monCount++;
    }

    if (item === 'monme') {
      monmeCount++;
    }
  });

  const totalMoney = monCost * monCount + monteCost * monmeCount;

  if (totalMoney < cost) {
    return 'leaving the market';
  }

  let monmeAmount = monmeCount;

  while (monmeAmount * monteCost > cost) {
    monmeAmount--;
  }

  const monAmount = cost - monmeAmount * monteCost;

  if (monCount < monAmount) {
    return 'leaving the market';
  }

  const sumCoins = monmeAmount + monAmount;

  return [monCount, monmeCount, totalMoney, sumCoins];
}
// console.log(getTofu(cost, box));



function isCouponValid(enteredCode, correctCode, currentDate, expirationDate) {
  // write code here
  if (enteredCode === correctCode
    && Date.parse(expirationDate) >= Date.parse(currentDate)) {
      return true
    }
  return false
}
// console.log(isCouponValid("123", "123", "July 9, 2020", "July 8, 2020"));

function formatKey(key, k) {
  const rowKey = key.toUpperCase();
  let rowForArray = '';

  for (const part of rowKey) {
    if (part !== '-') {
      rowForArray += part;
    }
  }

  const keyArray = Array.from(rowForArray);
  const formatArray = [];
  let count = keyArray.length;

  while (count > k) {
    formatArray.unshift(keyArray.splice(-k, k).join(''));
    count -= k;
  }

  if (keyArray.length > 0) {
    formatArray.unshift(keyArray.join(''));
  }

  return formatArray.join('-');
}

// console.log( formatKey('5F3Z-2e-9-w', 4));

// numbers.pop = function() {
//   // write code here
//   const numbers = this;

//   if (numbers.length === 0) {
//     return undefined;
//   }

//   let remove;

//   for (let i = 0; i < numbers.length; i++) {
//     remove = numbers[i];
//   }
//   numbers.length -= 1;

//   return remove;
// };

// numbers.pop = function() {
//   if (this.length === 0) {
//     // No need to remove elements
//     return;
//   }

//   // Save the last element to return it later
//   const removedElement = this[this.length - 1];

//   // Shorten an array (old last element is not available any more)
//   this.length -= 1;

//   return removedElement;
// };

function sumInRow(n) {
  // write code here
  if (n <= 0 || n === undefined) {
    return 0;
  }

  return n ** 3;
}
// console.log(sumInRow(6));

function findDuplicates(numbers) {
  // write code here
  const duplicateArray = [];
  const workArray = [...numbers];
  const someArray = [];
  let countArray = workArray.length;

  while (countArray > 0) {
    duplicateArray.unshift(workArray.shift());

    if (duplicateArray.includes(workArray[0])) {
      someArray.push(workArray[0]);
    }

    countArray--;
  }

  const finalArray = [];

  for (const element of someArray) {
    if (!finalArray.includes(element)) {
      finalArray.push(element);
    }
  }

  return finalArray;
}

// console.log(findDuplicates([-1, 0, 3, 5, 0, 3, 3, -1]));

function rgbToHex(r, g, b) {
  const hexObject = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  const enterArray = [r, g, b];
  const rgbArray = [];

  for (const color of enterArray) {
    if (color < 0) {
      rgbArray.push(0);
    } else if (color > 255) {
      rgbArray.push(255);
    } else {
      rgbArray.push(color);
    }
  }

  let hexString = '';
  const numSixteen = 16;

  rgbArray.forEach(item => {
    const division = item / numSixteen;
    const firstNumber = Math.floor(division);

    hexString += hexObject[firstNumber];

    const secondNumber = (division - firstNumber) * numSixteen;

    hexString += hexObject[secondNumber];
  });

  return hexString;
}

// console.log(rgbToHex(128, 128, -128));

function getMove(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      board[i] = 'X';

      const victory = 'XXX';

      if (board[0] + board[1] + board[2] === victory
      || board[0] + board[3] + board[6] === victory
      || board[0] + board[4] + board[8] === victory
      || board[1] + board[4] + board[7] === victory
      || board[2] + board[5] + board[8] === victory
      || board[3] + board[4] + board[5] === victory
      || board[6] + board[7] + board[8] === victory
      || board[2] + board[4] + board[6] === victory) {
        return i;
      } else {
        board[i] = '';
      }
    }
  }

  for (let j = 0; j < board.length; j++) {
    if (board[j] === '') {
      return j;
    }
  }
}

// console.log(getMove(['X', '', '', '', 'O', '', 'X', '', '0']));


