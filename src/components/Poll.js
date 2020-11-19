import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Option from './Option';

const Poll = ({ poll, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.index}>{index}.</Text>
        <Text style={styles.title}>{poll.title}</Text>
      </View>

      <FlatList
        data={poll.options}
        renderItem={({ item }) => <Option option={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
});

export default Poll;
