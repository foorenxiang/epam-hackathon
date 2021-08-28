import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const ItemView = ({
  navigation: { navigate },
  route: {
    params: { id, title, description, status },
  },
}) => {
  const RECYCLE = true;
  return (
    <>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{status}</Text>
      {RECYCLE && <Button onPress={() => navigate('ObjectDetection')} title="Recycle?" />}
    </>
  );
};

const styles = StyleSheet.create({});

export default ItemView;
