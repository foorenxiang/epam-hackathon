import React from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Img from './landing.png';

const ProfileLanding = ({ navigation: { navigate } }) => {
  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%' }}
    >
      <Image source={Img} style={{ flex: 1, width: '100%', height: 800, resizeMode: 'contain' }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 185,
          left: 80,
          elevation: 100,
          height: 50,
          width: 200,
          // backgroundColor: '#f00',
          opacity: 0.8,
        }}
        onPress={() => navigate('ProfileAlert')}
      />
    </ScrollView>
  );
};

export default ProfileLanding;
