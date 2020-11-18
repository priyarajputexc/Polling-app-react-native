import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Polling App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
  },
});

export default Header;
