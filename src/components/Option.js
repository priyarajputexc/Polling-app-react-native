import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../constants';
import { connect } from 'react-redux';
import { deleteOption } from '../actions';

const Option = ({ option, pollId, deleteOption }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name='checkcircleo'
        size={20}
        color={colors.grey}
        style={{ marginRight: 10 }}
      />
      <Entypo
        name='circle'
        size={20}
        color={colors.grey}
        style={{ marginRight: 10 }}
      />
      <Text>{option.option}</Text>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={() => deleteOption({ id: pollId, option: option.option })}
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
