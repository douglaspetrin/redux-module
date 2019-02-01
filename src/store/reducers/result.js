import * as actionTypes from '../actions/actions';


const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    
    switch( action.type ) {
            case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    results: state.results.concat({ 
                        id: new Date(), 
                        value: action.result }) //we want to do a snapshot of the array and push to the results array
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