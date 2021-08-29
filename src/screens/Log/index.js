import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewLogLanding from './ViewLogLanding';
import ItemView from './ItemView/index';
import RecycleConfirmation from '../Recycle/RecycleConfirmation';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Log = () => {
  return (
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
      <StackScreen name="ItemView" component={ItemView} />
      <StackScreen name="RecycleConfirmation" component={RecycleConfirmation} />
    </StackNavigator>
  );
};

export default Log;
