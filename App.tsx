/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import type {PropsWithChildren} from 'react';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function MyStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={SearchPage} />
      <Stack.Screen name="Results" component={SearchResults} />
    </Stack.Navigator>
  );
}

export function App2(): JSX.Element {
  return (
    <React.StrictMode>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </React.StrictMode>
  );
}

{
  /*  */
}
