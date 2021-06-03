import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFormikContext} from 'formik';

import ButtonComponent from '../ButtonComponent';

const SubmitButton = ({title}) => {
  const {handleSubmit} = useFormikContext();

  return <ButtonComponent title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
