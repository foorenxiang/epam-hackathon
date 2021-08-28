import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenTabs from './screens/Home';
import Learn from './screens/Learn';
import Log from './screens/Log';
import Profile from './screens/Profile';
import AppContext from './utils/AppContext';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();

const MainScreen = () => {
  const { headerTitle } = useContext(AppContext);
  return (
    <StackNavigator initialRouteName="HomeScreenTabs" screenOptions={{ title: headerTitle }}>
      <StackScreen name="HomeScreenTabs" component={HomeScreenTabs} />
      <StackScreen name="Log" component={Log} />
      <StackScreen name="Learn" component={Learn} />
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
      <DrawerScreen name="Main" component={MainScreen} />
      <DrawerScreen name="Log" component={Log} options={{}} />
      <DrawerScreen name="Learn" component={Learn} options={{}} />
      <DrawerScreen name="Profile" component={Profile} options={{}} />
    </DrawerNavigator>
  </NavigationContainer>
);

export default Routes;
