import React from "react";
import HeaderBar from "./HeaderBar";
import SearchBar from "./SearchBar";
import RecommendedItemsContainer from "./RecommendedItemsContainer";
import NewRecipesContainer from "./NewRecipesContainer";
import { View, StyleSheet, ScrollView } from "react-native";

const HomeContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderBar />
      <SearchBar />
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.scrollView}>
        <RecommendedItemsContainer />
        <NewRecipesContainer />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    flex:1,
  },
  scrollView: {
    borderRadius: 8,
    marginBottom: 100,
  },
});

export default HomeContainer;
