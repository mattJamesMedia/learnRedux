// a reducer takes 2 things
//1. thie action (info about what happened)
//2. a copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;