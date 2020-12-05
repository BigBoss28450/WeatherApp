import React from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

export default function Screen({ children }) {
  return (
    <ImageBackground
      source={require("../assets/sunshine.jpg")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={colors.black}
            barStyle={"light-content"}
          />

          {children}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
