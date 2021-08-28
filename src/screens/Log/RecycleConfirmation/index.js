import React from 'react';
import { Text } from 'react-native';
import { random, floor } from 'math';

const RecycleConfirmation = ({
  route: {
    params: { prediction },
  },
}) => {
  const randomNumber = `${floor(random() * 1000000)}`.padStart(7, '0');
  return (
    <Text>{`
    We have received your order to recycle your ${prediction}.

    Your recycle order is #${randomNumber}
    Thank you for doing your part to recycle!
    `}</Text>
  );
};

export default RecycleConfirmation;
