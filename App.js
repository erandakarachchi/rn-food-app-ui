import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { HomeContainer } from "./components";
import { useFonts } from "@use-expo/font";
import { ColorPalette } from "./themeColors";

const customFonts = {
  Montserrat: require("./assets/fonts/Montserrat.ttf"),
  MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
};

const App = () => {
  const isLoaded = useFonts(customFonts);

  if (!isLoaded) {
    return (
      <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
              <Text>Loading ....</Text>
            </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomeContainer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.ultraLightGrey,
    padding: 16,
  },
});
