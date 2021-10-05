import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import CatBtns from "../components/CatBtns";
import { Ionicons } from "@expo/vector-icons";
import Pill from "../components/Pill";
import { Rating, AirbnbRating } from "react-native-ratings";

const DetailsHeader = ({ details, onPress, onMapPress }) => {
  
  return (
    <View>
      <TouchableOpacity style={styles.backbtn}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={onPress}
        />
      </TouchableOpacity>
      <View style={styles.picwrapper}>
        <ImageBackground
          source={{ uri: details.image_url }}
          style={styles.image}
        >
          <CatBtns
            style={styles.btn}
            title="See Location on Map"
            subtitle={details.location.address1 + ", " + details.location.city}
            color={colors.accent}
            icon="map-marker"
            onPress={onMapPress}
          />
        </ImageBackground>
      </View>
      <View style={styles.categorywrap}>
        {details.categories.map((cat) => (
          <Pill key={cat.title} title={cat.title} />
        ))}
      </View>
      <View style={styles.nameratewrap}>
        <View style={styles.titlewrap}>
          <Text style={styles.title}>{details.name}</Text>
        </View>
        <Rating
          startingValue={parseFloat(details.rating)}
          readonly={true}
          imageSize={20}
        />
      </View>
      <View style={styles.address}>
        <Text style={styles.txt}>{details.location.address1}</Text>
        <Text style={styles.txt}>
          {details.location.zip_code}, {details.location.city}
        </Text>
      </View>
      <Text style={styles.reviewtitle}>Reviews:</Text>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  backbtn: {
    marginTop: Platform.OS === "android" ? spacings.s30 : null,
    marginBottom: spacings.s8,
  },

  picwrapper: {
    borderRadius: 15,
    overflow: "hidden",
  },

  image: {
    width: Dimensions.get("window").width - 40,
    height: 300,
    alignItems: "center",
    paddingTop: spacings.s10,
  },

  btn: {
    width: Dimensions.get("window").width - 60,
  },

  categorywrap: {
    width: Dimensions.get("window").width - 40,
    overflow: "hidden",
    flexDirection: "row",
    paddingBottom: spacings.s8,
    paddingTop: spacings.s8,
    flexWrap: "wrap",
  },

  nameratewrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  titlewrap: {
    flex: 2,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    color: colors.black,
    marginBottom: spacings.s8,
  },

  stars: {
    flex: 1,
    paddingTop: spacings.s8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txt: {
    color: colors.bg_dark,
    marginBottom: spacings.s8,
  },

  reviewtitle: {
    fontSize: 18,
    marginTop: spacings.s20,
    marginBottom: spacings.s12,
  },
});
