import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, dimensions } from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { createPoll } from '../actions';
import { connect } from 'react-redux';

function AddPoll(props) {
  const [pollTitle, setPollTitle] = useState('');
  const [newPoll, setNewPoll] = useState('');
  const [pollOptions, setPollOptions] = useState([]);

  const options = (item) => (
    <View style={styles.optionElement}>
      <Text>{item}</Text>
      <TouchableOpacity
        onPress={() =>
          setPollOptions(pollOptions.filter((option) => option !== item))
        }
      >
        <Entypo name='cross' size={25} />
      </TouchableOpacity>
    </View>
  );

  const clearFields = () => {
    setPollTitle('');
    setPollOptions([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholder='Enter your poll here...'
        style={styles.input}
        defaultValue={pollTitle}
        onChangeText={(pollTitle) => setPollTitle(pollTitle)}
      />

      <View style={styles.optionsContainer}>
        <FlatList
          data={pollOptions}
          renderItem={({ item }) => options(item)}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </View>

      <View style={styles.optionInputContainer}>
        <TextInput
          style={styles.optionInput}
          placeholder='Enter option here...'
          defaultValue={newPoll}
          onChangeText={(newPoll) => setNewPoll(newPoll)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title='Add Option'
            color={colors.blue}
            disabled={!newPoll}
            onPress={() => {
              setPollOptions([...pollOptions, newPoll]);
              setNewPoll('');
            }}
          />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <Button
          title='clear'
          color={colors.blue}
          onPress={() => clearFields()}
        />

        <Button
          title='Save Poll'
          color={colors.blue}
          disabled={!pollTitle || !pollOptions.length}
          onPress={() => {
            let options = '';
            pollOptions.forEach(
              (option, index) =>
                (options = options.concat(!index ? option : `____${option}`))
            );
            props.createPoll({ pollTitle, options });
            clearFields();
          }}
        />
      </View>
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
    width: dimensions.width - 40,
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
  optionsContainer: {
    flexDirection: 'row',
    width: dimensions.width - 40,
    marginBottom: 20,
  },
  optionInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  optionElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexGrow: 0,
  },
  actionContainer: {
    width: dimensions.width - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

mapDispatchToProps = (dispatch) => ({
  createPoll: (body) => dispatch(createPoll(body)),
});

export default connect(null, mapDispatchToProps)(AddPoll);
