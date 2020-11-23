import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { colors, dimensions } from '../../constants';

const InputModal = (props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.modalHeaderText}>Enter Title</Text>

        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          defaultValue={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
        />

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => props.setModalVisibility(false)}>
            <Text style={styles.link}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.setModalVisibility(false);
              props.getInputValue(inputValue);
            }}
          >
            <Text style={styles.link}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: dimensions.width - 80,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    marginVertical: 20,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    fontSize: 15,
    color: colors.blue,
  },
});

export default InputModal;
