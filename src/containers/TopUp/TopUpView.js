import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { InnerPut, Spacer, Text } from '@ui/';

import { FormInput} from 'react-native-elements';
import Screen from '@components/general/Screen';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.background,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */

class TopUp extends Component {
  static componentName = 'Transcation';

  static defaultProps = {
    balance: 0,
  };

  handleChangeText = (t) => {
    const {balance, setBalance} = this.props;
    console.log(t.length);
    if (t.length > 11) {
      const newBalance = balance + 25;
      setBalance(newBalance);
      Actions.success({
        headerText: 'Successfully deposited $25.00!',
        balance: newBalance
      }); 
    }
  }

  componentWillUpdate = ({isMatchFound}) => {
    if (isMatchFound) return Actions.matching();
  }

  render = () => {
    const { balance } = this.props;

    return (
      <Screen 
        btnText='Top Up!'
        btnOnPress={this.props.setMatching}
      >
        <InnerPut onChangeText={this.handleChangeText} />
        <Text p>Current Balance: ${(balance)}</Text>
      </Screen>
    )
  }
}

/* Export Component ==================================================================== */
export default TopUp;
