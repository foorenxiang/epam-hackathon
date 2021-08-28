import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ObjectDetection from './ObjectDetection';
import RecycleForm from './RecycleForm';
import RecycleConfirmation from './RecycleConfirmation';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Recycle = () => {
  return (
    <StackNavigator
      initialRouteName="ObjectDetection"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackScreen name="ObjectDetection" component={ObjectDetection} />
      <StackScreen name="RecycleForm" component={RecycleForm} />
      <StackScreen name="RecycleConfirmation" component={RecycleConfirmation} />
    </StackNavigator>
  );
};

export default Recycle;
