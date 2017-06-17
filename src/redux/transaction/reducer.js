const initialState = {};

export default function transactionReducer(state=initialState, action) {
  switch (action.type) {
    case 'SET_TRANSACTION_AMOUNT': {
      return {...state, amount: action.amount};
    }
    case 'SET_TRANSACTION_MATCHING': {
      return {...state, isMatching: true};
    }
    default: {
      return state;
    }
  }
}
