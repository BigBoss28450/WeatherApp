import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DetailsListComponent from '../components/DetailsListComponent';
import MainWeatherComponent from '../components/MainWeatherComponent';
import Screen from '../components/Screen';

export default function DetailsScreen({ route }) {
  // variables
  const cityName = route.params.city;
  const weatherList = useSelector((state) => state.weather.weatherList);
  const weatherDetails = weatherList.filter((item) => {
    if (item.name === cityName) return item;
    return null;
  })[0];

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        {weatherDetails && (
          <>
            <MainWeatherComponent
              city={weatherDetails.name}
              description={weatherDetails.weather[0].description}
              temp={weatherDetails.main.temp}
              max={weatherDetails.main.temp_max}
              min={weatherDetails.main.temp_min}
            />
            <DetailsListComponent data={weatherDetails} />
          </>
        )}
      </View>
    </Screen>
  );
}

DetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape.isRequired,
  }).isRequired,
};
