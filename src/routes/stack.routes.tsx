import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login';
import { TabRoutes } from './tab.routes';
import React from 'react';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="login">
        <Screen
          name="login"
          options={{
            headerTitle: 'login',
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Screen
          name="home"
          options={{
            headerTitle: 'Home',
            headerShown: false,
          }}
          component={TabRoutes}
        />
      </Navigator>
    </NavigationContainer>
  );
};
