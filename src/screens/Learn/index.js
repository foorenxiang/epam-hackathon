import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnLanding from './LearnLanding';
import LearnArticleViewer from './LearnArticleViewer';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Learn = () => (
  <StackNavigator
    initialRouteName="LearnLanding"
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackScreen name="LearnLanding" component={LearnLanding} options={{ title: 'Learn' }} />
    <StackScreen name="LearnArticleViewer" component={LearnArticleViewer} />
  </StackNavigator>
);

export default Learn;
