import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Button, Spacer, Text, FullButton } from '@ui/';

import { FormInput } from 'react-native-elements';
import Screen from '@components/general/Screen';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.background,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  container: {
    paddingTop: 40
  },
  whiteText: {
    color: '#FFF',
  },
  beerText: {
    paddingLeft: 20,
    paddingRight: 20
  },
});

/* Component ==================================================================== */

class Matching extends Component {
  static componentName = 'Transcation';

  static defaultProps = {
    balance: 0,
    transactionAmt: 0,
  };


  handleChangeText = (t) => {
    this.props.setTransactionAmount(+t + 0.5);
  }

  handleCollectedCash = () => {
    const {transactionAmt, balance, resetTransaction, setBalance} = this.props;
    const newBalance = balance - transactionAmt;
    setBalance(newBalance);
    Actions.success({
      headerText: `$${(transactionAmt-0.5).toFixed(2)} withdrawn!`, 
      balance: newBalance,
    });
    resetTransaction()
  }

  render = () => {
    const {balance, transactionAmt, setAwaitingCash, isAwaitingCash} = this.props;

    const headerText = isAwaitingCash ? 'Collect your Cash!' : 'We found you an ATM!'; 
    const transDisp = [transactionAmt-0.5, transactionAmt].map(t=>'$'+t.toFixed(2));

     return (
       <View style={[AppStyles.containerCentered, AppStyles.container, styles.container]}>
         <Screen
           headerText={headerText}
           imgSrc={require('../../images/atm.png')}
           btnText={isAwaitingCash ? 'I Got My Cash!' : 'Confirm Meetup'}
           btnOnPress={isAwaitingCash ? this.handleCollectedCash : setAwaitingCash}
         >
           <Text>Location: Blk 71 Ayer Rajah, #03-24</Text>
           <Text>Amount: {transDisp[0]} ({transDisp[1]} total)</Text>
         </Screen>
       </View>
     )

  }
}

/* Export Component ==================================================================== */
export default Matching;
