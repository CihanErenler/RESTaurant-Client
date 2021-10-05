import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import customStyles from "../helpers/styles";

const ReviewCard = ({ name, rating, date, text }) => {
  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <View style={styles.namedate}>
          <Text style={styles.author}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingtxt}>Rating:</Text>
          <Text style={styles.score}>{rating}</Text>
        </View>
      </View>
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width - 40,
    backgroundColor: colors.light_gray,
    padding: spacings.s14,
    borderRadius: 10,
    marginBottom: spacings.s10,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#ddd",
  },

  heading: {
    paddingBottom: spacings.s10,
  },

  namedate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  author: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.accent,
  },

  date: {
    fontSize: 11,
    color: colors.bg_dark,
  },

  rating: {
    flexDirection: "row",
  },

  ratingtxt: {
    color: colors.bg_dark,
  },

  score: {
    color: colors.tab_color,
    paddingLeft: spacings.s4,
    fontWeight: "bold",
  },

  txt: {
    fontStyle: "italic",
    color: colors.bg_dark,
    textAlign: "justify",
  },
});
