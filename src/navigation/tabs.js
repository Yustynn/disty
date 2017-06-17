/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

import Home from '@containers/Home/HomeContainer';
import Transaction from '@containers/Transaction/TransactionContainer';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
 
    <Scene
      key={'home'}
      {...navbarPropsTabs}
      title={'Home'}
      component={Home}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'ios-home-outline' })}
      analyticsDesc={'Placeholder: Coming Soon'}
   />

   <Scene
      {...navbarPropsTabs}
      key={'transaction'}
      component={Transaction}
      analyticsDesc={'Recipes: Browse Recipes'}
      title={'Transaction Request'}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'md-cash' })}
    />

    <Scene
      key={'topUp'}
      {...navbarPropsTabs}
      title={'Top Up'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'ios-add' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Transaction Log'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'ios-paper-outline' })}
      analyticsDesc={'Error: Example Error'}
    />

    <Scene
      key={'styleGuide'}
      {...navbarPropsTabs}
      title={'Style Guide'}
      component={StyleGuide}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'ios-navigate-outline' })}
      analyticsDesc={'StyleGuide: Style Guide'}
    />
  </Scene>
);

export default scenes;
