import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { ColorPalette, fonts } from "../themeColors";
import { Feather, Octicons } from "@expo/vector-icons";

const deviceW = Dimensions.get("screen").width;

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <View style={styles.searchIconContainer}>
          <Feather name="search" size={25} color={ColorPalette.grey} />
        </View>
        <TextInput
          style={styles.searchText}
          placeholder={"Find recipes of chef"}
        />
      </View>
      <View style={styles.filterContainer}>
        <Octicons name="settings" size={24} color={ColorPalette.white} />
      </View>
    </View>
  );
};

const BORDER_RADIUS = 8;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: 50,
    width: deviceW - 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchBoxContainer: {
    paddingLeft: 16,
    alignItems: "center",
    flex: 1,
    marginRight: 16,
    backgroundColor: ColorPalette.lightGrey,
    flexDirection: "row",
    borderRadius: BORDER_RADIUS,
  },
  filterContainer: {
    width: 60,
    height: 50,
    backgroundColor: ColorPalette.darkGreen,
    borderRadius: BORDER_RADIUS,
    alignItems: "center",
    justifyContent: "center",
  },
  searchIconContainer: {
    marginRight: 16,
  },
  searchText: {
    fontFamily: fonts.MONTSERRAT,
  },
});

export default SearchBar;
