import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants';
import { connect } from 'react-redux';
import { deleteOption } from '../actions';
import Checkbox from './Checkbox';

const Option = ({ option, poll, deleteOption }) => {
  return (
    <View style={styles.container}>
      <Checkbox value={option.option} />
      <Text>{option.option}</Text>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => deleteOption({ id: poll._id, option: option.option })}
      >
        <MaterialIcons name='delete' size={20} color={colors.grey} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  deleteIcon: {
    marginLeft: 'auto',
  },
});

const mapDispatchToProps = (dispatch) => ({
  deleteOption: (body) => dispatch(deleteOption(body)),
});

export default connect(null, mapDispatchToProps)(Option);
