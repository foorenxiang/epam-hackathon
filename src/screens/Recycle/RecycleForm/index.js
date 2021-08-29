import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import RecycleFormImage from './RecycleForm.jpg';

const RecycleForm = ({ navigation: { navigate } }) => {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Image
        source={RecycleFormImage}
        style={{ flex: 1, width: '100%', height: 1150, resizeMode: 'center' }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 1010,
          right: 30,
          elevation: 100,
          height: 80,
          width: 180,
        }}
        onPress={() => navigate('RecycleMatches')}
      />
    </ScrollView>
  );
};

export default RecycleForm;
