import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../constants';
import Checkbox from './Checkbox';
import { addUser } from '../actions';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

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

      <View style={styles.checkboxContainer}>
        <Checkbox value='Admin' selected={role} setSelected={setRole} />
        <Text>Admin</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox value='Guest' selected={role} setSelected={setRole} />
        <Text>Guest</Text>
      </View>

      <Button
        title='Add User'
        color={colors.blue}
        disabled={!username || !password || !role}
        onPress={() => {
          props.addUser({ username, password, role });
          setUsername('');
          setPassword('');
          setRole('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: Dimensions.get('window').width - 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 30,
    marginBottom: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (body) => dispatch(addUser(body)),
});

export default connect(null, mapDispatchToProps)(AddUser);
