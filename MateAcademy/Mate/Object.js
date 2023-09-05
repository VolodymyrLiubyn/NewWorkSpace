const users = [
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      lastName: 'Adams',
      fullName: 'Mike Adams',
    },
  ];

  function restoreNames(users) {
    // write code here
  
    users.forEach(element => { element.firstName = element.fullName.split(' ')[0]
     
    });

   return users
  }
  

//   console.log(restoreNames(users));;

const people = [
    { name: 'Emma', gender: 'female', age: 19 },
    { name: 'Avram', gender: 'male', age: 41 },
  ];

  function removeFemaleAges(people) {
    
    people.forEach(element => { 
        if (element.gender === 'female') {
            delete element.age
        };
    })
    return people;
  }

//   console.log(removeFemaleAges(people));

const robots = [
    { coreVersion: 9 },
    { coreVersion: 13 },
    { coreVersion: 16 },
    { coreVersion: 9 },
    { coreVersion: 14 },
  ];

  function getOutdated(robots, newVersion) {
    // write code here

    // let list = Object.entries(robots);
    // let secList = [];
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i][1].coreVersion < newVersion) {
    //         secList.push(+list[i][0])
    //     }
    // }
    // return secList
    let indexes = [];
    for (let i = 0; i < robots.length; i++){
        if (robots[i].coreVersion < newVersion) {
            indexes.push(i)
        }
    }
    return indexes;
  }

//   console.log(getOutdated(robots, 10));

function getTriathlonDistance(distance) {
    // write code here
    let triDistance = {};

    const result = ((Math.round((226.31 - distance) * 100) / 100).toFixed(2));
  
    if (distance === 0) {
      return 'Starting Line... Good Luck!';
    }
  
    if (distance >= 226.31) {
      return 'You\'re done! Stop running!';
    }
  
    if (distance < 3.86) {
      triDistance = { swim: (result + ' to go!') };
    }
  
    if (distance >= 3.86 && distance < 184.11) {
      triDistance = { bike: (result + ' to go!') };
    }
  
    if (distance >= 184.11 && distance < 226.31) {
      triDistance = { run: (result + ' to go!') };
    }
  
    return triDistance;

}

// console.log(getTriathlonDistance(26.31));

const robot = {
    country: 'Ukraine',
    released: true,
    author: null,
  };

  function getRobotSchema(robot) {
    // write code here
    for (let key in robot) {
        robot[key] = typeof (robot[key]);
    }
    return robot
  }
//   console.log(getRobotSchema(robot));

function countBoxes(boxes) {
    // write code here
    let box = {};
    // if (boxes === ''){
    //     return box;
    // }
    let unicString = '';

    for (const num of boxes) {
        if (unicString.includes(num) !== true) {
            unicString = unicString + num
        }
        }
    for (let unic = 0; unic < unicString.length; unic++ ) {
        box[unicString[unic]] = 0;}
 
    for (const key in box) {
        for (let i = 0; i < boxes.length; i++) {
            if (key === boxes[i]) {
                box[key]++;
            }
        }
    }
    return box;

    // const result = {};
    // for (const type of boxes) {
    //     if (!result[type]) {
    //         result[type] = 0;
    //     }
    // result[type]++
    // }
    // return result;

  }
  console.log(countBoxes('gfhg46545454'));


