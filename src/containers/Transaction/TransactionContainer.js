import { connect } from 'react-redux';

// Actions
import * as TransactionActions from '@redux/transaction/actions';

// The component we're mapping to
import TransactionView from './TransactionView';

// What data from the store shall we send to the component?
const mapStateToProps = ({transaction}) => ({
  transactionAmt: transaction.amount,
  isMatching: transaction.isMatching,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  setTransactionAmount: TransactionActions.setAmount,
  setMatching: TransactionActions.setMatching,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionView);
