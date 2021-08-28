import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import styles from '../../../styles/RecycleConfirmationStyle';

const RecycleForm = ({ navigation: { navigate } }) => {
  const [yearsUsed, setYearsUsed] = useState('');

  const [deviceCondition, setDeviceCondition] = useState('');

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => navigate('RecycleConfirmation', values)}
      style={{ flexGrow: 1 }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Additional Details</Text>
          <Text>Years Used</Text>
          <Picker selectedValue={yearsUsed} onValueChange={(itemValue) => setYearsUsed(itemValue)}>
            <Picker.Item label="<1 yr" value="<1 yr" />
            <Picker.Item label="1-2 yrs" value="1-2 yrs" />
            <Picker.Item label="2-5 yrs" value="2-5 yrs" />
            <Picker.Item label="6-10 yrs" value="6-10 yrs" />
            <Picker.Item label="10+ yrs" value="10+ yrs" />
          </Picker>
          <Text>Device Condition</Text>
          <Picker
            selectedValue={deviceCondition}
            onValueChange={(itemValue) => setDeviceCondition(itemValue)}
          >
            <Picker.Item label="brand new" value="brand new" />
            <Picker.Item label="like new / barely used" value="like new / barely used" />
            <Picker.Item label="cosmetic blemishes only" value="cosmetic blemishes only" />
            <Picker.Item label="no longer usable" value="no longer usable" />
          </Picker>
          <Text>Other Notes</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Text>Additional Details</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default RecycleForm;
