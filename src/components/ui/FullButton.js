import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

// Consts and Libs
import { AppColors, AppFonts, AppSizes } from '@theme/';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.brand.primary,
    padding: 30,
    position: 'absolute',
    bottom: 0,
    width: AppSizes.screen.width,
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
}); 
/* Component ==================================================================== */
function CustomButton({onClick, text}) {
  return (
    <TouchableOpacity onClick={onClick} style={styles.container}>
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

/* Export Component ==================================================================== */
export default CustomButton;
