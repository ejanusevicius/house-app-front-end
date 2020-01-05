import initialState from './initialState';
import actions from '../actions/actions';

const reducer = (state = initialState, action) => {

    switch(true) {
        case action.type === actions.TOGGLE_LOADING: {

            //duplicate the state
            const newState = { ...state };

            //toggle new state
            newState.loading = !newState.loading;

            // return new state
            return newState;
        }
        case action.type === actions.UPDATE_HOUSES: {

            if (action.payload !== null) {
                const newState = { ...state };
                newState.houses = action.payload;
                return newState;
            }

            break;


        }
        case action.type === actions.SET_HOUSE_TOTAL: {

            if (action.payload !== null) {
                const newState = { ...state };
                newState.houseTotal = action.payload;
                return newState;
            }
            break;

        }
        case action.type === actions.TOGGLE_MODAL: {
            
            const newState = { ...state };

            newState.modalOn = !newState.modalOn;

            return newState;


        }
        case action.type === actions.SET_UNIQUE_YEARS: {

            if (action.payload !== null) {
                const newState = { ...state };
                newState.uniqueYears = action.payload;
                return newState;
            }
            break;
        }
        case action.type === actions.SET_FILTER_STRING: {

            if (action.payload !== null) {
                const newState = { ...state };
                newState.filterString = action.payload;
                return newState;
            }
            break;
        }
        case action.type === actions.SET_FILTER_CONFIGURATION: {

            if (action.payload !== null) {
                const newState = { ...state };
                newState.filterConfiguration = action.payload;
                return newState;
            }
            break;
        }
    }

    return state;
}

export default reducer;