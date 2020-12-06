import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../config/colors';
import {
  kelvinToCelsius,
  metersToKilometers,
  timestampToHours,
} from '../config/helpers';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: colors.white,
    paddingHorizontal: 10,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default function DetailsListComponent({ data }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Amanecer
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {timestampToHours(data.sys.sunrise)}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Atardecer
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {timestampToHours(data.sys.sunset)}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Humedad
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${data.main.humidity}%`}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Presión
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${data.main.pressure} hPa`}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Temperatura máxima
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${kelvinToCelsius(data.main.temp_max)}º`}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Temperatura minima
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${kelvinToCelsius(data.main.temp_min)}º`}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Visibilidad
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${metersToKilometers(data.visibility)} km`}
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={{ color: colors.lightgray, marginBottom: -5 }}>
              Velocidad del viento
            </Text>
            <Text style={{ color: colors.white, fontSize: 30 }}>
              {`${data.wind.speed} km`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

DetailsListComponent.propTypes = {
  data: PropTypes.shape({
    visibility: PropTypes.number.isRequired,
    sys: PropTypes.shape({
      sunrise: PropTypes.string.isRequired,
      sunset: PropTypes.string.isRequired,
    }),
    main: PropTypes.shape({
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
