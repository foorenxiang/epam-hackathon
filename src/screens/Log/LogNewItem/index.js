import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const LogNewItem = ({ navigation: { navigate } }) => (
  <View>
    <Text>Form placeholder</Text>
    <Button onPress={() => navigate.back} title="Add new device" color="#00F" />
  </View>
);

const styles = StyleSheet.create({});

export default LogNewItem;
