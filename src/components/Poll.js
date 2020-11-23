import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../constants';
import Option from './Option';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { editPollTitle, deletePoll } from '../actions';

const Poll = ({ poll, index }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.index}>{index}.</Text>
        <Text style={styles.title}>{poll.title}</Text>
      </View>

      <FlatList
        data={poll.options}
        renderItem={({ item }) => <Option poll={poll} option={item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.actionIconContainer}>
        <TouchableOpacity style={styles.actionIcon}>
          <MaterialIcons name='add' size={20} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionIcon}
          onPress={() =>
            dispatch(editPollTitle({ id: poll._id, newTitle: 'hi' }))
          }
        >
          <MaterialIcons name='edit' size={20} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionIcon}
          onPress={() => dispatch(deletePoll(poll._id))}
        >
          <MaterialIcons name='delete' size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  index: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
  actionIconContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionIcon: {
    backgroundColor: colors.blue,
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Poll;
