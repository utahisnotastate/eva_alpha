//import combinereducers
import { combineReducers } from 'redux';

//create a reducer for the fields property of the form
const fields = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            return [
                ...state,
                action.field
            ];
            case 'LOAD_FIELDS':
                return action.fields;
        case 'REMOVE_FIELD':
            return state.filter((field) => field.id !== action.id);
        default:
            return state;
    }
}

//create a reducer for the inputs property of the form
const inputs = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INPUT':
            return [
                ...state,
                action.input
            ];
        case 'REMOVE_INPUT':
            return state.filter((input) => input.id !== action.id);
        default:
            return state;
    }
}

//combine the reducers
const physicalexameditor = combineReducers({  fields, inputs });
export default physicalexameditor;

