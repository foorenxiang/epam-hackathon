import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import RecycleMatchesImage from './RecycleMatches.jpg';

const RecycleMatches = ({ navigation: { navigate } }) => {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Image
        source={RecycleMatchesImage}
        style={{ flex: 1, width: '100%', height: 800, resizeMode: 'center' }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 150,
          elevation: 100,
          height: 400,
          width: '100%',
        }}
        onPress={() => navigate('RecycleConfirmation')}
      />
    </ScrollView>
  );
};

export default RecycleMatches;
