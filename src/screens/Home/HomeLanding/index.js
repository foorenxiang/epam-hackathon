import React, { useContext } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import AppContext from '../../../utils/AppContext';
import Home from './Home.png';

const HomeLanding = () => {
  const {
    topNavigation: { navigate },
  } = useContext(AppContext);
  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%' }}
    >
      <Image source={Home} style={{ flex: 1, width: '100%', height: 400, resizeMode: 'center' }} />
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
        onPress={() => navigate('Learn')}
      />
    </ScrollView>
  );
};

export default HomeLanding;
