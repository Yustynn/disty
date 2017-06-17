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
  input: {
    textAlign: 'center',
    fontSize: 30,
    color: AppColors.brand.primary,
  },
  inputContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  beerText: {
    paddingLeft: 20,
    paddingRight: 20
  },
});

/* Component ==================================================================== */

class Transcation extends Component {
  static componentName = 'Transcation';

  static defaultProps = {
    balance: 0,
    transactionAmt: 0,
  };


  handleChangeText = (t) => {
    this.props.setTransactionAmount(+t + 0.5);
  }

  componentWillUpdate = ({isMatchFound}) => {
    if (isMatchFound) return Actions.matching();
  }

  renderEnterAmount = () => {
    const { balance, transactionAmt } = this.props;
    const headerText = 'How much would you like to withdraw?';

    return (
      <Screen 
        imgSrc={require('../../images/money.png')} 
        headerText={headerText} 
        btnText='Confirm'
        btnOnPress={this.props.setMatching}
      >
        <FormInput
          inputStyle={styles.input}
          containerStyle={styles.inputContainer}
          onChangeText={this.handleChangeText}
        />
        <Text p>+ $0.50 transfer fees</Text>

        <Text p>Total: ${(transactionAmt).toFixed(2)}</Text>
      </Screen>
    )

  }

  renderMatching = () => {
    const headerText = 'Matching your withdrawal request…';

     return (
      <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
         <Spinner isVisible={true} size={100} type='WanderingCubes' color={AppColors.brand.primary}  />
         <Spacer size={40} />
        <Text h2>{headerText}</Text>
         <Spacer size={20} />
        <Text p style={[AppStyles.textCenterAligned, styles.beerText]}>Grab a beer! We’ll send you a notification when we’ve found someone to cash you out!</Text>
        <Spacer size={150} />
      </View>
    )

  }


  render = () => {
    const { isMatching } = this.props;
    return isMatching ? this.renderMatching() : this.renderEnterAmount();
  }
}

/* Export Component ==================================================================== */
export default Transcation;
