import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import DetailsListComponent from '../components/DetailsListComponent';
import MainWeatherComponent from '../components/MainWeatherComponent';
import Screen from '../components/Screen';

export default function DetailsScreen({ route }) {
  // variables
  const cityName = route.params.city;
  const weatherList = useSelector((state) => state.weather.weatherList);
  const weatherDetails = weatherList.filter((item) => {
    if (item.name === cityName) return item;
  })[0];

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <MainWeatherComponent
          city={weatherDetails.name}
          description={weatherDetails.weather[0].description}
          temp={weatherDetails.main.temp}
          max={weatherDetails.main.temp_max}
          min={weatherDetails.main.temp_min}
        />
        <DetailsListComponent data={weatherDetails} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
