import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Modal,
  Button,
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/Styles';
import PickerItem from './PickerItem';

const AppPicker = ({icon, placeholder, items, onSelectItem, selectedItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.Colors.medium}
            />
          )}

          {selectedItem.label ? (
            <Text style={{...defaultStyles.text, ...styles.text}}>
              {selectedItem.label}
            </Text>
          ) : (
            <Text style={{...defaultStyles.text, ...styles.placeholder}}>
              {placeholder}
            </Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={{marginTop: Platform.OS === 'android' ? 10 : 0}}
            contentContainerStyle={{
              width: '100%',
              justifyContent: 'center',
              flexGrow: 1,
            }}
            numColumns={3}
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                marginVertical={10}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.Colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: defaultStyles.Colors.medium,
  },
  placeholder: {
    color: defaultStyles.Colors.medium,
    flex: 1,
  },
});
