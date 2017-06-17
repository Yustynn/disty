import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, FullButton } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  image: {
    height: AppSizes.screen.width * 0.40,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },


  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  },

  balance: {
    color: '#FFF',
  },

  header: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Screen extends Component {
  render = () => {
    const {headerText, balance} = this.props;

    return (
      <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
        <Icon 
          name='close' 
          color={AppColors.brand.primaryLight} 
          size={30}
          containerStyle={styles.icon}
        />
        <Image
          source={require('../../images/success.png')}
          style={styles.image}
        />
        <Text style={styles.header}>{headerText}</Text>
        <Spacer size={40} />
        <Text style={styles.balance}>New balance: ${(balance || 0).toFixed(2)}</Text>
        <Spacer size={80} />
      </View>
    )
  }
}

export default Screen;
