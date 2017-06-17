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
    width: AppSizes.screen.width * 0.25,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Screen extends Component {
  render = () => {
    const {headerText, hideBtn, imgSrc, children, btnText, btnOnPress} = this.props;
    const btn = hideBtn ? undefined : (<FullButton text={btnText || ''} onPress={btnOnPress} />);

    return (
      <View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
        <Image
          source={imgSrc}
          style={[styles.image]}
        />

        <Spacer size={20} />

        <Text h2>{headerText}</Text>
        {children}
        <Spacer size={150} />

        {btn}

      </View>
    )
  }
}

export default Screen;
