

function isPalindrome(str) {
    const parts = Array.from(str);
    let firstString = '';
    let secondString = '';
  
    for (const part of parts) {
      if (part.toLowerCase() !== part.toUpperCase()
      || Number(part) > 0 
      || part === '0') {
        firstString = firstString + part;
        secondString = part + secondString;
      }
    }
  
    return firstString.toLowerCase() === secondString.toLowerCase();
    
  }

// console.log(isPalindrome('f102  345,4! 3201F '))

function generateSequence(num, pattern) {
    const summaryArray = [];
  
    for (let i = 0; i < num; i++) {
      if (typeof (pattern) === 'function') {
        summaryArray.push(pattern(i));
      } else {
        summaryArray.push(pattern);
      }
    }
  
    return summaryArray;
  }

// console.log(generateSequence(3, i => i + 10));

function findShortestLength(wordsString) {
    const wordsArray = wordsString.split('');
  
    if (wordsArray[0] === ' ' || wordsArray[wordsArray.length - 1] === ' ') {
      return 0;
    }
  
    for (let i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i] === ' ' && wordsArray[i - 1] === ' ') {
        return 0;
      }
    }
  
    const shortwordArray = wordsString.split(' ');
  
    let min = shortwordArray[0].length;
  
    for (let i = 1; i < shortwordArray.length; i++) {
      if (shortwordArray[i].length < min) {
        min = shortwordArray[i].length;
      }
    }
  
    return min;
  }
  
// console.log(findShortestLength('We all live in a yellow submarine'));

function reverseWords(str) {
    // write code here
    const strArray = str.split(' ');
    const sArray = [];
  
    for (const word of strArray) {
      sArray.push(word.split(''));
    }
  
    const secArray = [];
  
    for (const n of sArray) {
      secArray.push(n.reverse());
    }
  
    const thrArray = [];
  
    for (const m of secArray) {
      thrArray.push(m.join(''));
    }
  
    const reversePhapse = thrArray.join(' ');
  
    return reversePhapse;
  }

// console.log(reverseWords('double  spaces'));

function getYears(amount, percent, limit) {
    // write code here
    let termCredit = 0;
    const fixPer = (1 + percent / 100);
    let sumMax = amount;
  
    while (true) {
      sumMax = sumMax * fixPer;
  
      if (limit < Math.floor(sumMax)) {
        break;
      }
      termCredit++;
    }
  
    return termCredit;
  }

//   console.log(getYears(1800, 11, 1998));

function calculateGuests(guestsInput) {
    // write code here
    let numberGuest = '';
  
    for (const num of guestsInput) {
      if (Number(num) >= 0) {
        numberGuest = numberGuest + num;
      }
    }

    for (let i = numberGuest.length; i > 0; i--) {
      if (guestsInput.includes(numberGuest) === false) {
        numberGuest = numberGuest.slice(0, i);
      }
    }

    if (numberGuest.length === 0 || +numberGuest < 1) {
      return 'not a number';
    }
    
    return +numberGuest;

  }
 
  // console.log(calculateGuests('12.34 people'));

function isAlphabet(letters) {
    // write code here
    const wordsRight = 'abcdefghijklmnopqrstuvwxyz';
    if (letters.length === 0) {
        return false;
      }
    return wordsRight.includes(letters.toLowerCase());
  }
// console.log(isAlphabet('aBm'));

// Стрілкова функція
const getString = () => {
    const jobTitle = 'I am a programmer';
  
    return jobTitle;
  };
  
  function getTask(weekday) {
    switch (weekday) {
      case 'monday':
        return 'Write a new module for the program';
  
      case 'tuesday':
        return 'Test the module and find bugs';
  
      case 'wednesday':
        return 'Write a new module for the program';
  
      case 'thursday':
        return 'Test the module and find bugs';
  
      case 'friday':
        return 'You need to meet the boss today';
  
      case 'saturday':
        return 'Spend the evening with your friends';
  
      case 'sunday':
        return 'Go to the movies in the evening';
  
      default:
        return 'Entered the wrong day of the week';
    }
  }

//   console.log(getTask('saturday'));

function findCalculationType(a, b, res) {
    switch (res) {
      case a - b:
        return 'subtraction';
  
      case a + b:
        return 'addition';
  
      case a / b:
        return 'division';
  
      case a * b:
        return 'multiplication';
    }
  }


function getGuestsCount(guestsInput) {

    const guests = guestsInput.trim();

    const numbers = '1234567890';

    if (numbers.includes(guests[0]) === false) {
        return 'not a number';
    }

    let numberGuest = '';

    let i = 0;

    while (i < guests.length) {
        numberGuest = numberGuest + guests[i];
        i++;

        if (numbers.includes(guests[i]) !== true) {
        break;
        }
    }

return +numberGuest;

}
// console.log(getGuestsCount(' 12lkjh'));


function canTheyBook(adultsCount = 0, childrenCount = 0) {
    // write code here
    if ((adultsCount + childrenCount <= 8)
    && (adultsCount >= 1)
    && (2 * adultsCount - childrenCount >= 0)) {
      return true;
    }
  
    return false;
  }

// console.log (canTheyBook(1, 0))

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    // write code here
    if ((adultsCount >= 1)
    && (2 * adultsCount - childrenCount - babiesCount >= 0)
    && (adultsCount + childrenCount <= 8)
    && (adultsCount + babiesCount <= 9)
    && (adultsCount >= babiesCount)
    && (adultsCount + childrenCount + babiesCount <= 9)) {
      return true;
    }
  
    return false;
  }

//   console.log(canTheyBook(1, 4, 4));

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    // write code here
    if (adultsCount + childrenCount + babiesCount <= 4
      && adultsCount + childrenCount <= 4
      && adultsCount + babiesCount <= 4) {
      return 'small room';
    }
  
    if (babiesCount >= 1
      && adultsCount + childrenCount + babiesCount === 5) {
      return 'small room + extra bed';
    }
  
    if (adultsCount + childrenCount + babiesCount >= 5
      && adultsCount + childrenCount + babiesCount <= 8) {
      return 'big room';
    }
  
    if (babiesCount >= 1
      && adultsCount + childrenCount + babiesCount === 9) {
      return 'big room + extra bed';
    }
  }

// console.log(recommendRoom(3, 3, 3));

function getSum(a, b) {

    let sum = 0;

    if (a === b) {
        return a
    }

    if (a < b) {
        for (let i = a; i >= a && i <= b; i++) {
            sum = sum + i; 
        }
    } 
    
    if (a > b) {
        for (let i = b; i >= b && i <= a; i++) {
           sum = sum + i;
        }
    }

    return sum;
}

// console.log(getSum(1, 5));

function isPangram(str) {

    const abc = 'abcdefghijgklmnopqrstuvwxyz';
    let phrase = '';
    const smallLetters = str.toLowerCase();

    for (const letter of smallLetters) {
        if (letter !== letter.toUpperCase()) {
            phrase = phrase + letter;
        }
    }
     for (const part of abc) {
        if (phrase.includes(part) !== true) {
            return false
        }
     }

     return true;

}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))


function countJewelsInStones(jewels, stones) {
    let stounCount = 0;
  
    for (const stoun of stones) {
      if (jewels.includes(stoun)) {
        stounCount++;
      }
    }
  
    return stounCount;
  }
// console.log(countJewelsInStones('aA', 'aAAbbbb'));

const charlie = { serialNo: 1, chipVer: 12 };

const lordy = { serialNo: 2, chipVer: 12 };

const compareRobots = (robot1, robot2) => {
    // write code here
    if (Object.keys(robot1).length !== Object.keys(robot2).length) {
      return false;
    }
  
    const robot1Copy = { ...robot1 };
    const robot2Copy = { ...robot2 };
  
    delete robot1Copy.serialNo;
    delete robot2Copy.serialNo;
  
    const robot1ArrayKeysValues = Object.entries(robot1Copy);
    const robot2ArrayKeysValues = Object.entries(robot2Copy);
  
    robot1ArrayKeysValues.sort();
    robot2ArrayKeysValues.sort();
  
    if (robot1ArrayKeysValues.join('') !== robot2ArrayKeysValues.join('')) {
      return false;
    }
  
    return true;
  };

// console.log(compareRobots(charlie, lordy));
