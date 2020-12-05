import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { kelvinToCelsius } from "../config/helpers";

export default function CityWeatherButton({ city, temp, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.weatherButtonContainer}>
        <Text style={{ color: colors.white }}>{city}</Text>
        <Text style={{ color: colors.white }}>{kelvinToCelsius(temp)} Cº</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  weatherButtonContainer: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
