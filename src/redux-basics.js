const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state; /// just returning old state
};

// Store
const store = createStore(rootReducer);
console.log("Store : ", store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
}); // arg is a function that is executed whenever store is updated

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log("After dispatched and subscribed: ", store.getState());

