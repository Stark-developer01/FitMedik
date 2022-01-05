/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';
import {Onboarding} from './screens';
import BluetoothScanner from './screens/BluetoothScanner';

const App = () => {
  return (
    // <Onboarding />
    <BluetoothScanner />
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
  );
};

export default App;
