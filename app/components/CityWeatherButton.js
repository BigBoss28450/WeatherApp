import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../config/colors';
import { kelvinToCelsius } from '../config/helpers';

const styles = StyleSheet.create({
  weatherButtonContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CityWeatherButton({ city, temp, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View style={styles.weatherButtonContainer}>
        <Text style={{ fontSize: 20, color: colors.white }} numberOfLines={1}>
          {city}
        </Text>
        <Text style={{ fontSize: 35, color: colors.white }}>
          {`${kelvinToCelsius(temp)} Cº`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

CityWeatherButton.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

CityWeatherButton.defaultProps = {
  onPress: () => {},
};
