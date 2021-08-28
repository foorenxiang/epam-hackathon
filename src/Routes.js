import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Boilerplate';
import Learn from './screens/Learn';
import Log from './screens/Log';
import Profile from './screens/Profile';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <TabNavigator initialRouteName="Home">
      <TabScreen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <TabScreen name="Log" component={Log} options={{}} />
      <TabScreen name="Learn" component={Learn} options={{}} />
      <TabScreen name="Profile" component={Profile} options={{}} />
    </TabNavigator>
  </NavigationContainer>
);

export default Routes;
