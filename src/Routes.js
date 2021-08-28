import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Boilerplate';
import LearnLanding from './screens/LearnLanding';
import LogNewItem from './screens/LogNewItem';
import Profile from './screens/Profile';
import ElectronicStatus from './screens/ElectronicStatus';
import LearnArticleViewer from './screens/LearnArticleViewer';
import ObjectDetection from './screens/ObjectDetection';
import ViewLog from './screens/ViewLog';

const { Navigator, Screen: TabScreen } = createBottomTabNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <TabScreen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <TabScreen name="Learn" component={LearnLanding} options={{}} />
      <TabScreen name="Log New Electronic" component={LogNewItem} options={{}} />
      <TabScreen name="Profile" component={Profile} options={{}} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
