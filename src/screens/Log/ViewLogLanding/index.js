import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import LogImage from './Log.jpg';

const ViewLogLanding = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flex: 1, width: '100%' }}>
      <Image
        source={LogImage}
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
    </View>
  );
};

export default ViewLogLanding;
