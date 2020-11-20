import React from 'react';
import { Button, Dimensions, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../constants';

function AddPoll() {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder='Enter your poll here...'
        style={styles.input}
      />

      <View style={styles.optionContainer}>
        <TextInput
          style={styles.optionInput}
          placeholder='Enter option here...'
        />
        <View style={styles.buttonContainer}>
          <Button title='Add Option' color={colors.blue} />
        </View>
      </View>

      <Button title='Save Poll' color={colors.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: Dimensions.get('window').width - 40,
    borderRadius: 5,
  },
  optionInput: {
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonContainer: {
    flexGrow: 0,
  },
});

export default AddPoll;
