import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Users from './Users';
import AddUser from './AddUser';
import DrawerContent from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableRipple } from 'react-native-paper';
import AddPoll from './AddPoll';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const AddPollStack = createStackNavigator();
const UsersStack = createStackNavigator();
const AddUserStack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: colors.blue,
  },
  headerTintColor: colors.white,
};

const headerMenuIcon = (navigation) => (
  <TouchableRipple
    onPress={() => navigation.openDrawer()}
    style={{ padding: 10 }}
  >
    <Entypo
      name='menu'
      color={colors.white}
      size={25}
      backgroundColor={colors.blue}
    />
  </TouchableRipple>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen
      name='Home'
      component={Home}
      options={{
        headerLeft: () => headerMenuIcon(navigation),
      }}
    />
  </HomeStack.Navigator>
);

const AddPollStackScreen = ({ navigation }) => (
  <AddPollStack.Navigator screenOptions={screenOptions}>
    <AddPollStack.Screen
      name='Create Poll'
      component={AddPoll}
      options={{
        headerLeft: () => headerMenuIcon(navigation),
      }}
    />
  </AddPollStack.Navigator>
);

const UsersStackScreen = ({ navigation }) => (
  <UsersStack.Navigator screenOptions={screenOptions}>
    <UsersStack.Screen
      name='Users'
      component={Users}
      options={{
        headerLeft: () => headerMenuIcon(navigation),
      }}
    />
  </UsersStack.Navigator>
);

const AddUserStackScreen = ({ navigation }) => (
  <AddUserStack.Navigator screenOptions={screenOptions}>
    <AddUserStack.Screen
      name='Add User'
      component={AddUser}
      options={{
        headerLeft: () => headerMenuIcon(navigation),
      }}
    />
  </AddUserStack.Navigator>
);

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={HomeStackScreen} />
      <Drawer.Screen name='Create Poll' component={AddPollStackScreen} />
      <Drawer.Screen name='Users' component={UsersStackScreen} />
      <Drawer.Screen name='Add User' component={AddUserStackScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
