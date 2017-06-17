/**
 * App Theme - Colors
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

const app = {
  background: 'white',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
};

const brand = {
  brand: {
    primary: '#9CB67F',
    secondary: '#2073D5'
  },
};

const text = {
  textPrimary: '#707070',
  textSecondary: '#777777',
  headingPrimary: '#707070',
  headingSecondary: brand.brand.primary,
};

const borders = {
  border: '#D0D1D5',
};

const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

const others = {
};

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
};
