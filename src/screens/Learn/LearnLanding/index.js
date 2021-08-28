import React, { useState } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import LearnImage from './LearnLanding.png';
import RecycleUpImage from './recycle_up.png';
import RecycleWheel from './recycle_wheel.png';

const LearnLanding = ({ navigation: { navigate } }) => {
  const [recycleBtnSelected, setRecycleBtnSelected] = useState(false);
  const recycleHandler = () => {
    setRecycleBtnSelected(!recycleBtnSelected);
  };
  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%', backgroundColor: '#000' }}
    >
      <Image
        source={LearnImage}
        style={{
          flex: 1,
          width: '100%',
          height: 400,
          resizeMode: 'center',
          opacity: recycleBtnSelected ? 0.2 : 1,
        }}
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
      {recycleBtnSelected && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 430,
            left: -17,
            elevation: 100,
            height: 300,
            width: 400,
            // backgroundColor: '#00F',
          }}
          onPress={() => null}
        >
          <Image
            source={RecycleWheel}
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 570,
          left: 150,
          elevation: 200,
          height: 60,
          width: 65,
          // backgroundColor: '#F00',
        }}
        onPress={() => recycleHandler()}
      >
        <Image source={RecycleUpImage} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LearnLanding;
