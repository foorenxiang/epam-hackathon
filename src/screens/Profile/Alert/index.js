import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import Img from './alert.jpg';

const Alert = ({ navigation: { navigate } }) => {
  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%', paddingTop: 0 }}
    >
      <Image source={Img} style={{ flex: 1, width: '100%', height: 400, resizeMode: 'center' }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 550,
          left: 40,
          elevation: 100,
          height: 110,
          width: 325,
          opacity: 0.8,
        }}
        onPress={() => navigate('ProfileLanding')}
      />
    </ScrollView>
  );
};

export default Alert;
