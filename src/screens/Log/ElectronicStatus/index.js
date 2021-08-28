// Shows status of a particular existing electronic
// Yes: Can fix
// No: Recycle
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ElectronicStatus = ({ navigation: { navigate } }) => (
  <View>
    <Button onPress={() => navigate('LogNewItem')} title="Log New Item" color="#00F" />
  </View>
);

const styles = StyleSheet.create({});

export default ElectronicStatus;
