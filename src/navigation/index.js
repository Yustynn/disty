/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import ConfirmScreen from '@components/general/ConfirmScreen';
import AuthScenes from './auth';
import TabsScenes from './tabs';

import Matching from '@containers/Transaction/MatchingContainer';
import Home from '@containers/Home/HomeContainer';
/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'main'} component={Drawer} initial={'tabBar'}>
        {/* Tabbar */}
        {TabsScenes}
      </Scene>
      {/* General */}
      <Scene
        clone
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
        analyticsDesc={'Placeholder: Coming Soon'}
      />
      <Scene
        key={'success'}
        title={'Success!'}
        component={ConfirmScreen}
        analyticsDesc={'Placeholder: Coming Soon'}
      />
      <Scene
        key={'matching'}
        title={'Matching'}
        component={Matching}
        analyticsDesc={'Placeholder: Coming Soon'}
      />
    </Scene>
  </Scene>,
);
