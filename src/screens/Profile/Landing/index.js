import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import Img from './Profile.jpg';

const ProfileLanding = ({ navigation: { navigate } }) => {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Image source={Img} style={{ flex: 1, width: '100%', height: 1180, resizeMode: 'center' }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 210,
          left: 110,
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
