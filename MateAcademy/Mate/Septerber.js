function colorStones(stones) {
    // write code here
    let count = 0;

    for (let i = 0; i < stones.length; i++ ) {
        if (stones[i] === stones[i + 1]) {
            count++
        }
    }
     return count;
  }

//   console.log(colorStones('RGBRGBRGGB'));

 const friends = [{
    username: 'Alice',
    status: 'online',
    lastActivity: 15
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }];

  function whoIsOnline(friends) {
    // write code here
    const activityObj = { 
    online: [],
    offline: [],
    away: []
    };

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'offline') {
            activityObj.offline.push(friends[i].username)
        }
        if (friends[i].lastActivity <= 10 && friends[i].status === 'online') {
            activityObj.online.push(friends[i].username)
        } 

        if (friends[i].lastActivity > 10 && friends[i].status === 'online') {
            activityObj.away.push(friends[i].username)
        }
    }
        if ( activityObj.online.length === 0 )
        { delete activityObj.online }

        if ( activityObj.offline.length === 0 )
        { delete activityObj.offline }

        if ( activityObj.away.length === 0 )
        { delete activityObj.away }
        return activityObj;
}
//   console.log(whoIsOnline(friends));

const object = {
    foo: 'js',
    bar: 'fe',
    boo: 3,
    spam: 10,
    egg: 11,
  };

  function addNumbers(object) {
    // write code here
    let sum = 0;
  
    for (const prop in object) {
      if (!object[prop].length) {
        sum = sum + object[prop];
      }
    }
  
    return sum;
  }

// console.log(addNumbers(object));

function countLettersInString(str) {
    // write code here
    const letterCounter = {};
  
    for (const letter of str) {
      if (!letterCounter[letter]) {
        letterCounter[letter] = 0;
      }
      letterCounter[letter]++;
    }
  
    return letterCounter;
  }

//   console.log(countLettersInString('arithmetics'));

function getRowWeights(people) {
    // write code here
    let weightTeam1 = 0;
    let weightTeam2 = 0;
  
    for (let i = 0; i < people.length; i++) {
      if (i % 2 === 0) {
        weightTeam1 += people[i];
      } else {
        weightTeam2 += people[i];
      };
    }
  
    return [weightTeam1, weightTeam2];
  }

//   console.log(getRowWeights([8, 5, 9, 3]));

function getProductId(url) {
    // write code here
    const urlArray = url.split('-')

    return urlArray.reverse()[1];
  }
//   console.log(getProductId('exampleshop.com/fancy-coffee-cup-p-90764-12052019.html'));

const suspects = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
  };
const dead = ['Lucas', 'Bill'];

function getKiller(suspects, dead) {
    // write code here
    for (let i = 0; i < dead.length; i++) {
      for (const prop in suspects) {
        if (!suspects[prop].includes(dead[i])) {
          delete suspects[prop];
        }
      }
    }
  
    if (Object.keys(suspects).length > 0) {
      return Object.keys(suspects)[0];
    }
  }

// console.log(getKiller(suspects, dead));

function getArrayProduct(numbers) {
    // write code here
    let resultMultiplicatin = 1;
  
    for (let i = 0; i < numbers.length; i++) {
      resultMultiplicatin = resultMultiplicatin * numbers[i];
    }
  
    const resultArray = [];
  
    for (let j = 0; j < numbers.length; j++) {
      resultArray.push(resultMultiplicatin / numbers[j]);
    }
  
    return resultArray;
  }

//   console.log(getArrayProduct([12, 20]));

function getLeaders(numbers) {
    // write your code here
    let sum = 0;

    for (const n of numbers) {
      sum += n;
    }
  
    const numbersLeader = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > sum - numbers[i]) {
        numbersLeader.push(numbers[i]);
      }
      sum -= numbers[i];
    }

    return numbersLeader;
}

//   console.log(getLeaders([1, 2, 3, 4, 0]));

function countMatchingSocks(colors) {
    // write code here
    const sumPairs = {};
  
    for (let i = 0; i < colors.length; i++) {
      if (!sumPairs[colors[i]]) {
        sumPairs[colors[i]] = 0;
      }
      sumPairs[colors[i]] += colors[i];
    }
  
    let numberCouple = 0;
  
    for (const prop in sumPairs) {
      if ((sumPairs[prop] / prop) % 2 !== 0) {
        numberCouple += (sumPairs[prop] / prop - 1) / 2;
      } else {
        numberCouple += (sumPairs[prop] / prop) / 2;
      }
    }
  
    return numberCouple;
  }

// console.log(countMatchingSocks([10, 20, 30, 40, 50, 10, 60]));

const first = {a: 2, b: 4};
const second = {a: 2, b: 10};
const third = {d: -5};

function sumObjects(...summaryArray) {
    // write code here
    const summaryObject = {};
  
    for (let i = 0; i < summaryArray.length; i++) {
      for (const key in summaryArray[i]) {
        if (!summaryObject[key]) {
          summaryObject[key] = summaryArray[i][key];
        } else {
          summaryObject[key] += summaryArray[i][key];
        }
      }
    }
  
    return summaryObject;
}

//   console.log(sumObjects(first, second));

function countNextSmaller(numbers) {
    // write code here
    const smallNumberArray = [...numbers];
  
    for (let i = 0; i < smallNumberArray.length; i++) {
      smallNumberArray[i] = 0;
    }
  
    const copyNumbers = [...numbers];
  
    for (let j = 0; j < copyNumbers.length; j++) {
      for (let n = 0; n < numbers.length; n++) {
        if (numbers[n] < copyNumbers[j]) {
          smallNumberArray[j]++;
        }
      } numbers.shift();
    }
  
    return smallNumberArray;
  }
  
//   console.log(countNextSmaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));

const calculator = {
    average(...numbers) {
      if (numbers.length === 0) {
        return 0;
      }
  
      let averageValue = 0;
  
      for (let i = 0; i < numbers.length; i++) {
        averageValue += numbers[i];
      }
  
      return averageValue / numbers.length;
    },
  };

//   console.log(calculator.average(1, 2, 5, 0, 9));

function getRatio(colors) {
    const rowLength = colors.length;
  
    if (colors.length === 0) {
      return '0/0';
    }
  
    const validLetters = 'abcdefghijklm';
    let notValid = 0;
  
    for (const letter of colors) {
      if (!validLetters.includes(letter)) {
        notValid++;
      }
    }
  
    return notValid + '/' + rowLength;
  }

// console.log(getRatio('abcdefghijklm'));

function romanToInt(romanNum) {
   
    const romanianObject = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    const romanObjSingle = {
        V: 5,
        L: 50,
        D: 500,
        M: 1000,
        I: 1,
        X: 10,
        C: 100,
    }
    let romanString = romanNum;
    let number = 0;
    let verificationArray = [];
    if (romanNum.length === 1) {
      return romanObjSingle[romanNum]
    }
    while (romanString.length > 0) {
        if ((romanString[0] + romanString[1]) in romanianObject) {
            number += romanianObject[romanString[0] + romanString[1]];
            verificationArray.unshift(romanianObject[romanString[0] + romanString[1]])
            romanString = romanString.slice(2);
        } else {
            number += romanObjSingle[romanString[0]];
            verificationArray.unshift(romanObjSingle[romanString[0]])
            romanString = romanString.slice(1)
        }
    }
    if (verificationArray[3] === 1) {
        return NaN;
    }

    for (let j = 0; j < verificationArray.length; j++){
        if (verificationArray[j] === 4 
            && verificationArray[j] !== verificationArray[0]){
        return NaN;
        }
        if (verificationArray[j] >= verificationArray[j + 1] 
            && verificationArray[j] > 1 
            && verificationArray[j] < 1000) {
        return NaN
        }
    }
    
return number

}
// console.log(romanToInt('MMMCMIV'));

function calculateYears(principal, interest, tax, desired) {
    // write code here
    if (desired === principal) {
      return 0;
    }
  
    let years = 0;
  
    let sum = principal;
  
    while (sum <= desired) {
      sum = sum * (interest * (1 - tax) + 1);
      years++;
    }
  
    return years;
  }
  
console.log(calculateYears(1000, 0.01625, 0.18, 1200));


