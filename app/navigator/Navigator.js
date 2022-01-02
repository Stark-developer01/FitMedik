import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants';

import {
  ExerciseDetailsScreen,
  ExerciseHomeScreen,
  ScheduleScreen,
  SettingsScreen,
} from '../screens';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'ExerciseHomeScreen'} headerMode="none">
      <Stack.Screen name="EserciseHomeScreen" component={ExerciseHomeScreen} />
      <Stack.Screen
        name="EserciseDetailsScreen"
        component={ExerciseDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          hight: 65,
        },
      }}
      initialRouteName="AllExercises"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icons = {
            Schedule: 'calendar-alt',
            AllExercises: 'dumbbell',
            Settings: 'cog',
          };
          return (
            <FontAwesome5Icon
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              style={{
                fontSize: 20,
                opacity: focused ? 1 : 0.5,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          const labels = {
            Schedule: 'Today',
            AllExercises: 'All Exerciese',
            Settings: 'Settings',
          };
          return (
            <Text
              style={{
                color: focused ? COLORS.accent : COLORS.black,
                marginBottom: 8,
                opacity: focused ? 1 : 0.2,
                fontWeight: 'bold',
              }}>
              {labels[route.name]}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="AllExercises" component={StackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
