import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { AppColors } from '@theme/';

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 30,
    color: AppColors.brand.primary,
    width: 300,
    height: 50,
  },
  inputLine: {
    height: 1,
    backgroundColor: '#979797',
    width: 300,
  },
});


export default function InnerPut({placeholder, onChangeText}) {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
      <View style={styles.inputLine} />
    </View>
  )
}
