import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Login';
import { colors } from './constants';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import store from './src/store';
import Header from './src/components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Login />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
});
