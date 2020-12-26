import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetingText}>Good Morning</Text>
        <Text style={styles.nameText}>Shania Fraser</Text>
      </View>
      <View>
        <View style={styles.imageContainer} />
      </View>
    </View>
  );
};

const TEXT_FONT = "Montserrat";
const TEXT_FONT_BOLD = "MontserratBold";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greetingText: {
    fontSize: 18,
    fontFamily: TEXT_FONT,
  },
  nameText: {
    fontSize: 22,
    fontFamily: TEXT_FONT_BOLD,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "red",
  },
});

export default HeaderBar;
