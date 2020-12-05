import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { capitalize, kelvinToCelsius } from '../config/helpers';

export default function MainWeatherComponent({
  city,
  description,
  temp,
  max,
  min,
}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.text}>{capitalize(description)}</Text>
      <Text style={styles.mainWeatherText}>{kelvinToCelsius(temp)} Cº</Text>
      <Text style={styles.text}>
        max.: {kelvinToCelsius(max)}º Min.: {kelvinToCelsius(min)}º
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cityText: { fontSize: 30, color: colors.white },
  mainWeatherText: { fontSize: 60, color: colors.white },
  text: { color: colors.white },
});
