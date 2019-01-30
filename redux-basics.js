const redux = require('redux');

const createStore = redux.createStore;


const initialState = {
    counter: 0
}

// Reducer -> receives two argments: state and action and returns an updated state
const rootReducer = (state = initialState, action) => {
    return state;
};

// Store -> receives the argument rootReducer to create the store
const store = createStore(rootReducer); 
console.log(store.getState());

// Dispaching Action

// Subscription 

//we will have just 1 reducer 