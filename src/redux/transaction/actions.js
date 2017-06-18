export const setAmount = (str) => {
  return dispatch => dispatch({type: 'SET_TRANSACTION_AMOUNT', amount: +str})
}

export const setMatching = () => dispatch => {
  dispatch({type: 'SET_TRANSACTION_MATCHING'})
  setTimeout(() => dispatch({type: 'SET_TRANSACTION_MATCH_FOUND'}), 10000)
}

export const setAwaitingCash = () => dispatch => {
  dispatch({type: 'SET_TRANSACTION_AWAITING_CASH'})
}

export const reset = () => dispatch => {
  dispatch({type: 'RESET_TRANSACTION'})
}
