import * as actionTypes from './actions';


const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    
    switch( action.type ) {
        case actionTypes.INCREMENT:
            return { 
                ...state,
                counter: state.counter + 1  
            }
            
            case actionTypes.DECREMENT:
                return {
                    ...state,
                    counter: state.counter - 1
            }

            case actionTypes.ADD:
                return {  
                    ...state,
                    counter: state.counter + action.value
                }

            case actionTypes.SUBTRACT:
                return {  
                    ...state,
                    counter: state.counter - action.value
                }

            case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    results: state.results.concat({ 
                        id: new Date(), 
                        value: state.counter }) //we want to do a snapshot of the array and push to the results array
                }

            case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
                return {
                    ...state,
                    results: updatedArray
                }
            
                default:
                    // do nothing
        }
        

    return state;    
};

export default reducer;