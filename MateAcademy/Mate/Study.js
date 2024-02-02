
function calculateProfit(amount, percent, period) {
  // write code here
  let sum = amount;
  
  for (let i = 1; i <= period; i++) {
  
  sum =  sum * (1 + percent/100);
  }

  return sum - amount
}


// console.log (calculateProfit(10000, 4, 1))

// console.log (calculateProfit(15000, 5, 5))


const stylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;

function convertToObject(sourceString) {
  // write your code here
    const arrayFromString = sourceString.split(';')
    const convertArray = [];
    arrayFromString.forEach(element => {
      convertArray.push(element.trim());
    });

    for(let i = 0; i < convertArray.length; i++) {
      if (convertArray[i].length === 0) {
        convertArray.splice(i, 1)
        i -= 1;
      }
    }

    const finalArray = [];
    convertArray.forEach(element => {
      finalArray.push(element.split(':'))
    })
    
    const convertObject = {}
    finalArray.forEach(element => {
      convertObject[element[0].trim()] = element[1].trim()
    })
    return convertObject;
}

// console.log(convertToObject(stylesString));

// function BaseRobot(name) {
//   this.name = name;

//   this.coords = {
//     x: 0,
//     y: 0,
//   };
//   // write code here
// }

// BaseRobot.prototype.goForward = function() {
//   this.coords.y += 1;
// };

// BaseRobot.prototype.goBack = function() {
//   this.coords.y -= 1;
// };

// BaseRobot.prototype.goRight = function() {
//   this.coords.x += 1;
// };

// BaseRobot.prototype.goLeft = function() {
//   this.coords.x -= 1;
// };


function CargoRobot(name, maxTrunkCapacity) {
  // keep this line to call BaseRobot constructor for each new CargoRobot
  // BaseRobot.call(this, name);
  // write code here
  this.trunk = [];
  this.maxTrunkCapacity = maxTrunkCapacity;
}

// Object.setPrototypeOf(CargoRobot.prototype, BaseRobot.prototype);

const mike = new CargoRobot('mike', 10);

// mike.goRight();
// mike.goRight();
// mike.goBack();
// console.log(mike);

class BankAccount {
  /**
   * @param {string} name
   * @param {number} money
   */
  constructor(name, money) {
    // write code here
    this.name = name;
    this.money = money;
    this.infoArray = [`Initial: ${this.money}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`;
  }

  addMoney(sum, info) {
    this.money += sum;
    this.infoArray.push(`${info}: ${sum}`);
  }

  withdrawMoney(amount, info) {
    this.money -= amount;
    this.infoArray.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    return this.infoArray;
  }
}

const dmytro = new BankAccount('Dmytro', 1000);
const pavel = new BankAccount('Pavel', 400);

// console.log(dmytro.getInfo());
// dmytro.addMoney(2000, 'salary');
// dmytro.withdrawMoney(500, 'new phone');
// console.log(dmytro.getInfo());
// dmytro.withdrawMoney(500, 'apartment rent');
// console.log(dmytro.getInfo());
// console.log(dmytro.getAccountHistory());
// console.log(pavel.getInfo());
// console.log(pavel.getAccountHistory());

class Singleton {
  // a property for saving an object
  static instance = null;
  // !!! this syntax does not work on the platform

  constructor() {
    // If it is the first call
    if (!Singleton.instance) {
      // we save new object to static property
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

// Alternative syntax for static property
// Singleton.instance = null;

const firstObject = new Singleton();
const secondObject = new Singleton();

// console.log(firstObject === secondObject);
// console.log(firstObject instanceof Singleton);
// console.log(secondObject instanceof Singleton);


class BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    this.name = name;
    this.weight = weight;
    this.coords = coords;

    if (coords.x === undefined) {
      this.coords.x = 0;
    }

    if (coords.y === undefined) {
      this.coords.y = 0;
    }

    this.chipVersion = chipVersion;
  }

  goForward(step = 1) {
    this.coords.y += step;
  }

  goBack(step = 1) {
    this.coords.y -= step;
  }

  goLeft(step = 1) {
    this.coords.x -= step;
  }

  goRight(step = 1) {
    this.coords.x += step;
  }

  getInfo() {
    return `Robot: ${this.name}, `
    + `Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords, chipVersion, role = 'FlyingRobot') {
    super(name, weight, coords, chipVersion);
    this.coords.z = coords.z || 0;
  }

  goUp(step = 1) {
    this.coords.z += step;
  }

  goDown(step = 1) {
    this.coords.z -= step;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(name, weight, coords, chipVersion,
    maxLoadWeight, currentLoad = null) {
    super(name, weight, coords, chipVersion);

    this.maxLoadWeight = maxLoadWeight;
    this.currentLoad = currentLoad;
  }

  hookLoad(cargo) {
    if (this.currentLoad === null
      && cargo.weight <= this.maxLoadWeight) {
      this.currentLoad = cargo;
    }
  }

  unhookLoad() {
    this.currentLoad = null;
  }
}

// const albatros = new DeliveryDrone ('albatros', 20, coords = {x: 2, y: 4, z: 1}, 245, 100, 27)
// console.log(albatros);
// albatros.goUp();
// albatros.goUp();
// albatros.goUp();
// console.log(albatros);
// albatros.unhookLoad()
// console.log(albatros);
// console.log(albatros.getInfo());


class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    if (word !== undefined && (word.trim()).length > 0) {
      this.words.push(word);
    }
  }

  search(pattern) {

    for (const element of this.words){
      let count = 0;
      let point = '.';
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === element[i] || pattern[i] === point) {
          count++;
        }
      }

      if (count === pattern.length 
        && element.length === pattern.length) {
        return true
      } else {
        count = 0;
      }
    }

    return false;
 
  }
}

const elemDictasionary = new WordDictionary();
elemDictasionary.addWord('bad')
elemDictasionary.addWord('dad')
elemDictasionary.addWord('mad')
// console.log(elemDictasionary.words);
// console.log(elemDictasionary.search('pad'));
// console.log(elemDictasionary.search('dad'));
// console.log(elemDictasionary.search('..d'));
// console.log(elemDictasionary.search('m...'));

class Calendar {
  // write code here
  constructor () {
    this.schedule = [];
  }

  book(start, end) {

    for (const event of this.schedule) {
      if (start < event[1] && end > event[0]) {
        return false
      }
    }

    this.schedule.push([start, end]);
    console.log(this.schedule)

  return true;

  }
}

const calendar = new Calendar();
// console.log(calendar.book(0, 10));
// console.log(calendar.book(20, 30));
// console.log(calendar.book(10, 15));



function truncateMethod() {
  /**
   * @param {Object} options
   *
   * @returns {string}
   */
  String.prototype.truncate = function(options) {
    // write code here
    let optionObject = options;
    const defaultLength = 30;
    const defaultOmission = '...';
    const defaultSeparator = '';

    if (optionObject === undefined) {
      optionObject = {
        length: defaultLength,
        omission: defaultOmission,
        separator: defaultSeparator,
      };
    }

    if (optionObject.length === undefined) {
      optionObject.length = defaultLength;
    }

    if (optionObject.omission === undefined) {
      optionObject.omission = defaultOmission;
    }

    if (optionObject.separator === undefined) {
      optionObject.separator = defaultSeparator;
    }

    if (this.length <= optionObject.length) {
      return this;
    }

    const lengthText = optionObject.length - optionObject.omission.length;

    if (lengthText < 0) {
      return optionObject.omission;
    }

    const shortText = this.slice(0, lengthText);

    if (optionObject.separator === defaultSeparator) {
      return shortText + optionObject.omission;
    }

    const startArray = this.split(optionObject.separator);

    const middleArray = shortText.split(optionObject.separator);

    const finalArray = [];

    for (let i = 0; i < startArray.length; i++) {
      if (startArray[i] === middleArray[i]) {
        finalArray.push(startArray[i]);
      }
    }

    let finalText = finalArray.join(optionObject.separator)
   + optionObject.omission;

    while (finalText.length > shortText) {
      finalText = (finalArray.pop).join(optionObject.separator)
   + optionObject.omission;
    }

    return finalText;
  };
}


// truncateMethod();
// const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
// console.log(text.truncate()) //=== 'Lorem ipsum dolor sit amet,...'
// console.log(text.truncate({ length: 20, omission: ' more...' })) === 'Lorem ipsum  more...'
// const text = 'One ---- two ---- three ---- four ---- five'
// console.log(text.truncate({
//       length: 26,
//       separator: ' ---- ',
//     }))

function getMaximumProduct(nums) {
  // write code here
  let maxMultiply = nums[0] * nums[1];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] * nums[i] > maxMultiply) {
      maxMultiply = nums[i - 1] * nums[i];
    }
  }

  return maxMultiply;
}


function toArrayOfDigits(n) {
  // write code here
  return String(n).split('').reverse().map(item => +item);
}



function countOccurrences(phrase, part) {
  // write code here
  const countArray = phrase.split(part);

  return countArray.length - 1;
}



function isArrayPretty(numbers) {
  // write code here
  if (numbers.length === 0) {
    return false;
  }

  for (const num of numbers) {
    if (!(numbers.includes(num + 1)
    || numbers.includes(num - 1))) {
      return false;
    }
  }

  return true;
}

// console.log(getMaximumProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))


// const people = [
//   {
//     'name': 'Carolus Haverbeke',
//     'father': 'Carel Haverbeke',
//     'mother': 'Maria van Brussel',
//     'sex': 'm',
//     'born': 1832,
//     'died': 1905,
//   },
//   {
//     'name': 'Emma de Milliano',
//     'father': 'Carolus Haverbeke',
//     'mother': 'Sophia van Damme',
//     'sex': 'f',
//     'born': 1876,
//     'died': 1956,
//   },
//   // ...
// ];

function getPeopleWithParents(people) {
  // write your code here
  const peopleWithParents = people.map(function(item) {
    const element = { ...item };

    return element;
  });

  const copyArray = [...peopleWithParents];

  for (const person of peopleWithParents) {
    for (const copy of copyArray) {
      if (person.father === copy.name) {
        person.father = copy;
      }

      if (person.mother === copy.name) {
        person.mother = copy;
      }
    }
  }

  return peopleWithParents;
}

// const some = getPeopleWithParents(people);


const people = [
  {
    'name': 'Emma de Milliano',
    'sex': 'f',
    'born': 1876,
    'died': 1956,
    'father': 'Petrus de Milliano',
    'mother': 'Sophia van Damme',
  },
  {
    'name': 'Maria de Rycke',
    'sex': 'f',
    'born': 1683,
    'died': 1724,
    'father': 'Frederik de Rycke',
    'mother': 'Laurentia van Vlaenderen',
  },
  {
    'name': 'Jan van Brussel',
    'sex': 'm',
    'born': 1714,
    'died': 1748,
    'father': 'Jacobus van Brussel',
    'mother': 'Joanna van Rooten',
  },
  {
    'name': 'Philibert Haverbeke',
    'sex': 'm',
    'born': 1907,
    'died': 1997,
    'father': 'Emile Haverbeke',
    'mother': 'Emma de Milliano',
  },
  {
    'name': 'Jan Frans van Brussel',
    'sex': 'm',
    'born': 1761,
    'died': 1833,
    'father': 'Jacobus Bernardus van Brussel',
    'mother': null,
  },
  {
    'name': 'Pauwels van Haverbeke',
    'sex': 'm',
    'born': 1535,
    'died': 1582,
    'father': 'N. van Haverbeke',
    'mother': null,
  },
  {
    'name': 'Clara Aernoudts',
    'sex': 'f',
    'born': 1918,
    'died': 2012,
    'father': 'Henry Aernoudts',
    'mother': 'Sidonie Coene',
  },
  {
    'name': 'Emile Haverbeke',
    'sex': 'm',
    'born': 1877,
    'died': 1968,
    'father': 'Carolus Haverbeke',
    'mother': 'Maria Sturm',
  },
  {
    'name': 'Lieven de Causmaecker',
    'sex': 'm',
    'born': 1696,
    'died': 1724,
    'father': 'Carel de Causmaecker',
    'mother': 'Joanna Claes',
  },
  {
    'name': 'Pieter Haverbeke',
    'sex': 'm',
    'born': 1602,
    'died': 1642,
    'father': 'Lieven van Haverbeke',
    'mother': null,
  },
  {
    'name': 'Livina Haverbeke',
    'sex': 'f',
    'born': 1692,
    'died': 1743,
    'father': 'Daniel Haverbeke',
    'mother': 'Joanna de Pape',
  },
  {
    'name': 'Pieter Bernard Haverbeke',
    'sex': 'm',
    'born': 1695,
    'died': 1762,
    'father': 'Willem Haverbeke',
    'mother': 'Petronella Wauters',
  },
  {
    'name': 'Lieven van Haverbeke',
    'sex': 'm',
    'born': 1570,
    'died': 1636,
    'father': 'Pauwels van Haverbeke',
    'mother': 'Lievijne Jans',
  },
  {
    'name': 'Joanna de Causmaecker',
    'sex': 'f',
    'born': 1762,
    'died': 1807,
    'father': 'Bernardus de Causmaecker',
    'mother': null,
  },
  {
    'name': 'Willem Haverbeke',
    'sex': 'm',
    'born': 1668,
    'died': 1731,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke',
  },
  {
    'name': 'Pieter Antone Haverbeke',
    'sex': 'm',
    'born': 1753,
    'died': 1798,
    'father': 'Jan Francies Haverbeke',
    'mother': 'Petronella de Decker',
  },
  {
    'name': 'Maria van Brussel',
    'sex': 'f',
    'born': 1801,
    'died': 1834,
    'father': 'Jan Frans van Brussel',
    'mother': 'Joanna de Causmaecker',
  },
  {
    'name': 'Angela Haverbeke',
    'sex': 'f',
    'born': 1728,
    'died': 1734,
    'father': 'Pieter Bernard Haverbeke',
    'mother': 'Livina de Vrieze',
  },
  {
    'name': 'Elisabeth Haverbeke',
    'sex': 'f',
    'born': 1711,
    'died': 1754,
    'father': 'Jan Haverbeke',
    'mother': 'Maria de Rycke',
  },
  {
    'name': 'Lievijne Jans',
    'sex': 'f',
    'born': 1542,
    'died': 1582,
    'father': null,
    'mother': null,
  },
  {
    'name': 'Bernardus de Causmaecker',
    'sex': 'm',
    'born': 1721,
    'died': 1789,
    'father': 'Lieven de Causmaecker',
    'mother': 'Livina Haverbeke',
  },
  {
    'name': 'Jacoba Lammens',
    'sex': 'f',
    'born': 1699,
    'died': 1740,
    'father': 'Lieven Lammens',
    'mother': 'Livina de Vrieze',
  },
  {
    'name': 'Pieter de Decker',
    'sex': 'm',
    'born': 1705,
    'died': 1780,
    'father': 'Joos de Decker',
    'mother': 'Petronella van de Steene',
  },
  {
    'name': 'Joanna de Pape',
    'sex': 'f',
    'born': 1654,
    'died': 1723,
    'father': 'Vincent de Pape',
    'mother': 'Petronella Wauters',
  },
  {
    'name': 'Daniel Haverbeke',
    'sex': 'm',
    'born': 1652,
    'died': 1723,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke',
  },
  {
    'name': 'Lieven Haverbeke',
    'sex': 'm',
    'born': 1631,
    'died': 1676,
    'father': 'Pieter Haverbeke',
    'mother': 'Anna van Hecke',
  },
  {
    'name': 'Martina de Pape',
    'sex': 'f',
    'born': 1666,
    'died': 1727,
    'father': 'Vincent de Pape',
    'mother': 'Petronella Wauters',
  },
  {
    'name': 'Jan Francies Haverbeke',
    'sex': 'm',
    'born': 1725,
    'died': 1779,
    'father': 'Pieter Bernard Haverbeke',
    'mother': 'Livina de Vrieze',
  },
  {
    'name': 'Maria Haverbeke',
    'sex': 'm',
    'born': 1905,
    'died': 1997,
    'father': 'Emile Haverbeke',
    'mother': 'Emma de Milliano',
  },
  {
    'name': 'Petronella de Decker',
    'sex': 'f',
    'born': 1731,
    'died': 1781,
    'father': 'Pieter de Decker',
    'mother': 'Livina Haverbeke',
  },
  {
    'name': 'Livina Sierens',
    'sex': 'f',
    'born': 1761,
    'died': 1826,
    'father': 'Jan Sierens',
    'mother': 'Maria van Waes',
  },
  {
    'name': 'Laurentia Haverbeke',
    'sex': 'f',
    'born': 1710,
    'died': 1786,
    'father': 'Jan Haverbeke',
    'mother': 'Maria de Rycke',
  },
  {
    'name': 'Carel Haverbeke',
    'sex': 'm',
    'born': 1796,
    'died': 1837,
    'father': 'Pieter Antone Haverbeke',
    'mother': 'Livina Sierens',
  },
  {
    'name': 'Elisabeth Hercke',
    'sex': 'f',
    'born': 1632,
    'died': 1674,
    'father': 'Willem Hercke',
    'mother': 'Margriet de Brabander',
  },
  {
    'name': 'Jan Haverbeke',
    'sex': 'm',
    'born': 1671,
    'died': 1731,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke',
  },
  {
    'name': 'Anna van Hecke',
    'sex': 'f',
    'born': 1607,
    'died': 1670,
    'father': 'Paschasius van Hecke',
    'mother': 'Martijntken Beelaert',
  },
  {
    'name': 'Maria Sturm',
    'sex': 'f',
    'born': 1835,
    'died': 1917,
    'father': 'Charles Sturm',
    'mother': 'Seraphina Spelier',
  },
  {
    'name': 'Jacobus Bernardus van Brussel',
    'sex': 'm',
    'born': 1736,
    'died': 1809,
    'father': 'Jan van Brussel',
    'mother': 'Elisabeth Haverbeke',
  },
  {
    'name': 'Carolus Haverbeke',
    'sex': 'm',
    'born': 1832,
    'died': 1905,
    'father': 'Carel Haverbeke',
    'mother': 'Maria van Brussel'
  },
];

function createIsMyParentFilter(name) {
  // write code here

  const human = name;

  function parents(person, index, array) {

    const humanArray = array.filter(item => item.name === human);
    const member = humanArray[0];
    
    if (humanArray.length === 0) {
      return false
    }

    if (person.name === member.mother 
      || person.name === member.father) {
        return person;
    }

    return false;
    
  }

  return parents;
}

const isParent = createIsMyParentFilter('Jan Frans van Brussel');
const parents = people.filter(isParent)
console.log(parents)



function makeStorage() {
  // write code here
  const storageObject = {

    getValue(param) {
      if (param === 'getValue') {
        return storageObject[param + 'key'];
      }

      if (param === 'setValue') {
        return storageObject[param + 'key'];
      }

      return storageObject[param];
    },

    setValue(key, value) {
      if (value) {
        if (key === 'getValue') {
          storageObject[key + 'key'] = value;
        }

        if (key === 'setValue') {
          storageObject[key + 'key'] = value;
        }

        if (key !== 'getValue' && key !== 'setValue') {
          storageObject[key] = value;
        }
      }
    },
  };

  return storageObject;

}

const storage = makeStorage();

// storage.setValue('name', 'Peter');
// storage.setValue('age', 30);

// console.log(storage.getValue('name')); // Peter
// console.log(storage.getValue('age')); // 30

// storage.setValue('age', 31);
// console.log(storage.getValue('age')); // 31

// console.log(storage.getValue('occupation')); // undefined

// console.log(storage.getValue('getValue')); // undefined
// storage.setValue('getValue', 42);
// console.log(storage.getValue('getValue')); // 42

// storage.setValue('setValue', 'hello');
// storage.setValue('x', 10);
// console.log(storage.getValue('x')); // 10
// console.log(storage.getValue('setValue')); // 'hello'

