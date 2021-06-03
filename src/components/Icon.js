import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../config/Colors';

const Icon = ({
  name,
  size = 30,
  color = Colors.white,
  backgroundColor = Colors.black,
  width = 50,
  height = 50,
  borderRadius = width / 2,
  marginVertical = 0,
  marginHorizontal = 0,
}) => {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor,
          width,
          height,
          borderRadius,
          marginHorizontal,
          marginVertical,
        },
      ]}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
