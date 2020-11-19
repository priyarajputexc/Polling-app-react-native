import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Users from './Users';
import AddUser from './AddUser';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Users' component={Users} />
      <Drawer.Screen name='Add User' component={AddUser} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
