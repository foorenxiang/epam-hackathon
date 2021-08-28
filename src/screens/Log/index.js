import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import ViewLogLanding from './ViewLogLanding';
import ElectronicStatus from './ElectronicStatus';
import ObjectDetection from './ObjectDetection';
import LogNewItem from './LogNewItem';
// import ItemView from './ItemView/original_index';
import ItemView from './ItemView/index';
import RecycleConfirmation from './RecycleConfirmation';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Log = () => {
  // const logs = useSelector((state) => state.logs);
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
      <StackScreen name="ElectronicStatus" component={ElectronicStatus} />
      <StackScreen name="LogNewItem" component={LogNewItem} />
      <StackScreen name="ObjectDetection" component={ObjectDetection} />
      {/* {logs.map((item) => (
        <StackScreen name={item.title} component={ItemView} key={item.id} />
      ))} */}
      <StackScreen name="ItemView" component={ItemView} />
      <StackScreen name="RecycleConfirmation" component={RecycleConfirmation} />
    </StackNavigator>
  );
};

export default Log;
