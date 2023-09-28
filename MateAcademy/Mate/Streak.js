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


