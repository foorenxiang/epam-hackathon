import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// API: https://reactnativeelements.com/docs/button

const ovalRadius = StyleSheet.create({
  small: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  medium: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  large: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
});
export const colors = {
  black: '#151F58',
  darkGray: '#264257',
  darkBlue: '#151F58',
  lightBlue: '#6F9CBC',
  green: '#2DB9A3',
  green2: '#2EBBA4',
  lightGreen: '#86CDC3',
  lightGreen2: '#DDF0F0',
  orange: '#FAAF4C',
  darkOrange: '#E78D5B',
};
export const buttonStyles = StyleSheet.create({
  small: { height: 18, fontSize: 12, fontWeight: '400' },
  medium: { height: 24, fontSize: 14, fontWeight: '400' },
  large: { height: 42, fontSize: 16, fontWeight: '400' },
});

function _Button(props) {
  const {
    oval = true,
    size,
    bgColor = colors.green,
    borderColor = colors.green,
    fontColor = '#fff',
    buttonStyle = {},
    titleStyle = {},
    kind = 'primary',
  } = props;

  return (
    <Button
      {...buttonStyles[kind]}
      titleStyle={{
        color: fontColor,
        ...titleStyle,
      }}
      buttonStyle={{
        backgroundColor: bgColor,
        borderColor,
        borderWidth: 1,
        ...buttonStyle,
        ...buttonStyles[size],
        ...(oval ? ovalRadius[size] : {}),
      }}
      {...props}
    />
  );
}

export default _Button;
