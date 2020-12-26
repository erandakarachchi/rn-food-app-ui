import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ColorPalette, fonts } from "../themeColors";
import { Rating } from "react-native-ratings";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const deviceH = Dimensions.get("screen").height;
const deviceW = Dimensions.get("screen").width;

const RecommendedItemCard = (props) => {
  const { backgroundColor } = props;
  const propStyles = { backgroundColor };
  return (
    <View style={[styles.container, propStyles]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/plate_01.png")}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Ovos moles de papaia</Text>
        <Rating
          style={styles.ratingBar}
          type="custom"
          tintColor={backgroundColor}
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
              color={ColorPalette.white}
            />
            <Text style={styles.descriptionText}>5 min</Text>
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
              color={ColorPalette.white}
            />
            <Text style={styles.descriptionText}>1 serve</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const cardH = deviceH * 0.5;
const cardW = deviceW * 0.6;

const styles = StyleSheet.create({
  container: {
    height: cardH,
    width: cardW,
    backgroundColor: ColorPalette.darkGreen,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 16,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    height: cardH * 0.6,
    width: cardH * 0.5,
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.MONTSERRAT_BOLD,
    color: ColorPalette.white,
  },
  ratingBar: {
    alignSelf: "flex-start",
    marginTop: 8,
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
    color: ColorPalette.white,
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

export default RecommendedItemCard;
