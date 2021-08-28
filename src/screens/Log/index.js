import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewLogLanding from './ViewLogLanding';
import ElectronicStatus from './ElectronicStatus';
import ObjectDetection from './ObjectDetection';
import LogNewItem from './LogNewItem';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Log = () => (
  <StackNavigator
    initialRouteName="ViewLogLanding"
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackScreen
      name="ViewLogLanding"
      component={ViewLogLanding}
      options={{ title: 'Electronic Logs' }}
    />
    <StackScreen name="ElectronicStatus" component={ElectronicStatus} />
    <StackScreen name="LogNewItem" component={LogNewItem} />
    <StackScreen name="ObjectDetection" component={ObjectDetection} />
  </StackNavigator>
);

export default Log;
