import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import ConfirmationImage from './Confirmation.jpg';

const RecycleMatches = ({ navigation: { navigate } }) => {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Image
        source={ConfirmationImage}
        style={{ flex: 1, width: '100%', height: 850, resizeMode: 'center' }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 750,
          left: 125,
          elevation: 100,
          height: 50,
          width: '40%',
        }}
        onPress={() => navigate('LearnLanding')}
      />
    </ScrollView>
  );
};

export default RecycleMatches;
