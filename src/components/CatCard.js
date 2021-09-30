import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { FontAwesome5 } from "@expo/vector-icons";
import customStyles from "../helpers/styles";

const CatCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.catcard}
      onPress={onPress.bind(this, item.name)}
    >
      <View style={[styles.caticoncontainer, { backgroundColor: item.color }]}>
        <FontAwesome5 name={item.icon} size={65} color="white" />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.catname}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatCard;

const styles = StyleSheet.create({
  catcard: {
    flex: 1,
    width: 155,
    height: 185,
    alignItems: "center",
    paddingHorizontal: spacings.s10,
    paddingTop: spacings.s10,
    shadowColor: colors.bg_dark,
    ...customStyles.shadow_2,
    borderRadius: 10,
    backgroundColor: colors.bg_white,
    margin: spacings.s4,
  },

  caticoncontainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  catname: {
    fontWeight: "bold",
  },
  titleWrap: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "100%",
  },
});
