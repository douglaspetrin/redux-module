const redux = require('redux');

const createStore = redux.createStore;


const initialState = {
    counter: 0
}

// Reducer -> receives two argments: state and action and returns an updated state
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
                counter:   state.counter + action.value
            };

    }

    return state;
};


// Store -> receives the argument rootReducer to create the store
const store = createStore(rootReducer); 
console.log(store.getState());

// Subscription 

store.subscribe(() => {
    console.log('[subscription]:', store.getState());
});

// Dispaching Action "send off"

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

//we will have just 1 reducer 


// LIFECICLY

// -> component -> dispatches -> action -> reaches -> reducer -> updates -> 
// -> central store -> triggers -> automatic subscription -> passes updated state and props -> 