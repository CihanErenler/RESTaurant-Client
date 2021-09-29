import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { Shadow } from "react-native-neomorph-shadows";

const RestItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 20 }}>
      <View style={styles.card}>
        <View style={styles.imageWrap}>
          <Image
            source={
              item.image_url
                ? { uri: item.image_url }
                : require("../../assets/images/placeholder.png")
            }
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <View style={styles.categories}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{item.categories[0].title}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 110,
    marginBottom: spacings.s16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bg_white,
    padding: spacings.s8,
    borderRadius: 15,
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10,

    elevation: 23,
  },
  details: {
    alignItems: "flex-start",
    flex: 1,
    height: "100%",
    paddingHorizontal: spacings.s12,
  },
  imageWrap: {
    height: 95,
    width: 120,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
  },
  pill: {
    minWidth: 80,
    paddingVertical: 3,
    height: 24,
    borderRadius: 24,
    backgroundColor: `rgba(25,156,219,0.1)`,
    marginTop: 5,
    paddingHorizontal: spacings.s10,
  },
  pillText: {
    fontSize: 16,
    color: colors.primary,
    textAlign: "center",
  },
});
