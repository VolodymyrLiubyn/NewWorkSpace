const queue = [
  {type: 'robot'},
  {type: 'robot'},
  {type: 'robot'},
  {type: 'dog'},
  {type: 'robot'},
 ];
 
 const isRobot = (robot) => {
  if (robot.type === 'robot') {
    return true;
  }
 
  return false;
 }

 function processArray(items, callback) {
  // write code here
  for (let i = 0; i < items.length; i++) {
    items[i] = callback(items[i]);
  }
}

// console.log(processArray(queue, isRobot));

const getClientStatus = () => 'vip';
const offerLuxuriousRoom = () => 'Luxury room';
const offerStandardRoom = () => 'Standard room';


function offerRoom(
  getClientStatus,
  offerStandardRoom,
  offerLuxuriousRoom,
) {
  // write code here
  if (getClientStatus() === 'vip') {
    return offerLuxuriousRoom();
  }

  return offerStandardRoom();
}

// console.log(offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom));

const people = [
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
  { id: 204, firstName: 'Lieven', lastName: 'Causmaecker' },
  { id: 205, firstName: 'Maria', lastName: 'Sturm' },
 ];

 function getEmployeesList(people) {
  // write code here
  const fullNameArray = [];

  for (const worker of people) {
    fullNameArray.push(worker.firstName + ' ' + worker.lastName);
  }

  return fullNameArray.sort();
}

// console.log(getEmployeesList(people));

const input = [
  ['Mike', 'Anderson'],
  ['Lori IV', 'Pirs'],
]

const mapDatabase = (input) => {
  // write code here
  const outputArray = [];

  for (const name of input) {
    outputArray.push(
      {
        firstName: name[0], lastName: name[1],
      });
  }

  return outputArray;
};


// console.log(mapDatabase(input));

const friends = [
  { firstName: 'Lee', lastName: 'Haverbeke' },
  { firstName: 'Clara', lastName: 'Aernoudts' },
  { firstName: 'Jan', lastName: 'Rycke' },
  { firstName: 'Anna', lastName: 'Bernardus' },
 ];

 function filterPeople(people) {
  // write code here
  return people.filter(item => item.firstName.length <= 4
    && item.lastName.length > 8);
  
}

// console.log(filterPeople(friends));

lines = ['CAT', 'CAT', 'DOG'];
rotors = [[1, 13, 27], [1, 13, 27], [1, 13, 27]];

function flapDisplay(lines, rotors) {
  const finalArray = [];

  for (let m = 0; m < lines.length; m++) {
    const linesString = lines[m];
    const rotorArray = rotors[m];
    const defString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';
    let variableString = '';
    const displayArray = [rotorArray[0]];
    const displaySymbols = [];

    for (let k = 1; k < rotorArray.length; k++) {
      displayArray.push(rotorArray[k] + displayArray[k - 1]);
    };

    const normalArray = [];

    for (const num of displayArray) {
      let partNumber = num;

      while (partNumber >= defString.length) {
        partNumber -= defString.length;
      }
      normalArray.push(partNumber);
    }

    for (let i = 0; i < linesString.length; i++) {
      for (let j = 0; j < defString.length; j++) {
        if (defString[j] === linesString[i]) {
          variableString = defString.slice(j) + defString.slice(0, j);
          displaySymbols.push(variableString[normalArray[i]]);
        }
      }
    }

    finalArray.push(displaySymbols.join(''));
  }

  return finalArray;
}

// console.log(flapDisplay(lines, rotors));

const nums = [3, 7, [2, 1, 0], -3, 6, [8]];

function flattenAndSort(nums) {
  const rightArray = [];

  for (const num of nums) {
    if (
      typeof
      (num) === 'number') {
      rightArray.push(num);
    } else {
      for (const n of num) {
        rightArray.push(n);
      }
    }
  }

  return rightArray.sort(function(a, b) {
    return a - b;
  });
}

// console.log(flattenAndSort(nums));

const knightPosition = [3, 'B'];
const bishopPosition = [5, 'C'];

function getWinner(knightPosition, bishopPosition) {
  const lettersObject = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const startKnPos = [knightPosition[0],
    lettersObject.indexOf(knightPosition[1])];
  const knPos1 = [startKnPos[0] + 1, startKnPos[1] - 2];
  const knPos2 = [startKnPos[0] + 1, startKnPos[1] + 2];
  const knPos3 = [startKnPos[0] + 2, startKnPos[1] - 1];
  const knPos4 = [startKnPos[0] + 2, startKnPos[1] + 1];
  const knPos5 = [startKnPos[0] - 1, startKnPos[1] - 2];
  const knPos6 = [startKnPos[0] - 1, startKnPos[1] + 2];
  const knPos7 = [startKnPos[0] - 2, startKnPos[1] - 1];
  const knPos8 = [startKnPos[0] - 2, startKnPos[1] + 1];
  const knightPositionArray = [knPos1, knPos2, knPos3, knPos4, knPos5,
    knPos6, knPos7, knPos8];

  function checkFisrtPos(firstPos) {
    for (let i = 0; i < firstPos.length; i++) {
      if (firstPos[i][0] < 1 || firstPos[i][0] > 8) {
        firstPos.splice(i, 1);
        i--;
      }
    }
  }

  function checkSecondPos(secondPos) {
    for (let j = 0; j < secondPos.length; j++) {
      if (secondPos[j][1] < 0 || secondPos[j][1] > 7) {
        secondPos.splice(j, 1);
        j--;
      }
    }
  }

  checkFisrtPos(knightPositionArray);

  checkSecondPos(knightPositionArray);

  function transformation(position) {
    return [position[0], lettersObject[position[1]]].join('');
  }

  const kPosArray = knightPositionArray.map(item => transformation(item));

  if (kPosArray.includes(bishopPosition.join(''))) {
    return 'Knight';
  }

  const startBisPos = [bishopPosition[0],
    lettersObject.indexOf(bishopPosition[1])];

  const bishopPositionArray = [];
  let count = 1;

  while (count <= 8) {
    bishopPositionArray.push([startBisPos[0] + count, startBisPos[1] + count]);
    count++;
  }

  count = 1;

  while (count <= 8) {
    bishopPositionArray.push([startBisPos[0] + count, startBisPos[1] - count]);
    count++;
  }

  count = 1;

  while (count <= 8) {
    bishopPositionArray.push([startBisPos[0] - count, startBisPos[1] + count]);
    count++;
  }

  count = 1;

  while (count <= 8) {
    bishopPositionArray.push([startBisPos[0] - count, startBisPos[1] - count]);
    count++;
  }

  checkFisrtPos(bishopPositionArray);

  checkSecondPos(bishopPositionArray);

  const bPosArray = bishopPositionArray.map(item => transformation(item));

  if (bPosArray.includes(knightPosition.join(''))) {
    return 'Bishop';
  }

  return 'None';
}

// console.log(getWinner(knightPosition, bishopPosition));

function isToday(date) {
  let now = new Date();
  if ((now.getFullYear() + now.getMonth() + now.getDate())
  === (date.getFullYear() + date.getMonth() + date.getDate())) {
    return true;
  }

  return false;
}



function switchLights(lights, n) {

}


