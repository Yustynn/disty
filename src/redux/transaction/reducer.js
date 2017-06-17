const initialState = {};

export default function transactionReducer(state=initialState, action) {
  switch (action.type) {
    case 'SET_TRANSACTION_AMOUNT': {
      return {...state, amount: action.amount};
    }
    case 'SET_TRANSACTION_MATCH_FOUND': {
      return {...state, isMatchFound: true};
    }
    case 'SET_TRANSACTION_AWAITING_CASH': {
      return {...state, isAwaitingCash: true};
    }
    case 'SET_TRANSACTION_MATCHING': {
      return {...state, isMatching: true};
    }
    case 'RESET_TRANSACTION': {
      return {...initialState}
    }
    default: {
      return state;
    }
  }
}
