import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import CityWeatherButton from "../components/CityWeatherButton";
import Screen from "../components/Screen";

export default function WelcomeScreen({ navigation }) {
  // variables
  const weatherList = useSelector((state) => state.weather.weatherList);

  return (
    <Screen>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          contentContainerStyle={{ flex: 1, justifyContent: "center" }}
          data={weatherList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CityWeatherButton
              city={item.name}
              temp={item.main.temp}
              onPress={() =>
                navigation.navigate("Details", { city: item.name })
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}
