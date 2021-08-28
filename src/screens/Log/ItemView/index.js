import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ItemView = ({
  route: {
    params: { id, title, description, status },
  },
}) => (
  <>
    <Text>{id}</Text>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Text>{status}</Text>
  </>
);

const styles = StyleSheet.create({});

export default ItemView;
