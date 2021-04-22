import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
    user: [{
        name: "",
        id: ""
    }]
};

function dataLoan(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_DATA':
            return {data: [action.installment], user: [action.save]};
        default:
            return state;
    }
}

const store = createStore(dataLoan);

export default store; 