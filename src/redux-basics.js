const redux = require('redux');
const createStore = redux.createStore;
// Reducer
const rootReducer = (state, action) => {
    return state; /// just returning old state
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());





// Action

// Dispatching Action

// Subscription