import { connect } from 'react-redux';

// Actions
import * as TransactionActions from '@redux/transaction/actions';
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import MatchingView from './MatchingView';

// What data from the store shall we send to the component?
const mapStateToProps = ({transaction, user}) => ({
  balance: user.balance,
  transactionAmt: transaction.amount,
  isAwaitingCash: transaction.isAwaitingCash,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  setAwaitingCash: TransactionActions.setAwaitingCash,
  resetTransaction: TransactionActions.reset,
  setBalance: UserActions.setBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchingView);
