const kobi = {
  wheels: 10,
  chipVersion: 11,
  serialNumber: 100
};

function makeTool(part) {
  // write code here
  return function deletePart(robot) {
    const robotWithoutPart = {};

    for (const key in robot) {
      if (key !== part) {
        robotWithoutPart[key] = robot[key];
      }
    }

    return robotWithoutPart;
  };
}
const removeWheels = makeTool('wheels');
const removeChip = makeTool('chipVersion');

const robotWithoutWheels = removeWheels(kobi);

// console.log(removeWheels(kobi));
// console.log(kobi);
// console.log(removeChip(kobi))



function makePackage(connectionsLimit) {
  // write code here
    let connectionCount = connectionsLimit;
    return function Limit () {
      if (connectionCount > 0) {
      connectionCount--;
      return `${connectionCount} connections left`;

      } else {
      connectionCount--;
      return 'You reached the connections limit!';
      }
   
  }
}

// const connect = makePackage(3);
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());
// console.log(connect());


function MagicFunction(...param) {
  function sumAll(...elements) {
    let magicCount = 0;

    for (const element of elements) {
      if (+element) {
        magicCount += +element;
      }
    }

    return magicCount;
  }

  let magicSum = sumAll(...param);

  function countSum(...others) {
    magicSum += sumAll(...others);

    return countSum;
  }

  countSum.toString = function() {
    return magicSum;
  };

  return countSum;
}

// console.log(MagicFunction(1)(2, 3)(3));

lights = [0, 1, 1, 0, 1, 1];
n = 2;

function switchLights(lights, n) {
  let startArray = [...lights];
  let finalArray = [];
  let count = n;

  while (count > 0) {

    if (startArray[startArray.length - 1] === 0) {
      finalArray.push(startArray[0])
    } else {
      if (startArray[0] === 0) {
        finalArray.push(1)
      } else {
        finalArray.push(0)
      }
    }

    for (let i = 0; i < startArray.length; i++) {
      if (startArray[i] === 0) {
        finalArray.push(startArray[i + 1]);
      } else {
        if (startArray[i + 1] === 0) {
          finalArray.push(1)
        } else {
          finalArray.push(0)
        }
      }
    }

    finalArray.pop();
    startArray = [];
    startArray = [...finalArray];
    finalArray = [];
    count--;

  }

  return startArray;

}
//  console.log(switchLights(lights, n));
const row = 'RBRGBRB';

function getLastColor(row) {
  let lettersArray = row.split('');
  let finalArray = [];
  let count = row.length;

  while (count > 1) {
    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i] + lettersArray[i + 1] === 'RR'
    || lettersArray[i] + lettersArray[i + 1] === 'GB'
    || lettersArray[i] + lettersArray[i + 1] === 'BG') {
        finalArray.push('R');
      } else if (lettersArray[i] + lettersArray[i + 1] === 'GG'
    || lettersArray[i] + lettersArray[i + 1] === 'RB'
    || lettersArray[i] + lettersArray[i + 1] === 'BR') {
        finalArray.push('G');
      } else if (lettersArray[i] + lettersArray[i + 1] === 'BB'
    || lettersArray[i] + lettersArray[i + 1] === 'GR'
    || lettersArray[i] + lettersArray[i + 1] === 'RG') {
        finalArray.push('B');
      }
    }
    lettersArray = [];
    lettersArray = [...finalArray];
    finalArray = [];
    count--;
  }

  return lettersArray[0];
}

// console.log(getLastColor(row));

function makeSpyListener() {
  // write code here
  let dataArray = [];

  const spyListener = (phrase) => {
    if (phrase === undefined) {
      return dataArray;
    } else {
      dataArray.push(phrase);
    }
  };

  spyListener.clear = () => {
    dataArray = [];

    return 'Transferring data... Deleting data... Clear!';
  };

  return spyListener;
}

// const listener = makeSpyListener();
// listener();
// listener(`Mate Robot Factory is weird`);
// listener(`It’s a spy robot!!! Catch him!`);
// console.log(listener());
// listener.clear();
// console.log(listener());

function makeRandomizer(numbers) {
  // write code here
  const a = numbers[0];
  const b = numbers[1];
  const uniqueArray = [];
  let uniqueCount = b - a + 1;

  function randomInteger() {
    if (uniqueCount === 0) {
      return null;
    }

    const rand = Math.floor(a + Math.random() * (b + 1 - a));

    if (!uniqueArray.includes(rand)) {
      uniqueArray.push(rand);
      uniqueCount--;

      return rand;
    } else {
      for (let i = a; i <= b; i++) {
        if (!uniqueArray.includes(i)) {
          uniqueArray.push(i);
          uniqueCount--;

          return i;
        }
      }
    }
  }

  return randomInteger;
}

// const getRandom = makeRandomizer([1, 4]);
// console.log(getRandom());
// console.log(getRandom());
// console.log(getRandom());
// console.log(getRandom());
// console.log(getRandom());

function makeRobotAccountant() {
  // write code here
  let count = 0;
  function sum(a) {
    count++;
    if (count > 3 &&
      count % 2 === 0) {
        return function(b) {
          return 'Bzzz... Error!'}
      }
    return (b) => a + b;
  }
  return sum
}

// const robot = makeRobotAccountant();
// console.log(robot(5)(6)) //=== 11;
// console.log(robot(1)(3)) //=== 4;
// console.log(robot(6)(6)) //=== 12;
// console.log(robot(55)(16)) //=== 'Bzzz... Error!';
// console.log(robot(55)(16)) //=== 71;
// console.log(robot(55)(17)) //=== 'Bzzz... Error!';
// console.log(robot(5)(17)) //=== 22;
// console.log(robot(1)(1)) //=== 'Bzzz... Error!';


function makeWarehouse(goods = []) {
  // write code here
  let totalWeight = 0;
  let goodsCount = 0;
  let averageWeight = 0;
  const totalObject = {};

  function addProperties() {
    totalObject.totalWeight = totalWeight;
    totalObject.averageWeight = averageWeight;
  }

  function sumAll(weights) {
    weights.forEach(element => {
      totalWeight += element;
    });

    goodsCount += weights.length;
    averageWeight = Math.round(totalWeight / goodsCount);
    addProperties();
  }

  if (goods.length > 0) {
    sumAll(goods);
  } else {
    addProperties();
  }

  function statistic(...plusWeight) {
    if (plusWeight.length === 0) {
      return totalObject;
    } else {
      sumAll(plusWeight);
    }
  }

  return statistic;
}

// const firstWarehouse = makeWarehouse([10, 20])
// console.log(firstWarehouse()); // { totalWeight: 30, averageWeight: 15 }

// firstWarehouse(10, 20, 30, 40, 10, 10);
// firstWarehouse(56, 44);

// console.log(firstWarehouse()); // { totalWeight: 250, averageWeight: 25 }

// const secondWarehouse = makeWarehouse([10])
// console.log(secondWarehouse()) // { totalWeight: 10, averageWeight: 10 }

// console.log(firstWarehouse()) // { totalWeight: 250, averageWeight: 25 }

function makeSecret(secret, password) {
  // write code here
  let secretPhrase = secret;
  let correctPassword = password;
  let count = 0;
  const wrongRhrase = 'Wrong password!';
  const notSecretRhrase = 'Absolutely not a secret thing';

  function storage() {
    return notSecretRhrase;
  }

  storage.getSecret = (validPassword) => {
    if (count >= 3) {
      return null;
    }

    if (validPassword === correctPassword) {
      count = 0;

      return secretPhrase;
    } else {
      count++;

      return wrongRhrase;
    }
  };

  storage.setSecret = (newSecret, newPassword) => {
    secretPhrase = newSecret;
    correctPassword = newPassword;
    count = 0;
  };

  return storage;
}

const storage = makeSecret('Santa exists!', 'qwerty')
console.log(storage()) //=== 'Absolutely not a secret thing'

console.log(storage.getSecret('qwerty')) //=== 'Santa exists!'

console.log(storage.getSecret()) //=== 'Wrong password!'
console.log(storage.getSecret('12345')) //=== 'Wrong password!'
console.log(storage.getSecret('qwerty')) //=== 'Santa exists!'

console.log(storage.getSecret(1)) //=== 'Wrong password!'
console.log(storage.getSecret(2)) //=== 'Wrong password!'
console.log(storage.getSecret(3)) //=== 'Wrong password!'
console.log(storage.getSecret(4)) //=== null
console.log(storage.getSecret('qwerty')) //=== null

storage.setSecret('Mate academy is awesome!', 'qwe123')

console.log(storage.getSecret('qwerty')) //=== 'Wrong password!'
console.log(storage.getSecret()) //=== 'Wrong password!'
console.log(storage.getSecret('qwe123')) //=== 'Mate academy is awesome!'
