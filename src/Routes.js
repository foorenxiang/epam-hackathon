import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Boilerplate';
import Learn from './screens/Learn';
import Log from './screens/Log';
import Profile from './screens/Profile';
import AppContext from './utils/AppContext';

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();

const MainScreen = () => (
  <TabNavigator initialRouteName="Home">
    <TabScreen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
    <TabScreen name="Log" component={Log} options={{}} />
    <TabScreen name="Learn" component={Learn} options={{}} />
    <TabScreen name="Profile" component={Profile} options={{}} />
  </TabNavigator>
);

const Routes = () => {
  const { headerTitle } = useContext(AppContext);

  return (
    <NavigationContainer>
      <DrawerNavigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <DrawerScreen name="Main" component={MainScreen} options={{ title: headerTitle }} />
        <DrawerScreen name="Log" component={Log} options={{}} />
        <DrawerScreen name="Learn" component={Learn} options={{}} />
        <DrawerScreen name="Profile" component={Profile} options={{}} />
      </DrawerNavigator>
    </NavigationContainer>
  );
};

export default Routes;
