class Animal {
  // write your code here
  // static ROLE_HERBIVORE = 'Herbivore';
  // static ROLE_CARNIVORE = 'Carnivore ';
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this)
  }
}


class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false
    };
    this.hidden = true
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor (name, health) {
    super(name, health)
    }

  bite(prey) {
    if (prey.hidden === false) {
      prey.health -= 50;

    if (prey.health === 0) {
      for (let i = 0; i < Animal.alive.length; i++) {
        if(Animal.alive[i].name === prey.name) {
          Animal.alive.splice(i, 1);
        }
      }
    }
    }
  }

}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

// console.log(Animal.alive);

// lion.bite(deer);
// panther.bite(lion);

// console.log(Animal.alive);

// panther.bite(deer);
// rabbit.hide();
// panther.bite(rabbit);

// console.log(Animal.alive);


function printFromTo (input, start, end) {
  for (let i = start; i <= end; i++) {
    console.log(input[i])
  }
}

// console.log(printFromTo('input', 2, 3))

class BoardOfFame {
  // Write your code here
  constructor(prize_place = 3) {
    this.robots = [];
    this.numberOfPlaces = prize_place;

    while (this.numberOfPlaces > 0) {
      this.robots.push({name: '...'})
      this.numberOfPlaces--;
    }
  }

  addRecord(robot) {
    let count = this.robots.length;
    this.robots =
    this.robots.filter(element => element.name !== robot.name);
    this.robots.unshift(robot);
    this.robots.sort((a, b) => b.score - a.score );

    if (count !== this.robots.length) {
      this.robots.pop();
    }
  }

  get list () {
    let list_Table = [];
    for (let i = 0; i < this.robots.length; i++) {
      if (this.robots[i].score) {
        list_Table.push(`${i + 1}. ` + 
        `${this.robots[i].name}: ` +
        `${this.robots[i].score}`)
      } else {
        list_Table.push(`${i + 1}. ` + 
        `${this.robots[i].name}`)
      }
    }

    return list_Table.join(' | ');
  }
}


const board = new BoardOfFame();
// console.log(board.list) // `1. ... | 2. ... | 3. ...`
board.addRecord({name: 'Cleaner-900', score: 6})
board.addRecord({name: 'Cleaner-775', score: 16})
// console.log(board.list) // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`
board.addRecord({name: 'MX-56', score: 23})
board.addRecord({name: 'Cleaner-775', score: 30})
// console.log(board.list) // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`

const internationalBoard = new BoardOfFame(5);
// internationalBoard.addRecord({name: 'Cleaner-900', score: 6})
// internationalBoard.addRecord({name: 'Cleaner-775', score: 16})
// console.log(internationalBoard.list) // = `1. ... | 2. ... | 3. ... | 4. ... | 5. ...`

function maskifyStr(str) {
  // write code here
  const endnumber = 4;
  if (str.length <= endnumber) {
    return str;
  } 

  let equialsumbol = '#';
  let endstring = str.slice(str.length - endnumber);
  let strcount = endnumber;

  while (strcount < str.length) {
    endstring = equialsumbol + endstring;
    strcount++
  }

  return endstring;
}

// console.log(maskifyStr('Skippy1234'))

function findSingleNum(nums) {
  // write code here
  const numbers = {};

  for (const n of nums) {
    if (numbers[n]) {
      numbers[n] += 1;
    } else {
      numbers[n] = 1;
    }
  }

  for (const key in numbers) {
    if (numbers[key] === 1) {
      return +key;
    }
  }
}

// console.log(findSingleNum([4, 1, 2, 1, 2]))

function multiplyAll(numbers) {
  // write code here

   function multiplier(factor) {
    return numbers.map(item => item * factor)
   }

   return multiplier;
}

// console.log(multiplyAll([9, 10, 11])(2))
// console.log(multiplyAll([-3, 2, 1, -9, 4])(-1))
// console.log(multiplyAll([])(5))

function divideList(list) {

  const divideArray = [];

  let pushCount = 1;

  while (pushCount < list.length) {
    divideArray.push([list.slice(0, pushCount).join(' '),
    list.slice(pushCount).join(' ')])
    pushCount++;
  }

  return divideArray;

}

// console.log(divideList(['onion', 'garlic', 'tomato', 'corn']))

function findAllAnagrams(string, chars) {
  let anagramsArray = [];
  let wordTocheck = chars.split('').sort().join('');
  const differense = string.length - chars.length;
  const anagramLength = chars.length;

  for (let i = 0; i <= differense; i++) {
    if (string.slice(i, i + anagramLength)
    .split('')
    .sort()
    .join('') === wordTocheck) {
      anagramsArray.push(i)
    }
  }

  return anagramsArray;
}

// console.log(findAllAnagrams('cbaebabacd', 'abc'))

function isIsomorphic(str1, str2) {

  const checkObject = {};

    for (let i = 0; i < str1.length; i++) {
      checkObject[str1[i]] = str2[i];
    }

    let result = '';

    for (const element of str1) {
      result += checkObject[element];
    }

    if (result === str2) {
      return true;
    }

    return false;
}

// console.log(isIsomorphic('egg', 'add'))

function lengthOfLastWord(words) {
  // write code here
  const wordsArray = words.trim().split(' ');
  return wordsArray[wordsArray.length - 1].length
}

// console.log(lengthOfLastWord('Hello '))

function getPair(numbers, sum) {

  let difArray = []
  let count = 1;
  while (count < numbers.length) {
    difArray = numbers.slice(0, count)
    for (let i = 0; i < difArray.length; i++) {
      if (difArray[i] + numbers[count] === sum) {
        return [difArray[i], numbers[count]];
      }
    }
    count++;
  }

  // return undefined


}

// console.log(getPair([11, 3, 7, 5], 10))
// console.log(getPair([1, 2], 3))
// console.log(getPair([10, 3, 4, 2, 3, 9], 6))
// console.log(getPair([10, 15, 2, 1, -4, 4, 12, -7, -23], 8))
// console.log(getPair([-2, -16, -9, -3, -5, -4, -11, -1, -3], -6))
// console.log(getPair([-3, 18, 4, 10, -35, 5, 100, 2], 21))

function isAwardEligible(attendance) {

  let chekString = '';

  for (const item of attendance) {
    if (item === 'A') {
      chekString += item;
    }
  }

  if (chekString.length > 1
    || attendance.includes('LLL')) {
    return false;
  }

  return true;

}

// console.log(isAwardEligible('PPLPPAPL'))
// console.log(isAwardEligible('PPAPLAPPP'))
// console.log(isAwardEligible('LLPAPPLLLP'))


function getLast(...list) {

  if (list.length > 1) {
    return list[list.length - 1]
  } 

  return list[0][list[0].length - 1] || list[0]

}

// console.log(getLast([3, 5, 7, 9, 11]))
// console.log(getLast('abcdefg'))
// console.log(getLast(2, 'f', 10, -23, 7))

function createList(santasList, childrenList) {
  const summaryArray = [];

  for (const name of santasList) {
    if (childrenList.includes(name)
    && !summaryArray.includes(name)) {
      summaryArray.push(name);
    }
  }
  return summaryArray.sort();
}

// console.log(createList(['Jason', 'Jackson', 'Jordan', 'Johnny'], ['Jason', 'Jordan', 'Jennifer']))
// console.log(createList(['JAsoN', 'JaSON', 'jasON'], ['JasoN', 'JAsoN', 'jASon']))
// console.log(createList(['John', 'James'], []))