import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnLanding from './LearnLanding';
import LearnArticleViewer from './LearnArticleViewer';
import AppContext from '../../utils/AppContext';
import Log from '../Log';
import Profile from '../Profile';
import Locate from '../Locate';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();
const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

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

const LearnTabs = ({ navigation }) => {
  const { setTopNavigation } = useContext(AppContext);
  useEffect(() => {
    setTopNavigation(navigation);
  }, []);
  return (
    <TabNavigator
      initialRouteName="Learn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabScreen name="Learn" component={Learn} options={{}} />
      <TabScreen name="Locate" component={Locate} />
      <TabScreen name="Log" component={Log} options={{}} />
      <TabScreen name="Profile" component={Profile} options={{}} />
    </TabNavigator>
  );
};

export default LearnTabs;
