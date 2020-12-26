import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ColorPalette, fonts } from "../themeColors";
import { Rating } from "react-native-ratings";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const deviceH = Dimensions.get("screen").height;
const deviceW = Dimensions.get("screen").width;
const cardH = deviceH * 0.14;
const cardW = deviceW - 32; //remove the left and right padding from safe area view.

const BACKGROUND_COLOR = ColorPalette.lightRed;

const NewRecipesCard = (props) => {
  const { title, duration, serve } = props;
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Rating
          style={styles.ratingBar}
          type="custom"
          tintColor={BACKGROUND_COLOR}
          defaultRating={5}
          ratingCount={5}
          imageSize={20}
          readonly={true}
        />
        <View style={[styles.descriptionTextContainer, styles.row]}>
          <View style={[styles.row, styles.flex, styles.durationContainer]}>
            <AntDesign
              name="clockcircleo"
              size={20}
              color={ColorPalette.black}
            />
            <Text style={styles.descriptionText}>{duration}</Text>
          </View>
          <View
            style={[
              styles.row,
              styles.alignLeft,
              styles.flex,
              styles.servingsContainer,
            ]}
          >
            <MaterialCommunityIcons
              name="food-drumstick-outline"
              size={20}
              color={ColorPalette.black}
            />
            <Text style={styles.descriptionText}>{serve}</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/plate_04.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: cardH,
    width: cardW,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20,
    marginBottom: 16,
    padding: 16,
    shadowColor: ColorPalette.lightGrey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
  },
  detailContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 21,
    fontFamily: fonts.MONTSERRAT_BOLD,
    color: ColorPalette.black,
    marginBottom: 8,
  },
  image: {
    width: cardW * 0.28,
    height: cardH * 0.8,
  },
  ratingBar: {
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
  },
  flex: {
    flex: 1,
  },
  descriptionTextContainer: {
    marginTop: 16,
    justifyContent: "space-between",
  },
  alignLeft: {
    alignItems: "flex-start",
  },
  descriptionText: {
    color: ColorPalette.black,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
  durationContainer: {
    marginRight: 4,
    justifyContent: "space-evenly",
  },

  servingsContainer: {
    marginRight: 4,
    justifyContent: "space-evenly",
  },
});

export default NewRecipesCard;
