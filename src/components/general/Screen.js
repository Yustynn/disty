import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, FullButton } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.background,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  image: {
    height: AppSizes.screen.width * 0.25,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Screen extends Component {
  render = () => {
    const {imgSrc, children, btnText, btnOnClick} = this.props;

    return (
      <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
        <Image
          source={imgSrc}
          style={[styles.image]}
        />

        <Spacer size={20} />

        {children}

        <Spacer size={40} />

        <FullButton text={btnText || ''} onClick={btnOnClick} />

      </View>
    )
  }
}

export default Screen;
