import { connect } from 'react-redux';

// Actions
import { setBalance } from '@redux/user/actions';

// The component we're mapping to
import TopUpView from './TopUpView';

// What data from the store shall we send to the component?
const mapStateToProps = ({user}) => ({
  balance: user.balance,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  setBalance
};

export default connect(mapStateToProps, mapDispatchToProps)(TopUpView);
