import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListItem, Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  newButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  list: {
    flex: 1,
  },
});

const ViewLogLanding = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  const logs = useSelector((state) => state.logs);
  const renderItem = ({ item, i }) => (
    <ListItem key={item.id} bottomDivider>
      <ListItem.Content>
        <TouchableOpacity onPress={() => navigate(item.title, { ...item })}>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </TouchableOpacity>
      </ListItem.Content>
    </ListItem>
  );
  return (
    <View style={styles.wrapper}>
      <View>
        <FlatList data={logs} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <View>
        {/* <Button onPress={() => navigate('LogNewItem')} title="Log New Item" color="#00F" /> */}
        <Button onPress={() => null} title="Log New Item" color="#00F" />
      </View>
    </View>
  );
};

export default ViewLogLanding;
