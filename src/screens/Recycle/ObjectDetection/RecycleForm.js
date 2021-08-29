import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import styles from '../../../styles/RecycleConfirmationStyle';

const RecycleForm = ({ navigation: { navigate }, prediction }) => {
  const [yearsUsed, setYearsUsed] = useState('');
  const [deviceCondition, setDeviceCondition] = useState('');

  const yearsUsedValues = ['<1 yr', '1-2 yrs', '2-5 yrs', '6-10 yrs', '10+ yrs'];
  const deviceConditionValues = [
    'brand new',
    'like new / barely used',
    'cosmetic blemishes only',
    'no longer usable',
  ];

  const onSubmitHandler = () => navigate('RecycleConfirmation', { prediction });

  return (
    <Formik
      initialValues={{ otherNotes: '' }}
      onSubmit={(values) => onSubmitHandler(values)}
      style={{ flexGrow: 1, width: '100%' }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Additional Details</Text>
          <Text>Years Used</Text>
          <Picker selectedValue={yearsUsed} onValueChange={(value) => setYearsUsed(value)}>
            {yearsUsedValues.map((value) => (
              <Picker.Item label={value} value={value} key={value} />
            ))}
          </Picker>
          <Text>Device Condition</Text>
          <Picker
            selectedValue={deviceCondition}
            onValueChange={(value) => setDeviceCondition(value)}
          >
            {deviceConditionValues.map((value) => (
              <Picker.Item label={value} value={value} key={value} />
            ))}
          </Picker>
          <Text>Other Notes</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={handleChange('otherNotes')}
            onBlur={handleBlur('otherNotes')}
            value={values.otherNotes}
          />
          <Button onPress={() => onSubmitHandler()} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default RecycleForm;
