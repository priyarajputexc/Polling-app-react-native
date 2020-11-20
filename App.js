import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Login';
import { colors } from './constants';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import store from './src/store';
import Header from './src/components/Header';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './src/components/MyDrawer';

const accessToken = 'test';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {accessToken ? (
            <MyDrawer />
          ) : (
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
        <StatusBar style='auto' />
      </View>
    </Provider>

    // <Provider store={store}>
    //   <View style={styles.container}>
    //     <Header />
    //     <Login />
    //     <Home />
    //     <StatusBar style='auto' />
    //   </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
});
