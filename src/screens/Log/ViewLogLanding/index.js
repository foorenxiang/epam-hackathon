import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ViewLogLanding = ({ navigation: { navigate } }) => (
  <View>
    <Button onPress={() => navigate('ElectronicStatus')} title="Electronic Status" color="#00F" />
  </View>
);

const styles = StyleSheet.create({});

export default ViewLogLanding;
