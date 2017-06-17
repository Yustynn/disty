import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Button, Spacer, Text, FullButton } from '@ui/';
import Screen from '@components/general/Screen';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.background,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    height: AppSizes.screen.width * 0.25,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */

class Home extends Component {
  static componentName = 'Home';

  handleOnPress = () => Actions.transaction() && console.log('hmm');

  render = () => {
    const balance = this.props.balance || 0;
    const headerText = "Ahnaf! It's good to see you again.";

    return (
      <Screen headerText={headerText} btnOnPress={this.handleOnPress} imgSrc={require('../../images/smiley.png')} btnText='Make a Withdrawal'>

        <Text p>Current Balance: ${balance.toFixed(2)}</Text>

      </Screen>
    )
  }
}

/* Export Component ==================================================================== */
export default Home;
