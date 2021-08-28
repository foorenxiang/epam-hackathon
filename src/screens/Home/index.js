import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log from '../Log';
import Learn from '../Learn';
import Profile from '../Profile';
import HomeLanding from './HomeLanding';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

const HomeScreen = () => (
  <StackNavigator
    initialRouteName="HomeLanding"
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackScreen name="HomeLanding" component={HomeLanding} />
  </StackNavigator>
);

const HomeScreenTabs = () => (
  <TabNavigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <TabScreen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
    <TabScreen name="Log" component={Log} options={{}} />
    <TabScreen name="Learn" component={Learn} options={{}} />
    <TabScreen name="Profile" component={Profile} options={{}} />
  </TabNavigator>
);

export default HomeScreenTabs;
