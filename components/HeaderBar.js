import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ColorPalette, fonts } from "../themeColors";

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetingText}>Good Morning</Text>
        <Text style={styles.nameText}>Joyce Arlie</Text>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageContainer}
            source={{
              uri:
                "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 15,
    fontFamily: fonts.MONTSERRAT,
    color: ColorPalette.grey,
  },
  nameText: {
    fontSize: 28,
    fontFamily: fonts.MONTSERRAT_BOLD,
    marginTop: 5,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: ColorPalette.lightGreen,
  },
});

export default HeaderBar;
