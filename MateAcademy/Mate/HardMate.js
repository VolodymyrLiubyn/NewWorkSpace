const people = [
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
 ];


 function getPersonById(id, people) {
  // write code here
  return people.find(item => item.id === id) || null;
}
// console.log(getPersonById(101, people));

const getPersonIndex = (people, nameEndsWith) => {
  // write code here
  const indexOfPeople
  = people.findIndex(user => user.firstName.endsWith(nameEndsWith));

  if (indexOfPeople === -1) {
    return null;
  }

  return indexOfPeople;
};

// console.log(getPersonIndex(people, 'a'));

const items = [1, 2, 3, 4, 5, 6, 7];

function getPermutation(items, k) {
  const variabArray = [...items];

  function resortArray(count, item) {
    let firstCounter = count;

    while (firstCounter > 0) {
      item.push(item.shift());
      firstCounter--;
    }
  }
  resortArray(k - 1, variabArray);

  let someCounter = items.length;

  const deleteArray = [];

  while (someCounter > 0) {
    deleteArray.push(variabArray.shift());
    resortArray(k - 1, variabArray);
    someCounter--;
  }

  return deleteArray;
}
// console.log(getPermutation(items, 3));

const robots = [
  {name: 'Kobs', ver: 16},
  {name: 'Lari', ver: 32},
  {name: 'Lee', ver: 1},
  {name: 'Robert', ver: 1},
  {name: 'Viber', ver: 4},
  {name: 'Colins', ver: 21},
 ]

 function sortRobotsByVersion(robots) {
  // write code here
  robots.sort((a, b) => b.ver - a.ver);

  return robots;
}
// console.log(sortRobotsByVersion(robots));

const ages = [18, 14, 22, 34, 43, 18, 20, 34, 24]

function getAverageAge(ages) {
  // write code here
  let result = ages.reduce((sum, current) => sum + current, 0);

  return Math.round(result / ages.length || 0);
}

// console.log(getAverageAge(ages));

