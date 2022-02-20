// Reducer => function that takes in the old state and an action => new state

let transactions;

const contextReducer = (state, action) => {
    if (action.type === 'DELETE_TRANSACTION') {
        transactions = state.filter((t) => t.id !== action.payload);
        // storing in local storage
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    } else if (action.type === 'ADD_TRANSACTION') {
        transactions = [action.payload, ...state];
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
    }
}

export default contextReducer;