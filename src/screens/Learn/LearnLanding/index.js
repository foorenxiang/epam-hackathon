import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LearnImage from './LearnLanding.png';
import RecycleUpImage from './recycle_up.png';
import RecycleWheel from './recycle_wheel.png';

const LearnLanding = ({ navigation: { navigate } }) => {
  const [recycleBtnSelected, setRecycleBtnSelected] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{ flex: 1, width: '100%', backgroundColor: '#000' }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1, opacity: 1 }}
        onPress={() => setRecycleBtnSelected(false)}
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
      </TouchableWithoutFeedback>
      {!recycleBtnSelected && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 408,
            left: 25,
            elevation: 100,
            height: 120,
            width: 360,
          }}
          onPress={() => navigate('LearnArticleViewer')}
        />
      )}
      {recycleBtnSelected && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 510,
            left: 0,
            elevation: 100,
            height: 300,
            width: 400,
          }}
          onPress={() => navigate('Recycle')}
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
          top: 655,
          left: 170,
          elevation: 200,
          height: 60,
          width: 65,
        }}
        onPress={() => setRecycleBtnSelected(!recycleBtnSelected)}
      >
        <Image source={RecycleUpImage} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LearnLanding;
