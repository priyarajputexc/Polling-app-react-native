import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setTimeout(async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        token && setAccessToken(token);
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {accessToken ? (
            <MyDrawer />
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name='Login'
                component={Login}
                options={{
                  title: 'Polling App',
                  headerStyle: {
                    backgroundColor: colors.blue,
                  },
                  headerTintColor: colors.white,
                }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
        <StatusBar style='light' backgroundColor={colors.blue} />
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
