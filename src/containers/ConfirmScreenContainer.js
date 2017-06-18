import { connect } from 'react-redux';

// Actions
import { reset } from '@redux/transaction/actions';

// The component we're mapping to
import ConfirmScreen from '@components/general/ConfirmScreen';

// What data from the store shall we send to the component?
const mapStateToProps = ({user}) => ({
  balance: user.balance
});

// Any actions to map to the component?
const mapDispatchToProps = {
  resetTransaction: reset
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmScreen);
