const state = {
  foo: 'bar', bar: 'foo',
};

function transformStateWithClones(state, actions) {
  const stateCopy = { ...state }
  let stateArray = []
  for (const action of actions) {
    transform(stateCopy, action);
    const varState = { ...stateCopy }
    stateArray.push(varState)
   }
  return stateArray
}

function transform(state, action) {
  switch (action.type) {
    case 'addProperties':
      Object.assign(state, action.extraData);
      break;
    case 'removeProperties': {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
      break;
    }
    case 'clear': {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
      break;
    }
  }
}

console.log(transformStateWithClones(state, [
  {
    type: 'addProperties',
    extraData: {
      name: 'Jim', hello: 'world',
    },
  },
  {
    type: 'removeProperties', keysToRemove: ['bar', 'hello'],
  },
  {
    type: 'addProperties', extraData: { another: 'one' },
  },
]));