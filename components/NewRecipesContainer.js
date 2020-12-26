import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fonts } from "../themeColors";
import NewRecipesCard from "./NewRecipesCard";

const NewRecipesContainer = () => {
  return (
    <View>
      <Text style={styles.title}>Trending Recipes</Text>
      <NewRecipesCard />
      <NewRecipesCard />
      <NewRecipesCard />
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
