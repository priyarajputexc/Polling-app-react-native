import { DrawerItem } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import { colors } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from '../actions';

const DrawerContent = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setTimeout(async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        username && setUsername(username);
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  }, []);

  return (
    <View style={styles.drawerContent}>
      <Drawer.Section>
        <View style={styles.drawerHeader}>
          <MaterialCommunityIcons
            name='account-circle'
            color={colors.white}
            size={50}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
      </Drawer.Section>

      <Drawer.Section>
        <DrawerItem
          label='Home'
          icon={() => (
            <MaterialCommunityIcons name='home' color={colors.blue} size={25} />
          )}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label='Users'
          icon={() => (
            <MaterialCommunityIcons
              name='account-group'
              color={colors.blue}
              size={25}
            />
          )}
          onPress={() => props.navigation.navigate('Users')}
        />
        <DrawerItem
          label='Add User'
          icon={() => (
            <MaterialIcons name='person-add' color={colors.blue} size={25} />
          )}
          onPress={() => props.navigation.navigate('Add User')}
        />
      </Drawer.Section>

      <Drawer.Section style={styles.bottomDrawerContent}>
        <DrawerItem
          label='Sign Out'
          icon={() => (
            <MaterialCommunityIcons
              name='exit-to-app'
              color={colors.blue}
              size={25}
            />
          )}
          onPress={() => {
            AsyncStorage.removeItem('accessToken');
            AsyncStorage.removeItem('username');
            props.navigation.navigate('Login');
            props.signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.white,
    marginLeft: 10,
    marginBottom: 0,
  },
  role: {
    color: colors.lightGrey,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomDrawerContent: {
    marginTop: 'auto',
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
});

const mapStateToProps = (state) => ({
  username: state && state.username,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
