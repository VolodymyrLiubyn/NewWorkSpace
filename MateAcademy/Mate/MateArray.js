
function createArray(N) {
    // write code here
    let numbersArray = [];

    if (N === 0) {
        return numbersArray = []
    }

    for (let i = 1; i <= N; i++) {
        numbersArray.push(i)
    }

    return numbersArray
}

// console.log(createArray(5));

function makeStickers(detailsCount, robotPart) {
    // write code here
    let stickersArray = []

    if (detailsCount === 0) {
        return stickersArray = []
    }

    for (let i = 1; i <= detailsCount; i++) {

        stickersArray.push(`${robotPart}`+ ' detail #' + [i])
    }

    return stickersArray

}

// console.log(makeStickers(2, 'Body'));

function doublePower(currentPowers) {
    // write code here
    let doubleArray = [];
    
    for (let i = 0; i < currentPowers.length ; i++) {

        doubleArray.push(currentPowers[i]*2)
    }

    return doubleArray

  }

//   console.log(doublePower([10, 20, 30, 50]));

function isSorted(boxNumbers) {
    // write code here
    
    for (let i = 0; i < boxNumbers.length ; i++) {

        if (boxNumbers[i] > boxNumbers[i + 1] ) {
            return false
        }
    }

    return true

}

// console.log(isSorted([5, 10, 10, 10, 15]));

function getLocation(coordinates, commands) {
    // write code here
    let coordinatesArray = [];
    coordinatesArray[0] = coordinates [0];
    coordinatesArray[1] = coordinates [1]
    
    for (let i = 0; i < commands.length ; i++) {

        if (commands[i] === 'right') {
            coordinatesArray[0]++
        }
        if (commands[i] === 'left') {
            coordinatesArray[0]--
        }
        if (commands[i] === 'forward') {
            coordinatesArray[1]++
        }
        if (commands[i] === 'back') {
            coordinatesArray[1]--
        }
    }

return coordinatesArray

}

//  console.log(getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']))

function getPlan(startProduction, numberOfMonths, percent) {
    // write code here
    let productionPlanArray = [];

    if (numberOfMonths === 0) {
        return productionPlanArray
    }
    
    productionPlanArray[0] = Math.floor(startProduction *(1 + percent / 100)) 

    for (let i = 1; i < numberOfMonths ; i++) {
        
        productionPlanArray[i] = Math.floor(productionPlanArray[i - 1] *(1 + percent / 100))

    }
    
    return productionPlanArray 
}

// console.log(getPlan(200, 3, 50))

function getSpeedStatistic(testResults) {
    // write code here
    if (testResults.length === 0) {
        return [0, 0, 0]
    }
    
    let minSpeed = testResults[0];
    let maxSpeed = testResults[0];
    let medSpeed = testResults[0];

    let sum = 0;
  
    for (const n of testResults) {
    // додаємо кожне число до суми
    sum += n;

        if (n > maxSpeed) {
            maxSpeed = n
        }
        if (n < minSpeed) {
            minSpeed = n
        }
    }
    
    medSpeed = Math.floor(sum / testResults.length);

    return [minSpeed, maxSpeed, medSpeed]

}

//   console.log(getSpeedStatistic([5, 0, 8, 1]));

function compareRobots(firstRobotResults, secondRobotResults) {
    // write code here
  
    let sumFirstRobot = 0;
  
    for (const n of firstRobotResults) {
    // додаємо кожне число до суми
    sumFirstRobot += n;
    }

    let sumSecondRobot = 0;
  
    for (const m of secondRobotResults) {
    // додаємо кожне число до суми
    sumSecondRobot += m;
    }

    if (sumFirstRobot === sumSecondRobot) {
        return 'Both robots for sale!'
    }
    if (sumFirstRobot > sumSecondRobot) {
        return 'First robot for sale!'
    }
    if (sumFirstRobot < sumSecondRobot) {
        return 'Second robot for sale!'
    }

}

// console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12]));
  

const robot = {
    wheels: 4,
    name: 'roberto',
    serialNumber: 123,
    coords: {
      x: 0,
      y: 0,
    },
    weight: 40,
  }
  
  function omitMethod() {
    /**
     * @param {string[]} keys
     *
     * @returns {Object}
     */
    Object.prototype.omit = function omit(keys) {
      // write code here
      const omitObject = { ...this };
      const delArray = [...keys];
  
      for (const key of delArray) {
        delete omitObject[key];
      }
  
      return omitObject;
    };
  };
  omitMethod()

  const result = robot.omit(['coords', 'wheels', 'weight']);
//console.log(result);
//console.log(robot);

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];


function groupByMethod() {
    /**
     * @param {function} callback
     *
     * @returns {Object}
     */
    Array.prototype.groupBy = function(callback = x => x) {
        const resultObject = {};

        for (const element of this) {
            if (callback(element) in resultObject) {
                resultObject[callback(element)].push(element)
            } else {
                resultObject[callback(element)] = [element];
            }
        }

        return resultObject;
    };
  }
  groupByMethod();

const bob = { type: 'cleaner', name: 'bob' };
const paul = { type: 'cargo', name: 'paul' };
const robert = { type: 'cleaner', name: 'robert' };

const robots = [bob, paul, robert];
const groupedRobots = robots.groupBy(robot => robot.type);

const numbers = [1, 1, 2, 1, 3, 3, 2, 4];
const groupedNumbers = numbers.groupBy()
const grouppedWords = words.groupBy(word => word.length);
// console.log(groupedNumbers);
// console.log(grouppedWords);
// console.log(groupedRobots);


