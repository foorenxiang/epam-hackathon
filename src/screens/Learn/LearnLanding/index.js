import React from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import LearnImage from './LearnLanding.png';

const LearnLanding = ({ navigation: { navigate } }) => {
  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%' }}
    >
      <Image
        source={LearnImage}
        style={{ flex: 1, width: '100%', height: 400, resizeMode: 'center' }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 368,
          left: 25,
          elevation: 100,
          height: 110,
          width: 325,
          backgroundColor: '#DDD',
          opacity: 0,
        }}
        onPress={() => navigate('LearnArticleViewer')}
      />
    </ScrollView>
  );
};

export default LearnLanding;
