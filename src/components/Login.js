import React, { useEffect, useState } from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../constants';
import { login } from '../actions';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!props.isLoading) {
      setUsername('');
      setPassword('');
    }
  }, [props.isLoading]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter your username'
        value={username}
        onChangeText={(username) => setUsername(username)}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Enter your password'
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        title={props.isLoading ? 'Logging In...' : 'Login'}
        color={colors.blue}
        disabled={!username || !password || props.isLoading}
        onPress={() => props.login(username, password)}
      />

      {props.error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{props.error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: Dimensions.get('window').width - 30,
  },
  errorContainer: {
    marginVertical: 30,
    padding: 10,
    borderColor: colors.red,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width - 30,
    textAlign: 'center',
  },
  error: {
    color: colors.red,
  },
});

const mapStateToProps = (state) =>
  state
    ? {
        isLoading: state.isLoading,
        error: state.error,
      }
    : {};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
