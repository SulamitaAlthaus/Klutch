import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [{
        idTable: 1,
        filter: ""
    }],
    user: [],
    card: [],
    table: [""]

};

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_DATA':
            return {...state, data: [action.installment]};
        case 'ADD_USER':
            return {...state, user: [action.save]};
        case 'ADD_CARD':
            return {...state, card: [action.saveCard]};
        case 'ADD_TABLE':
            return {...state, table: [action.saveTable]};
        case 'ADD_CONTRACT':
            return {...state, contract: [action.saveTypeContract]};
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store; 