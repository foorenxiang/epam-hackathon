import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnTabs from './screens/Learn';
import Locate from './screens/Locate';
import Log from './screens/Log';
import Profile from './screens/Profile';
import AppContext from './utils/AppContext';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();

const MainStackNavigation = () => {
  const { headerTitle } = useContext(AppContext);
  return (
    <StackNavigator initialRouteName="LearnTabs" screenOptions={{ title: headerTitle }}>
      <StackScreen name="LearnTabs" component={LearnTabs} />
      <StackScreen name="Locate" component={Locate} />
      <StackScreen name="Log" component={Log} />
      <StackScreen name="Profile" component={Profile} />
    </StackNavigator>
  );
};

const Routes = () => (
  <NavigationContainer>
    <DrawerNavigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrawerScreen name="Main" component={MainStackNavigation} />
      <DrawerScreen name="Locate" component={Locate} options={{}} />
      <DrawerScreen name="Log" component={Log} options={{}} />
      <DrawerScreen name="Profile" component={Profile} options={{}} />
    </DrawerNavigator>
  </NavigationContainer>
);

export default Routes;
