import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [{
        idTable: 0
    }],
    user: [],
    card: []

};

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_DATA':
            return {...state, data: [action.installment]};
        case 'ADD_USER':
            return {...state, user: [action.save]};
        case 'ADD_CARD':
            return {...state, card: [action.saveCard]};
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store; 