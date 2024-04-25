
function calcMaxXP(pidgeys, candies) {
  let maxHp = 0;
  let change = candies;

  for (let i = pidgeys; i > 0; i--) {
    if (change >= 12) {
      maxHp += 500;
      change -= 11;
    } else {
      change++;
    }
  }

  return maxHp;
}

// console.log(calcMaxXP(1, 12));
// console.log(calcMaxXP(1, 63));
// console.log(calcMaxXP(63, 1));
// console.log(calcMaxXP(37, 46));

const addresses = [
  { 
    house: 5,
    street: 'John St.',
    city: 'Cheyenne',
    state: 'WY' 
  },
  { 
    house: 63,
    street: 'Sam St.',
    city: 'Logan',
    state: 'UT' 
  },
  { 
    house: 18,
    street: 'Edward St.',
    city: 'Riverton',
    state: 'WY' 
  },
];

function countAddresses(addresses) {
  const stateAdress = [];

  for (const element of addresses) {
    if (!element.state) {
      throw new Error('Wrong address');
    }

    stateAdress.push(
      {
        state: element.state, count: 1,
      });
  }

  const stateCount = [];

  while (stateAdress.length > 0) {
    const adress = stateAdress.shift();

    stateCount.push(adress);

    for (let i = 0; i < stateAdress.length; i++) {
      if (stateAdress[i].state === adress.state) {
        adress.count++;
        stateAdress.splice(i, 1);
        i--;
      }
    }
  }

  return stateCount;
}
//  console.log(countAddresses(addresses));


function createCurrying(func, ...args) {
  const help = func;
  let helpArray = args;

  return function curried(...params) {
    const unionArray = helpArray.concat(params)
    helpArray = helpArray.splice(0);

    if (unionArray.length >= help.length) {
      return help.apply(this, unionArray);
    } else {
      return function(...args2) {
        return curried.apply(this, unionArray.concat(args2));
      }
    }
  };
}

function add(x, y, z) {
  return x + y + z;
}

// const curriedAdd = createCurrying(add);
// console.log(createCurrying(add)(-2) (10, 15)) //=== 6
// console.log(createCurrying(add)(-2)(4)(3)) //=== 6

function getFlaps(linesBefore, linesAfter) {
  const dispCoupArray = [];
  const displayRow = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';

  for (let d = 0; d < linesBefore.length; d++) {
    const firstWord = linesBefore[d];
    const secondWord = linesAfter[d];

    const difArray = [];

    for (let i = 0; i < firstWord.length; i++) {
      difArray.push(displayRow.indexOf(secondWord[i])
       - displayRow.indexOf(firstWord[i]));
    }

    const plusminusArray = [];

    for (const number of difArray) {
      plusminusArray.push(number
       - plusminusArray.reduce((sum, current) => sum + current, 0));
    }

    const rowArray = [];

    for (const num of plusminusArray) {
      let element = num;

      while (element < 0) {
        element += displayRow.length;
      }

      rowArray.push(element);
    }

    dispCoupArray.push(rowArray);
  }

  return dispCoupArray;
}

//  console.log(getFlaps(['CAT'], ['DOG']));
//  console.log(getFlaps(['COKE'], ['SODA']));
//  console.log(getFlaps(['ABC123'], ['XYZ987']));
//  console.log(getFlaps(['KEEP ME'], ['KEEP ME']));
//  console.log(getFlaps(['WHERE ARE YOU?'], ['I AM FAR AWAY!']));

function chooseBestSum(maxDistance, k, list) {
  if (k > list.length) {
    return null;
  }
  //Знаходимо число можливих комбінацій
  const n = list.length;

  function addnum(num) {
    let factorialNumber = 1;

    for (let i = 1; i <= num; i++) {
      factorialNumber *= i;
    }

    return factorialNumber;
  }

  const numberComboUp = addnum(n);
  const numberComboDown = addnum(k);
  const difCombo = addnum(n - k);

  const quantity = numberComboUp / (numberComboDown * difCombo);
  //quantity - максимальна кількість комбінацій

  //генеруємо за допомогою рандомайзера усі можливі комбінації
  function randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(rand);
  }

  const combinatinArray = [];
  const comboNumArray = [];

  while (combinatinArray.length < quantity) {
    const smallArray = [];

    while (smallArray.length < k) {
      const number = randomInteger(1, n);

      if (!smallArray.includes(number)) {
        smallArray.push(number);
      }
    }

    const part = smallArray.sort().join('');

    if (!combinatinArray.includes(part)) {
      combinatinArray.push(part);
      comboNumArray.push(smallArray);
    }
  }
  //comboNumArray - масив можливих комбінацій індексів від 0 до n

  //distanceArray - масив усіх можливих відстаней
  const distanceArray = comboNumArray.map(function(item) {
    let sum = 0;

    for (const part of item) {
      sum += list[part - 1];
    }

    return sum;
  });
  //створюємо масив summaryArray, фільтруємо, сортуємо і повертаємо найбільшу відстань або null
  const summaryArray = distanceArray
    .filter(item => item <= maxDistance)
    .sort((a, b) => b - a);

  return summaryArray[0] || null;
}

// console.log(chooseBestSum(1000, 3, [314, 470, 65, 162, 129, 30, 111]))// === 946 // 314 + 470 + 162, найближча сума до 1000
// console.log(chooseBestSum(264, 2, [184, 49, 143, 298, 94, 360, 61, 151, 59]))// === 245 // 184 + 61, найближча сума до 264
// console.log(chooseBestSum(347, 4, [260, 429, 194]))// === null // list.length < k
// console.log(chooseBestSum(214, 2, [333, 332, 158, 238]))// === null // немає комбінації двох відстаней, сума яких менша або рівна 214
// console.log(chooseBestSum(1825, 1, [480, 165, 299, 25, 108]))// === 480
// console.log(chooseBestSum(280, 2, [126, 344, 371, 163, 184]))// === null

function zero(action) {
  if (!action) {
    return 0;
  }

  return calculate(0, action);
}

function one(action) {
  if (!action) {
    return 1;
  }

  return calculate(1, action);
}

function two(action) {
  if (!action) {
    return 2;
  }

  return calculate(2, action);
}

function three(action) {
  if (!action) {
    return 3;
  }

  return calculate(3, action);
}

function four(action) {
  if (!action) {
    return 4;
  }

  return calculate(4, action);
}

function five(action) {
  if (!action) {
    return 5;
  }

  return calculate(5, action);
}

function six(action) {
  if (!action) {
    return 6;
  }

  return calculate(6, action);
}

function seven(action) {
  if (!action) {
    return 7;
  }

  return calculate(7, action);
}

function eight(action) {
  if (!action) {
    return 8;
  }

  return calculate(8, action);
}

function nine(action) {
  if (!action) {
    return 9;
  }

  return calculate(9, action);
}

function calculate(num, subArray) {
  switch (subArray[0]) {
    case 'plus':
      return num + subArray[1];
    case 'minus':
      return num - subArray[1];
    case 'times':
      return num * subArray[1];
    case 'dividedBy':
      return Math.floor(num / subArray[1]);
  }
}

function plus(num) {
  return ['plus', num];
}

function minus(num) {
  return ['minus', num];
}

function times(num) {
  return ['times', num];
}

function dividedBy(num) {
  return ['dividedBy', num];
}

// console.log(five(plus(three())))
// console.log(nine(dividedBy(four())))
// console.log(nine(dividedBy(five())))
// console.log(three(times(four())))
// console.log(eight(minus(one())))


function getWinner(moves) {
  const nullArray = [];
  const xArray = [];
//розділяємо ходи гравців, якщо в обох гравців менше, ніж по 4 ходи не виграв ніхто
  for (const move of moves) {
    if (nullArray.length === xArray.length) {
      nullArray.push(move.join(''));
    } else {
      xArray.push(move.join(''));
    }
  }

  if (nullArray.length < 4) {
    return 'No winner';
  }

  const coordArray = [];
// шукаємо комбінації координат
  for (let i = 0; i <= 333; i++) {
    let countOne = 0;
    const nums = '0123';

    for (const n of '' + i) {
      if (!nums.includes(n)) {
        countOne++;
      }
    }

    if (countOne === 0) {
      coordArray.push(i);
    }
  }

  const comboArray = [];
//додаємо послідовні координати
  for (let i = 0; i < coordArray.length; i += 4) {
    comboArray.push(coordArray.slice(i, i + 4));
  }

  const helpArray = [];

  function addCombo(firstNumber, diff, step) {
    const combination = [firstNumber];

    while (combination.length < 4) {
      combination.push(combination[combination.length - 1] + diff);
    }

    helpArray.push(combination);
    helpArray.push(combination.map(item => step + item));
    helpArray.push(combination.map(item => 2 * step + item));
    helpArray.push(combination.map(item => 3 * step + item));
  }

  addCombo(3, 9, 100);
  addCombo(0, 11, 100);
  addCombo(0, 101, 10);
  addCombo(3, 99, 10);
  addCombo(0, 10, 100);
  addCombo(0, 100, 10);
  addCombo(1, 100, 10);
  addCombo(1, 10, 100);
  addCombo(2, 100, 10);
  addCombo(2, 10, 100);
  addCombo(3, 100, 10);
  addCombo(3, 10, 100);

  const someArray = comboArray.concat(helpArray);
// переводимо числа в рядки
  const finalArray = someArray.map(function(nums) {
    const strArray = [];

    for (const element of nums) {
      let check = '';

      if (element < 10) {
        check = '00' + element;
      }

      if (element >= 10 && element < 100) {
        check = '0' + element;
      }

      if (element >= 100) {
        check += element;
      }
      strArray.push(check);
    }

    return strArray;
  });
//додаємо виграшні діагоналі, бо залежності для них не знайшов
  finalArray.push(['003', '112', '221', '330'],
    ['300', '211', '122', '033'], ['333', '222', '111', '000'],
    ['303', '212', '121', '030']);

  finalArray.push(['000', '110', '220', '330'],
    ['001', '111', '221', '331'], ['002', '112', '222', '332'],
    ['003', '113', '223', '333']);

  finalArray.push(['300', '210', '120', '030'],
    ['301', '211', '121', '031'], ['302', '212', '122', '032'],
    ['303', '213', '123', '033']);

  let count = 6;
// шукаємо координати з кожного масиву у загальному,
//у якому знаходимо першим 4 наявних, той виграє. Інакше - переможця немає
  for (let j = 3; j < nullArray.length; j++) {
    const zeroArray = nullArray.slice(0, j);

    zeroArray.push(nullArray[j]);
    count++;

    for (const params of finalArray) {
      let countEqual = 0;

      for (const part of params) {
        if (zeroArray.includes(part)) {
          countEqual++;
        }
      }

      if (countEqual === 4) {
        return `O wins after ${count} moves`;
      }
    }

    const ixArray = xArray.slice(0, j);

    ixArray.push(xArray[j]);
    count++;

    for (const par of finalArray) {
      let countXqual = 0;

      for (const art of par) {
        if (ixArray.includes(art)) {
          countXqual++;
        }
      }

      if (countXqual === 4) {
        return `X wins after ${count} moves`;
      }
    }
  }

  return 'No winner';
}

const moves = [ 
  [ 3, 0, 0 ],
  [ 0, 0, 0 ],
  [ 3, 3, 3 ],
  [ 1, 1, 2 ],
  [ 2, 3, 0 ],
  [ 1, 2, 1 ],
  [ 0, 3, 1 ],
  [ 3, 1, 1 ],
  [ 1, 3, 1 ],
  [ 1, 2, 2 ],
  [ 3, 0, 3 ],
  [ 1, 1, 1 ],
  [ 1, 0, 2 ],
  [ 0, 2, 0 ],
  [ 3, 2, 3 ],
  [ 2, 1, 2 ],
  [ 1, 0, 3 ],
  [ 1, 2, 3 ],
  [ 0, 1, 2 ],
  [ 1, 1, 3 ],
  [ 0, 3, 3 ],
  [ 3, 2, 1 ],
  [ 3, 0, 1 ],
  [ 0, 2, 2 ],
  [ 2, 2, 2 ],
  [ 2, 1, 1 ],
  [ 2, 0, 2 ],
  [ 3, 2, 0 ],
  [ 2, 1, 0 ],
  [ 2, 2, 1 ],
  [ 2, 0, 1 ],
  [ 2, 2, 0 ],
  [ 1, 3, 3 ],
  [ 0, 2, 1 ],
  [ 3, 2, 2 ],
  [ 2, 3, 3 ],
];

// console.log(getWinner(moves));

function calcScore(moves) {
  const fieldArray = [];
  let countField = 3;
//перевіряємо на скільки клітинок ігрове поле
  if (moves.length === 24) {
    countField = 4;
  }

  if (moves.length === 40) {
    countField = 5;
  }

  if (moves.length === 60) {
    countField = 6;
  }

  if (moves.length === 84) {
    countField = 7;
  }
// створюємо масив з індексами крайніх точок "паличок"
  let count = 0;

  for (let i = 0; i < countField; i++) {
    const rowArray = [];

    while (rowArray.length < countField) {
      rowArray.push(count);
      count++;
    }

    fieldArray.push(rowArray);
  }
//створюємо масив усіх виграшних комбінацій "паличок"
  const pointsCombo = [];

  for (let j = 0; j < countField - 1; j++) {
    for (let k = 0; k < countField - 1; k++) {
      pointsCombo.push([fieldArray[j][k], fieldArray[j][k + 1],
        fieldArray[j + 1][k], fieldArray[j + 1][k + 1]]);
    }
  }
//переводимо комбінації у рядкове представлення
  const comboArray = pointsCombo.map(function(item) {
    return ['' + item[0] + item[1], '' + item[0] + item[2],
      '' + item[1] + item[3], '' + item[2] + item[3]];
  });
//створюємо рахунки для двох гравців
  let firstPlayerCount = 0;
  let secondPlayerCount = 0;
//створюємо масив (у який додаватимемо ходи) та лічильник виграшних ходів. Хід розпочинає перший гравець
  const moveArray = [];
  let countNum = 0;
  let moveCount = 'firstPlayer';
//запускаємо цикл: додаємо ходи та перевіряємо, чи хтось з гравців робить виграшний хід
  while (moves.length > 0) {
    const checkCount = countNum; // створюємо перевірочний лічильник, щоб знати, коли хід залишається у гравця

    moveArray.push(moves
      .shift()
      .sort((a, b) => a - b).join(''));

    for (let n = 0; n < comboArray.length; n++) {
      if (moveArray.includes(comboArray[n][0])
      && moveArray.includes(comboArray[n][1])
      && moveArray.includes(comboArray[n][2])
      && moveArray.includes(comboArray[n][3])) {
        countNum++;
        comboArray.splice(n, 1);
        n--;
// у разі виграшного ходу, лічильник відповідного гравця збільшується, також збільшується лічильник виграшних ходів
        if (moveCount === 'firstPlayer') {
          firstPlayerCount++;
        } else {
          secondPlayerCount++;
        }
      }
    }
//після завершення циклу перевірки у разі відсутності виграшного ходу (коли лічильник виграшних ходів не змінився) хід переходить до іншого гравця
    if (checkCount === countNum) {
      if (moveCount === 'firstPlayer') {
        moveCount = 'secondPlayer';
      } else {
        moveCount = 'firstPlayer';
      }
    }
  }

  return [firstPlayerCount, secondPlayerCount];
}

const move = [
  [0, 1],
  [7, 8],
  [1, 2],
  [6, 7],
  [0, 3],
  [8, 5],
  [3, 4],
  [4, 1],
  [4, 5],
  [2, 5],
  [3, 6],
  [7, 4]
];

console.log(calcScore(move));


