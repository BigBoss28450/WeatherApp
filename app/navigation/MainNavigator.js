import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={WelcomeScreen}
        options={{ headerTransparent: true, title: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: false,
          headerTransparent: true,
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
