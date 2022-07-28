import { combineReducers } from 'redux';

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

const reviewofsystemseditor = combineReducers({ fields, inputs });

export default reviewofsystemseditor;