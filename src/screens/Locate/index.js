import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocateLanding from './LocateLanding';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Locate = () => (
  <StackNavigator
    initialRouteName="LocateLanding"
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackScreen name="LocateLanding" component={LocateLanding} />
  </StackNavigator>
);

export default Locate;
