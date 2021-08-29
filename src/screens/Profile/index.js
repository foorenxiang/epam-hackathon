import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileLanding from './Landing';
import ProfileAlert from './Alert';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();

const Profile = () => {
  return (
    <StackNavigator
      initialRouteName="ProfileLanding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackScreen
        name="ProfileLanding"
        component={ProfileLanding}
        options={{ title: 'Profile' }}
      />
      <StackScreen name="ProfileAlert" component={ProfileAlert} />
    </StackNavigator>
  );
};

export default Profile;
