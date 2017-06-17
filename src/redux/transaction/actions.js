export const setAmount = (str) => {
  return dispatch => dispatch({type: 'SET_TRANSACTION_AMOUNT', amount: +str})
}

export const setMatching = () => dispatch => dispatch({type: 'SET_TRANSACTION_MATCHING'});
