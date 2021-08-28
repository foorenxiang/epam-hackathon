import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const LogNewItem = ({ navigation: { navigate } }) => (
  <View>
    <Button onPress={() => navigate('ObjectDetection')} title="Upload Photo" color="#00F" />
  </View>
);

const styles = StyleSheet.create({});

export default LogNewItem;
