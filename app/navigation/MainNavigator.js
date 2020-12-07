import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import colors from '../config/colors';
import { Alert, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeWeather } from '../redux/actions/weather';
import HeaderButton from '../components/headerComponents/HeaderButton';

const Stack = createStackNavigator();

export default function MainNavigator() {
  // variables
  const dispatch = useDispatch();

  // functions
  const removeFromWeatherList = (navigation, city) => {
    Alert.alert(
      '¡Advertencia!',
      'Estas seguro que desas eliminar esta ciudad de tu lista ?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            dispatch(removeWeather(city));
            return navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation, route }) => ({
          title: false,
          headerTransparent: true,
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
          headerRight: () => (
            <HeaderButton
              icon="trash-can-outline"
              onPress={() => {
                removeFromWeatherList(navigation, route.params.city);
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
