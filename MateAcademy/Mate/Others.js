
function getPeopleNames(people) {
  // write code here
  return people.map(item => {
    return item.name;
  });
}

function getPeopleLifeDurations(people) {
  // write code here
  return people.map(item => {
    return item.died - item.born;
  });
}

function getFather(people, person) {
  // write code here
  const father = people.filter(item => item.name === person.father);

  return father[0] || null;
}

function getWomenDiedBefore1800(people) {
  // write code here
  return people.filter(item => item.sex === 'f'
  && item.died < 1800);
}

function getPeopleLivedMin65Years(people) {
  // write code here
  return people.filter(item => item.died - item.born >= 65);
}

function sortByBorn(people) {
  // write code here
  const yearOfborn = [...people];

  return yearOfborn.sort((a, b) => a.born - b.born);
}


function sortByLifeDuration(people) {
  // write code here
  const lifeDuration = [...people];

  return lifeDuration.sort((a, b) => ((a.died - a.born) - (b.died - b.born)));
};

function getChildren(people, person) {
  // write code here
  return people.filter(item => item.mother === person.name
  || item.father === person.name);
}

// const carolus = { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
// const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
// const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
// const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

// const people = [carolus, emma, maria, carel];

function createLivedMinFilter(age) {
  // write code here
  function back(item) {
    if (item.died - item.born >= age) {
      return true;
    }

    return false;
  }

  return back;
}
// const callback = createLivedMinFilter(60);

// console.log(people.filter(callback)); // [carolus, emma]
// console.log(people);


function createSorterBy(field) {
  // write code here
  //   function mysort(a, b) {
  //     if (field in a) {
  //       let c = a[field];
  //       let d = b[field];
  //       if (typeof(c) === 'number') {
  //         return c - d;
  //       }
        
  //       return c.localeCompare(d)
  //     }

  // }

  // return mysort;
  return (a, b) => {
    if (typeof(a[field]) === 'number') {
      return a[field] - b[field];
    }

    return a[field].localeCompare(b[field])
  }
}

const carolus = { name: 'Carolus Haverbeke', sex: 'm', born: 1832, died: 1905 };
const emma = { name: 'Emma de Milliano', sex: 'f', born: 1876, died: 1956 };
const maria = { name: 'Maria de Rycke', sex: 'f', born: 1683, died: 1724 };
const carel = { name: 'Carel Haverbeke', sex: 'm', born: 1796, died: 1837 };

const people = [carolus, emma, maria, carel];

// people.sort(createSorterBy('name')); // [carel, carolus, emma, maria]
console.log(people);
// console.log(people.sort((a, b) => a.born - b.born));
// console.log(people.sort((a, b) => a.name.localeCompare(b.name)) );
// console.log(people.sort((a, b) => a.died - b.died));
console.log(people.sort(createSorterBy('name')));





