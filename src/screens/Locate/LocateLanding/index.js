import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import openLink from '../../../utils/openLink';
import LocateBG from './LocateBG.jpg';
import Image1 from './Image1.png';
import Image2 from './Image2.png';

const carouselItems = [Image1, Image2];

const LocateLanding = () => {
  const carouselRenderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      onPress={() => openLink('https://www.towardszerowaste.gov.sg/ewaste/')}
    >
      <Image
        source={item}
        style={{
          resizeMode: 'center',
          height: '100%',
          width: '100%',
        }}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <Image
        source={LocateBG}
        style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }}
      />
      <View
        style={{
          position: 'absolute',
          top: 80,
          left: 38,
          justifyContent: 'center',
          elevation: 100,
          alignItems: 'center',
          height: 130,
          width: '80%',
        }}
      >
        <Carousel
          layout="default"
          data={carouselItems}
          sliderWidth={370}
          itemWidth={150}
          renderItem={carouselRenderItem}
        />
      </View>
    </>
  );
};

export default LocateLanding;
