import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../constants';

const Option = ({ option }) => {
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
      <MaterialIcons
        name='delete'
        size={20}
        color={colors.grey}
        style={styles.deleteIcon}
      />
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

export default Option;
