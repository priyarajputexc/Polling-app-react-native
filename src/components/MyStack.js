import React from 'react';
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../constants';

const Stack = createStackNavigator();

function MyStack() {
  return (
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
  );
}

export default MyStack;
