const smallArray = [15, 2, 0, 21, 7];

const compareAsStrings = (a, b) => {

  if (String(a) > String(b)) {
    return 1;
  } 
  if (String(a) === String(b)) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here

    for (let i = 1; i < this.length; i++) {
      let a = this[i - 1];
      let b = this[i];
      if (compareFunction(a, b) > 0 ) {
        this[i] = a;
        this[i - 1] = b;
        i = 0
      } 
    }
    return this;

  }
}

applyCustomSort();


// console.log(smallArray.sort((a, b) => a.localeCompare(b)))
// console.log(smallArray.sort2((a, b) => { return a - b }))

function getComplementaryColor(hexColor) {
  if (typeof (hexColor) !== 'string') {
    throw new Error();
  }

  if (hexColor.length > 6) {
    throw new Error();
  };

  const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const hexColorArray = (hexColor.toUpperCase()).split('');

  for (const item of hexColorArray) {
    if (!hexArray.includes(item)) {
      throw new Error();
    }
  }

  let countHex = hexColorArray.length;

  while (countHex !== 6) {
    hexColorArray.unshift('0');
    countHex++;
  }

  const complementaryArray = ['#'];

  for (let i = 0; i < hexColorArray.length; i++) {
    for (let j = 0; j < hexArray.length; j++) {
      if (hexArray[j] === hexColorArray[i]) {
        complementaryArray.push(hexArray[15 - j]);
      }
    }
  }

  return complementaryArray.join('');
}

// console.log(getComplementaryColor('293'));


const mainCore = {
  getMainInfo() {
    // write code here
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`
  },
  getAdditionalInfo() {
    // write code here
    return `Update version: ${this.softwareVersion}`
  },
  updateRobot(updateVersion) {
    // write code here
    this.softwareVersion = updateVersion;
    return `${this.name} updated to ${updateVersion}`
  },
};

const navigationCore = {
  // write code here
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`
  },

  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  }
}

const movementCore = {
  // write code here
    moveForward(step = 1) {
    this.coords.y += step;
  },

  moveBack(step = 1) {
    this.coords.y -= step;
  },

  moveLeft(step = 1) {
    this.coords.x -= step;
  },

  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
  // write code here
};
Object.setPrototypeOf(kerbin, movementCore);
Object.setPrototypeOf(movementCore, navigationCore)
Object.setPrototypeOf(navigationCore, mainCore)


// console.log(kerbin.getMainInfo());
// console.log(kerbin.getAdditionalInfo());
// console.log(kerbin.getCoords());
// console.log(kerbin.updateRobot(23.51));
// console.log(kerbin);
// console.log(kerbin.setTargetCoords(5, 3));
// console.log(kerbin);

const date = '1997-02-18';
const fromFormat = ['YYYY', 'MM', 'DD', '-'];
const toFormat = ['DD', 'MM', 'YY', '.']

function formatDate(date, fromFormat, toFormat) {
  // write code here
  const dateArray = date.split(fromFormat[fromFormat.length - 1]);
  const dateObject = {};

  for (let i = 0; i < fromFormat.length - 1; i++) {
    dateObject[fromFormat[i]] = dateArray[i];
  };

  const shortYear = 'YY';
  const fullYear = 'YYYY';
  const limit = '30';
  const beforeLimit = '20';
  const aboveLimit = '19';

  if (!(shortYear in dateObject)) {
    dateObject[shortYear] = dateObject[fullYear].slice(2);
  };

  if (!(fullYear in dateObject)) {
    dateObject[fullYear] = dateObject[shortYear] < limit
      ? beforeLimit + [dateObject[shortYear]]
      : aboveLimit + [dateObject[shortYear]];
  };

  const convertArray = [];

  for (let j = 0; j < toFormat.length - 1; j++) {
    convertArray.push(dateObject[toFormat[j]]);
  }

  return convertArray.join(toFormat[toFormat.length - 1]);
}

// console.log(formatDate(date, fromFormat, toFormat));

function Robot(name) {
  // write code here
  this.name = name;

  this.coords = {
    x: 0,
    y: 0,
  };
}

Robot.prototype.goForward = function() {
  this.coords.y += 1;
};

Robot.prototype.goBack = function() {
  this.coords.y -= 1;
};

Robot.prototype.goRight = function() {
  this.coords.x += 1;
};

Robot.prototype.goLeft = function() {
  this.coords.x -= 1;
};

// const robert = new Robot('robert');
// console.log(robert);
// robert.goForward()
// console.log(robert);
// robert.goRight()
// console.log(robert);

function makeInfinityAdder(num) {
  // write code here
  let sumCount = 0;

  function sumAll(element) {
    if (element === undefined) {
      return sumCount;
    }
    sumCount += element;
    return sumCount;
  }

  let allSum = sumAll(num);

  function countSum(num) {
    if (num === undefined) {
      let result = sumCount;
      sumCount = 0;
      return result;
    }
    allSum += sumAll(num);
    return countSum;
  }

  countSum.toString = function() {
    return sumCount;
  };

  return countSum;
}

function makeRobot(name, wheels, version) {
  // write code here
  const robot = {
    name: name,
    wheels: wheels,
    version: version,
    coords: {
      x: 0,
      y: 0,
    },

    get info() {
      return `name: ${this.name},`
      + ` chip version: ${this.version},`
      + ` wheels: ${this.wheels}`;
    },

    get location() {
      return `${this.name}: `
      + `x=${this.coords.x}, `
      + `y=${this.coords.y}`;
    },

    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }

      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }

      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }

      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }

      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },
  };

  return robot;
}

const mike = makeRobot('mike', 25, 231)
// mike.goForward().goLeft().goLeft(2)
// console.log(mike.info);
// const ian = makeRobot('ian', 21, 245)
// ian.goForward().goLeft()
// console.log(ian);
// ian.evacuate();
// console.log(ian.location);

function makeCalculator() {
  // write code here

  const calculatorObject = {
    result: 0,

    add(param) {
      calculatorObject.result += param;
    },
  
    subtract(param) {
      calculatorObject.result -= param;
    },
  
    multiply(param) {
      calculatorObject.result *= param;
    },
  
    divide(param) {
      if (param === 0) {
        calculatorObject.result = Infinity;
      } else {
      calculatorObject.result /= param;
      }
    },

    reset() {
      this.result = 0;
      return this;
    },

    operate(callback, num) {
      callback(num);
     
      return this;
    },

    }

  return calculatorObject;

}


const calculator = makeCalculator();
calculator.operate(calculator.add, 21)
// console.log(calculator.result) //=== 21

// calculator.reset()
// console.log(calculator.result) // === 0

// calculator
// .operate(calculator.add, 10)
// .reset()
// .operate(calculator.subtract, 20)
// .operate(calculator.divide, 5)
// .operate(calculator.multiply, 7)
// console.log(calculator.result); //=== -28
// const calc = makeCalculator();
// calc.operate(calc.add, 5)
// console.log(calc.result) //=== 5

function makeDescOrder(num) {
  // write code here
    return +(String(num)).split('').sort((a, b) => (b - a)).join('');
}
// console.log(makeDescOrder(1450263));



