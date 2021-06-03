import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from '../components/Icon';

const PickerItem = ({
  label,
  backgroundColor,
  icon,
  onPress,
  marginVertical = 0,
  marginHorizontal = 0,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flex: 1}}>
      <View style={[styles.container, {marginVertical: 10}]}>
        <View style={styles.iconContainer}>
          <Icon
            name={icon}
            width={60}
            height={60}
            size={40}
            backgroundColor={backgroundColor}
            marginVertical={5}
          />
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    maxWidth: 90,
  },
});
