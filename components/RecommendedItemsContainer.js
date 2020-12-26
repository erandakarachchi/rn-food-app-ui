import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { ColorPalette, fonts } from "../themeColors";
import RecommendedItemCard from "./RecommendedItemCard";
import recommendedItems from "../recommended.json";

const RecommendedItemsContainer = () => {
  console.log(recommendedItems);
  const _renderRecommendedItemList = () => {
    return recommendedItems.map((item) => {
      return (
        <RecommendedItemCard
          key={item.id}
          backgroundColor={item.backgroundColor}
          name={item.name}
          duration={item.duration}
          serve={item.serve}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.itemContainer}
      >
        {_renderRecommendedItemList()}
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
