import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer, Text } from 'react-native-paper';
import { colors } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContent}>
      <Drawer.Section>
        <View style={styles.drawerHeader}>
          <MaterialCommunityIcons
            name='account-circle'
            color={colors.white}
            size={50}
          />
          <View style={styles.userinfo}>
            <Text style={styles.username}>Priya Rajput</Text>
            <Text style={styles.role}>Admin</Text>
          </View>
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
  userinfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.white,
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

export default DrawerContent;