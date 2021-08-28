import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaView, View, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button, { colors } from './Button';
const Examples = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#fff' }}>
      <Button bgColor="#2DB9A3" title="oval" size="large" />
      <Button bgColor="#2DB9A3" title="oval" size="medium" />
      <Button bgColor="#2DB9A3" title="oval" size="small" />

      <Button
        bgColor="#fff"
        fontColor="#2DB9A3"
        title="oval + outline"
        size="large"
        type="outline"
      />
      <Button
        bgColor="#fff"
        fontColor="#2DB9A3"
        title="oval + outline"
        size="medium"
        type="outline"
      />
      <Button
        bgColor="#fff"
        fontColor="#2DB9A3"
        title="oval + outline"
        size="small"
        type="outline"
      />
      <Button
        bgColor="#DDF0F0"
        fontColor="#2EBBA4"
        borderColor="#DDF0F0"
        title="Button"
        size="medium"
        iconRight
        icon={
          <>
            <Icon name="arrow-up" size={10} color="#2EBBA4" />
            <Icon name="arrow-down" size={10} color="#2EBBA4" />
          </>
        }
      />

      {/* <Picker */}
      {/*  selectedValue={selectedLanguage} */}
      {/*  onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)} */}
      {/* > */}
      {/*  <Picker.Item label="Java" value="java" /> */}
      {/*  <Picker.Item label="JavaScript" value="js" /> */}
      {/* </Picker> */}
    </View>
  );
};

export default Examples;
