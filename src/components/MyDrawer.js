import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Users from './Users';
import AddUser from './AddUser';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={Home} />

      <Drawer.Screen
        name='Users'
        component={Users}
        options={{ title: 'All Users' }}
      />

      <Drawer.Screen name='Add User' component={AddUser} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
