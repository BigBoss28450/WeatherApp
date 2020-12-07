import React, { useState } from 'react';
import { Alert, FlatList, Modal, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CityWeatherButton from '../components/CityWeatherButton';
import Screen from '../components/Screen';
import HeaderBar from '../components/headerComponents/HeaderBar';
import weatherApiCalls from '../api/weatherApiCalls';
import ModalContainer from '../components/ModalContainer';
import MainWeatherComponent from '../components/MainWeatherComponent';
import TextButton from '../components/basicComponents/TextButton';
import CustomTextInput from '../components/basicComponents/CustomTextInput';
import HeaderButton from '../components/headerComponents/HeaderButton';
import { getWeather } from '../redux/actions/weather';
import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  // states
  const [modalVisible, setModalVisible] = useState(false);
  const [tempWeather, setTempWeather] = useState(null);
  const [noResults, setNoResults] = useState(false);

  // variables
  const weatherList = useSelector((state) => state.weather.weatherList);
  const dispatch = useDispatch();

  // functions
  const searchCityWeather = async (city) => {
    try {
      const result = await weatherApiCalls.getCityWeather(city);
      if (result.cod === 200) {
        setNoResults(false);
        setTempWeather(result);
      }
      if (result.cod === '404') {
        setTempWeather(null);
        setNoResults(true);
      }
      return null;
    } catch (error) {
      Alert.alert('¡Error!', 'No estas conectado a internet');
      return null;
    }
  };

  const addToWeatherList = (data) => {
    dispatch(getWeather(data));
    setTempWeather(null);
    setModalVisible(false);
    return null;
  };

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <HeaderBar>
          <HeaderButton icon="magnify" onPress={() => setModalVisible(true)} />
        </HeaderBar>
        <View style={{ flex: 1 }}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              paddingVertical: 20,
            }}
            numColumns={2}
            data={weatherList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CityWeatherButton
                city={item.name}
                temp={item.main.temp}
                onPress={() =>
                  navigation.navigate('Details', { city: item.name })
                }
              />
            )}
          />
        </View>
      </View>
      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalContainer>
          <HeaderBar>
            <CustomTextInput
              onSubmitEditing={(string) => searchCityWeather(string)}
            />
            <HeaderButton
              icon="close"
              onPress={() => {
                setTempWeather(null);
                setNoResults(false);
                setModalVisible(false);
                return null;
              }}
            />
          </HeaderBar>
          {tempWeather && (
            <>
              <HeaderBar>
                <TextButton
                  title="Agregar a la lista"
                  onPress={() => addToWeatherList(tempWeather)}
                />
              </HeaderBar>
              <MainWeatherComponent
                city={tempWeather.name}
                description={tempWeather.weather[0].description}
                temp={tempWeather.main.temp}
                max={tempWeather.main.temp_max}
                min={tempWeather.main.temp_min}
              />
            </>
          )}
          {noResults && (
            <Text style={{ color: colors.white, textAlign: 'center' }}>
              No se encontraron resutados.
            </Text>
          )}
        </ModalContainer>
      </Modal>
    </Screen>
  );
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
