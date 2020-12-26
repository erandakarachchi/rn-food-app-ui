import React from "react";
import HeaderBar from "./HeaderBar";
import SearchBar from "./SearchBar";
import RecommendedItemsContainer from "./RecommendedItemsContainer";
import { View, StyleSheet } from "react-native";

const HomeContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderBar />
      <SearchBar />
      <RecommendedItemsContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
});

export default HomeContainer;
