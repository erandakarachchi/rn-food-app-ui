import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { ColorPalette, fonts } from "../themeColors";
import RecommendedItemCard from "./RecommendedItemCard";

const RecommendedItemsContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.itemContainer}
      >
        <RecommendedItemCard backgroundColor={ColorPalette.darkGreen} />
        <RecommendedItemCard backgroundColor={ColorPalette.yellow} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 4,
    fontSize: 16,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
  itemContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default RecommendedItemsContainer;
