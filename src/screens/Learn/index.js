import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnLanding from './LearnLanding';
import LearnArticleViewer from './LearnArticleViewer';
import AppContext from '../../utils/AppContext';
import Log from '../Log';
import Profile from '../Profile';
import Locate from '../Locate';
import LearnImage from './Learn.png';
import LocationImage from './Location.png';
import LogImage from './Log.png';
import ProfileImage from './Profile.png';

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
      <TabScreen
        name="Learn"
        component={Learn}
        options={{ tabBarIcon: () => <Image source={LearnImage} /> }}
      />
      <TabScreen
        name="Locate"
        component={Locate}
        options={{ tabBarIcon: () => <Image source={LocationImage} /> }}
      />
      <TabScreen
        name="Log"
        component={Log}
        options={{ tabBarIcon: () => <Image source={LogImage} /> }}
      />
      <TabScreen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: () => <Image source={ProfileImage} /> }}
      />
    </TabNavigator>
  );
};

export default LearnTabs;
