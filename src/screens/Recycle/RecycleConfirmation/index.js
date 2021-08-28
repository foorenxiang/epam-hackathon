import React from 'react';
import { Text } from 'react-native';
import { random, floor } from 'math';

const RecycleConfirmation = ({ navigation: { navigate } }) => {
  const randomNumber = `${floor(random() * 1000000)}`.padStart(7, '0');
  return (
    <Text style={{ flex: 1, fontSize: 15, color: '#FFF', backgroundColor: '#2EBBA4' }}>{`
    We have received your order to recycle your device.

    Your recycle order is #${randomNumber}
    Thank you for doing your part to recycle!
    `}</Text>
  );
};

export default RecycleConfirmation;
