import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import LogImage from './Log.jpg';

const ViewLogLanding = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Image
        source={LogImage}
        style={{ flex: 1, width: '100%', height: 400, resizeMode: 'center' }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 270,
          left: 25,
          elevation: 100,
          height: 120,
          width: 370,
          // backgroundColor: '#F00',
        }}
        onPress={() => navigate('ItemView')}
      />
    </View>
  );
};

export default ViewLogLanding;
