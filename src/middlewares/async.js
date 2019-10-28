// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {

//     };
//   };
// }

export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise to its payload property
  if (!action.payload || !action.payload.then) {
    // If it doesn't, then send the action on to the next middleware
    return next(action);
  }
  // If it does, then wait for it to resolve
  // We want to wait for te promise to resolve
  // Get its data and then create a new action with that data and dispatch it
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
