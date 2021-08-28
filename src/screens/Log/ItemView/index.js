import React from 'react';
import { Image, ScrollView } from 'react-native';
import LogDetailsImage from './LogDetails.jpg';

const ViewLogLanding = ({ navigation: { navigate } }) => {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Image
        source={LogDetailsImage}
        style={{ flex: 1, width: '100%', height: 1500, resizeMode: 'center' }}
      />
    </ScrollView>
  );
};

export default ViewLogLanding;
