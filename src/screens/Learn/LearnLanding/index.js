/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Image1 from './Article1.png';
import Image2 from './Article2.png';
import Image3 from './Article3.png';

const carouselItems = [
  { id: 0, image: Image1 },
  {
    id: 1,
    image: Image2,
    touchable() {
      const vidLink = 'https://www.youtube.com/watch?v=IqxwnmlUUts';
      Linking.canOpenURL(vidLink).then((supported) => {
        if (supported) {
          Linking.openURL(vidLink);
        }
      });
    },
  },
  {
    id: 2,
    image: Image3,
    touchable() {
      const vidLink = 'https://www.instagram.com/p/CHaov9Mr0Dv/';
      Linking.canOpenURL(vidLink).then((supported) => {
        if (supported) {
          Linking.openURL(vidLink);
        }
      });
    },
  },
];

const LearnLanding = ({ navigation: { navigate } }) => {
  const [carousel, setCarousel] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View
      style={{
        borderRadius: 20,
        height: '90%',
        padding: 20,
        marginLeft: 25,
      }}
    >
      {item.touchable ? (
        <TouchableOpacity onPress={() => item.touchable()}>
          <Image source={item.image} />
        </TouchableOpacity>
      ) : (
        <Image source={item.image} />
      )}
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <Carousel
        layout="default"
        ref={(ref) => setCarousel(ref)}
        data={carouselItems}
        sliderWidth={350}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

export default LearnLanding;
