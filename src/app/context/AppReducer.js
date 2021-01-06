import {AddTransactionAction, DeleteTransactionAction} from '../ActionsTypes'

const AppReducer = (state, action) => {
    switch (action.type) {
        case DeleteTransactionAction:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            };
        case AddTransactionAction:
            return {
                ...state,
                transactions: [action.payload].concat(state.transactions)
            };
        default:
            return state
    }

};

export default AppReducer;
