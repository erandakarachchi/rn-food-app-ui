import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fonts } from "../themeColors";
import NewRecipesCard from "./NewRecipesCard";
import newRecipesItemList from "../newRecipes.json";

const NewRecipesContainer = () => {
  const _renderNewRecipesItems = () => {
    return newRecipesItemList.map((item) => {
      return (
        <NewRecipesCard
          title={item.name}
          duration={item.duration}
          serve={item.serve}
        />
      );
    });
  };

  return (
    <View>
      <Text style={styles.title}>Trending Recipes</Text>
      {_renderNewRecipesItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: 16,
    fontSize: 16,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
});

export default NewRecipesContainer;
