import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MyDrawer from './MyDrawer';
import Constants from 'expo-constants';
import { colors } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import MyStack from './MyStack';

function AuthProvider(props) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        token ? setAccessToken(token) : setAccessToken(props.accessToken);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [props.accessToken]);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {accessToken ? <MyDrawer /> : <MyStack />}
      </NavigationContainer>
      <StatusBar style='light' backgroundColor={colors.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
});

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

export default connect(mapStateToProps, null)(AuthProvider);
