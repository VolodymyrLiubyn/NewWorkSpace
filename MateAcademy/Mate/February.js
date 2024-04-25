
class PaginationHelper {
  /**
   * @param {string[]} collection
   * @param {number} itemsPerPage
   */
  constructor(collection, itemsPerPage) {
    this.collectionArray = collection;
    this.elementCount = itemsPerPage;
  }

  itemCount() {
    return this.collectionArray.length;
  }

  pageCount() {
    return Math.ceil(this.collectionArray.length / this.elementCount);
  }

  pageItemCount(pageIndex) {
    const count = this.pageCount();

    if (pageIndex < 0
      || pageIndex > count - 1) {
      return -1;
    }

    const pageItems = [];

    for (let i = 0; i < this.collectionArray.length; i += this.elementCount) {
      pageItems.push(this.collectionArray.slice(i, i + this.elementCount));
    }

    return pageItems[pageIndex].length;
  }

  pageIndex(itemIndex) {
    const indexCount = this.itemCount() - 1;

    if (itemIndex < 0
      || itemIndex > indexCount) {
      return -1;
    }

    return Math.floor(itemIndex / this.elementCount);
  }
}


const pagination = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
const pagination2 = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3);

// console.log(pagination.pageCount()) //=== 2
// console.log(pagination.itemCount()) //=== 6
// console.log(pagination.pageItemCount(0)) //=== 4
// console.log(pagination.pageItemCount(1)) //=== 2 // остання сторінка
// console.log(pagination.pageItemCount(2)) //=== -1 // сторінка невалідна
// console.log(pagination.pageIndex(2)) //=== 0
// console.log(pagination.pageIndex(5))//=== 1
// console.log(pagination.pageIndex(6)) //=== -1 // індекс елемента невалідний
// console.log(pagination2.pageCount()) //=== 3
// console.log(pagination2.itemCount()) //=== 7
// console.log(pagination2.pageItemCount(0)) //=== 3

function getTopThree(text) {
 const textArray =
 text.split(' ')
 .map(item => item.trim());
 const filtArray = textArray.filter(item => item !== item.toUpperCase()
 || item !== item.toLowerCase());

  const writeArray = filtArray.map(item => item.toLowerCase());

  if (writeArray.length < 2) {
    return writeArray;
  }

  const sortObject = {};

  for (const word of writeArray) {
    if (sortObject[word]) {
      sortObject[word]++;
    } else {
      sortObject[word] = 1;
    }
  }

  const sortArray = Object.entries(sortObject);

  sortArray.sort((a, b) => b[1] - a[1]);

  const finalArray = sortArray.map(item => item[0])

  return finalArray.slice(0, 3);

}

// console.log(getTopThree('aa Aa B b B b c'))// === ['b', 'aa', 'c']
// console.log(getTopThree('get got got'))// === ['got', 'get']
// console.log(getTopThree('\nThat cat eats that \nmouse'))// === ['that', 'cat', 'eats'] // ['that', 'cat', 'mouse'] або ['that', 'eats', 'mouse'] також можливі
// console.log(getTopThree('& !!! ,'))// === []  
// console.log(getTopThree('one two ONe onE one twO'))// === []

// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(3).reduce((sum, current) => sum + current, 0)
// console.log(result);

function getMaxSum(nums) {
                                                              // Це я довго думав//
  // const checkArray = [...nums];

  // while (checkArray[0] <= 0 && checkArray.length > 0) {
  //   checkArray.splice(0, 1);
  // }

  // if (checkArray.length === 0) {
  //   return 0;
  // }

  // const plusminArray = [];

  // let plusnum = 0;
  // let minusnum = 0;

  // for (let i = 0; i < checkArray.length; i++) {
  //   if (checkArray[i] >= 0) {
  //     plusnum += checkArray[i];

  //     if (minusnum !== 0) {
  //       plusminArray.push(minusnum);
  //       minusnum = 0;
  //     }
  //   }

  //   if (checkArray[i] < 0) {
  //     minusnum += checkArray[i];

  //     if (plusnum !== 0) {
  //       plusminArray.push(plusnum);
  //       plusnum = 0;
  //     }
  //   }
  // }

  // if (minusnum !== 0) {
  //   plusminArray.push(minusnum);
  // }

  // if (plusnum !== 0) {
  //   plusminArray.push(plusnum);
  // }
                                                        // І придумав, але пізніше коротший код зробив

  const sortArray = [];
  let element = 0;

  for (const number of nums) {
    element += number;

    if (element > 0) {
      sortArray.push(element);
    } else {
      element = 0;
    }
  }

  sortArray.sort((a, b) => b - a);

  return sortArray[0] || 0;
}

// console.log(getMaxSum([6, 1, 2, -2, 7, 12, -5, 2]))// === 26
// console.log(getMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))// === 6 // 4 + (-1) + 2 + 1
// console.log(getMaxSum([1, 2, 3, 4, 5]))// === 15 // 1 + 2 + 3 + 4 + 5
// console.log(getMaxSum([-6, -7, -8]))// === 0 // всі числа від'ємні
// console.log(getMaxSum([]))// === 0 //

function add(value) {
  // write code here
  let currentSum = value;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}


A = new Set([1, 2]);
B = new Set([1, 2, 3]);

function makeArray(subarray) {
  const subArray = [];

  subarray.forEach((value, valueAgain, set) => {
    subArray.push(value);
  })

  return subArray;
}

function isSubset(subset, superset) {
  const subsetArray = makeArray(subset);
  const supersetArray = makeArray(superset);

  if (subsetArray.length > supersetArray.length) {
    return false;
  }

  for (const element of subsetArray) {
    if (!supersetArray.includes(element)) {
      return false;
    }
  }

  return true;
}

function isSuperset(superset, subset) {
  const supersetArray = makeArray(superset);
  const subsetArray = makeArray(subset);

  if (subsetArray.length > supersetArray.length) {
    return false;
  }

  for (const part of subsetArray) {
    if (!supersetArray.includes(part)) {
      return false;
    }
  }

  return true;
}

// console.log(isSubset(A, B))// = true
// console.log(isSuperset (A, B))// = false

C = new Set(['a', 'b', 'c', 'd']);
D = new Set(['a', 'd']);

// console.log(isSubset(C, D)) //= false
// console.log(isSuperset (C, D)) //= true

function cache(func) {

  const diffFunc = func;

  const resObj = {};

  function wrap(...args) {
    const obKey = args.map(item => item + typeof (item)).join('');

    if (obKey in resObj) {
      return resObj[obKey];
    } else {
      resObj[obKey] = diffFunc(...args);

      return resObj[obKey];
    }
  }

  return wrap;
}


// let callCount = 0;
// const f = () => callCount++;
// const wrapper = cache(f);

// wrapper(1, 3);
// wrapper(1, 3);
// wrapper(1, 3);
// wrapper(1, 2);
// wrapper(1, 3);
// wrapper();
// wrapper();

// console.log(callCount)

function countUnluckyDays(year) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday', 'sunday'];
  const daysArray = [];
  const unLuckyDay = 12;

  if (year < 0 || year > 99) {
    for (let j = 0; j < 12; j++) {
      daysArray.push(new Date(year, j, unLuckyDay));
    }
  }

  if (year >= 0 && year <= 99) {
    let dateString = String(year);

    while (dateString.length < 4) {
      dateString = '0' + dateString;
    }

    for (let n = 1; n < 10; n++) {
      daysArray.push(new Date(`${dateString}-0${n}-${unLuckyDay}`));
    }

    for (let n = 10; n < 13; n++) {
      daysArray.push(new Date(`${dateString}-${n}-${unLuckyDay}`));
    }
  }

  let unLuckyCount = 0;

  for (let i = 0; i < 12; i++) {
    if (days[daysArray[i].getDay()] === 'friday') {
      unLuckyCount++;
    }
  }

  return unLuckyCount;

}

// console.log(countUnluckyDays(2075));

function unionStrings(sentence1, sentence2) {
  // write code here
  const unicArray = [];
  const summaryString = sentence1 + sentence2;

  for (let i = 0; i < summaryString.length; i++) {
    if (!unicArray.includes(summaryString[i])) {
      unicArray.push(summaryString[i]);
    }
  }

  return unicArray.sort((a, b) => a.localeCompare(b)).join('');

}

// const s1 = 'aabbbccccdefgg';
// const s2 = 'xxxyyabklmopg';

// const s3 = 'loopingisfunbutdangerous';
// const s4 = 'lessdangerousthancoding';

// console.log(unionStrings(s1, s2));
// console.log(unionStrings(s3, s4));

function multiplyNums(nums) {
  // write code here
  if (nums.length === 0) {
    return 1;
  }

  const numsObject = {};

  for (const num of nums) {
    if (numsObject[num]) {
      numsObject[num]++;
    } else {
      numsObject[num] = 1;
    }
  }

  let a;
  let b;

  for (const key in numsObject) {
    if (numsObject[key] === 1) {
      a = +key;
    }

    if (numsObject[key] === 2) {
      b = +key;
    }
  }

  return a * a * b;
}

// console.log(multiplyNums([1, 1, 1, 2, 2, 3]));
// console.log(multiplyNums([6, 5, 4, 10, 6, 5, 4, 10, 6, 5, 4, 20]));
// console.log(multiplyNums([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]));

function calcString(calculation) {
  const plusArray = calculation.split('plus');
  const numsArray = [];

  for (const part of plusArray) {
    if (!+part) {
      numsArray.push(part.split('minus'));
    } else {
      numsArray.push(part);
    }
  }

  const resumeArray = [];

  numsArray.forEach(item => {
    if (typeof (item) === 'string') {
      resumeArray.push(item);
    } else {
      resumeArray.push(item[0], item.slice(1));
    }
  });

  let a = 0;
  let b = 0;

  resumeArray.forEach(element => {
    if (typeof (element) === 'string') {
      a += +element;
    } else {
      for (const num of element) {
        b -= +num;
      }
    }
  });

  return String(a + b);
}

// console.log(calcString('12plus8minus13'));
// console.log(calcString('1plus2plus3plus4'));
// console.log(calcString('8minus5'));
// console.log(calcString('-6plus-8minus-9'));

function containRotations(str, arr) {
  // write code here
  const strArray = str.split('');
  let count = strArray.length;
  const rotateArray = [];

  while (count > 0) {
    strArray.push(strArray.shift());
    rotateArray.push(strArray.join(''));
    count--;
  }

  for (const element of rotateArray) {
    if (!arr.includes(element)) {
      return false;
    }
  }

  return true;
}

// console.log(containRotations('', []))// === true
// console.log(containRotations('abc', []))// === false
// console.log(containRotations('stRing', ['stRing', 'gstRin', 'ngstRi', 'ingstR', 'Ringst', 'TwshnUh', 'tRings']))// === true
// console.log(containRotations('Word', ['Word', 'dWor', 'rdoW', 'DroW', 'rrWd']))// === false // всі обертання рядка 'Word' - ['Word', 'ordW', 'rdWo', 'dWor']

function findLongestGap(num) {
  // write code here
  let numToBite = num.toString(2);
  let zeroCount = numToBite.length;

  while (numToBite[zeroCount - 1] === '0') {
    numToBite = numToBite.slice(0, zeroCount - 1);
    zeroCount--;
  }
  const numArray = numToBite.split('1');
  let zeroLength = 0;

  for (const part of numArray) {
    if (part.length > zeroLength) {
      zeroLength = part.length;
    }
  }

  return zeroLength;
}

// console.log(findLongestGap(85));
// console.log(findLongestGap(9)) // === 2
// console.log(findLongestGap(529)) // === 4
// console.log(findLongestGap(20)) // === 1
// console.log(findLongestGap(15)) // === 0

function isPalindrome(number) {

  const stringNum = String(number);
  let anotherString = '';

  for (const num of stringNum) {
    anotherString = num + anotherString;
  }

  if (stringNum === anotherString) {
    return true;
  }

  return false;

}

// console.log(isPalindrome(44))// === true
// console.log(isPalindrome(676))// === true
// console.log(isPalindrome(12))// === false // 12 справа наліво - це 21, тому це не паліндром
// console.log(isPalindrome(-141))// === false // -141 справа наліво - це 141-, тому це не паліндром


function findAnagrams(word, words) {
  // write code here
  const anagram = word.split('').sort().join('');
  return words.filter(item => item.split('').sort().join('') === anagram);
}

// console.log(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))// === ['aabb', 'bbaa']
// console.log(findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))// === ['carer', 'racer']
// console.log(findAnagrams('laser', ['lazing', 'lazy',  'lacer']))// === []

function getHumanAge(catAge, dogAge) {
  const firstPetYear = 15;
  const secondPetYear = 9;
  const catYear = 4;
  const dogYear = 5;

  function petYear (animalYear, equal) {
    if (animalYear < firstPetYear) {
      return 0;
    };
  
    if (firstPetYear <= animalYear && animalYear < (firstPetYear + secondPetYear)) {
      return 1;
    } else {
      return 2 + Math.floor((animalYear - firstPetYear - secondPetYear) / equal)
    }
  }

  return [petYear(catAge, catYear), petYear(dogAge, dogYear)];

}

// console.log(getHumanAge(0, 0))// === [0, 0]
// console.log(getHumanAge(14, 14))// === [0, 0]
// console.log(getHumanAge(15, 15))// === [1, 1]
// console.log(getHumanAge(23, 23))// === [1, 1]
// console.log(getHumanAge(24, 24))// === [2, 2]
// console.log(getHumanAge(27, 27))// === [2, 2]
// console.log(getHumanAge(28, 28))// === [3, 2]
// console.log(getHumanAge(100, 100))// === [21, 17]

function countOnes(start, end) {
  let binString = '';
  let oneCount = 0;

  for (let i = start; i <= end; i++) {
    binString = i.toString(2);
    for (const num of binString) {
      if (num === '1') {
        oneCount++;
      }
    }
  }

  return oneCount;

}

// console.log(countOnes(4, 7));
// console.log(countOnes(2, 22));
// console.log(countOnes(1001, 10001));


function maxAndMin(numbersString) {
  // write code here
  const numberArray = numbersString.trim().split(' ');
  const checkArray = [];

  for (const element of numberArray) {
    if (element !== ' ') {
      checkArray.push(+element);
    }

  }
  let maxNumber = checkArray[0];
  let minNumber = checkArray[0];

  for (const num of checkArray) {
    if (num > maxNumber) {
      maxNumber = num;
    }
    if (num < minNumber) {
      minNumber = num;
    }
  }

  return maxNumber + ' ' + minNumber;
}

// console.log(maxAndMin('1 2 3 4 5'));
// console.log(maxAndMin('1 9 3 4 -5'));
// console.log(maxAndMin('21 67'));

function findOdd(numbers) {
  // write code here
  const numsObject = {};

  for (const num of numbers) {
    if (numsObject[num]) {
      numsObject[num]++;
    } else {
      numsObject[num] = 1;
    }
  }

  for (const key in numsObject) {
    if (numsObject[key] % 2 > 0) {
      return +key;
    }
  }

}

// console.log(findOdd([1]))// === 1
// console.log(findOdd([2, 2, 2, 2, 10]))// === 10 // число 10 зустрічається 1 раз
// console.log(findOdd([-20, 2, 2, 3, 3, 5, 5, 4, -20, 4, 5]))// // число 5 зустрічається 3 рази

function isPinValid(pin) {
  const numArray = [];

  for (const num of pin) {
    numArray.push(+num);
  }

  if (numArray.length !== 4 && numArray.length !== 6) {
    return false;
  }

  const filterArray = numArray.filter(item => item >= 0);

  if (filterArray.length !== numArray.length) {
    return false;
  }

  return true;
}

// console.log(isPinValid('1234'))// === true
// console.log(isPinValid('098765'))// === true
// console.log(isPinValid('123'))// === false
// console.log(isPinValid('12345'))// === false
// console.log(isPinValid('1234567'))// === false
// console.log(isPinValid('-1234'))// === false
// console.log(isPinValid('1.234'))// === false
// console.log(isPinValid('123e'))// === false

function rakeGarden(garden) {
  // Необов'язкова частина
  // const nothingCount = garden.length + 1;
  // const gravelArray = [];
  // if (garden.trim().length === 0) {
  //   for (let i = 0; i < nothingCount; i++) {
  //     gravelArray.push('gravel');
  //   }
  //   return gravelArray.join(' ');
  // }

  const gardenArray = garden.split(' ');
  const rockArray = [];
  for (const element of gardenArray) {
    if (element === 'rock') {
      rockArray.push('rock');
    } else {
      rockArray.push('gravel');
    }
  }
  
  return rockArray.join(' ');
}

// console.log(rakeGarden(''))// === 'gravel'
// console.log(rakeGarden(' '))// === 'gravel gravel'
// console.log(rakeGarden('gravel rock slug ant gravel snail rock'))

function removeDuplicates(nums) {
  const oneTimeArray = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (oneTimeArray.includes(nums[i])) {
      nums.splice(i, 1);
      i--;
    } else {
      oneTimeArray.push(nums[i]);
    }
  }

  return nums.length;

}

console.log(removeDuplicates([1, 2, 3, 3]))// === 3 // nums = [1, 2, 3]
console.log(removeDuplicates([0, 0, 0, 1, 6, 7, 7]))// === 4 // nums = [0, 1, 6, 7]
console.log(removeDuplicates([-9, -8, -7]))// === 3 // nums = [-9, -8, -7]
console.log(removeDuplicates([4, 4, 4]))// === 1 // nums = [4]


