import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import customStyles from "../helpers/styles";
import {AntDesign} from "@expo/vector-icons";

const RestItem = ({ item, onPress, onHeartPress }) => {
  let Comp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Comp = TouchableNativeFeedback;
  }
  return (
    <Comp onPress={onPress} style={{ marginHorizontal: 20 }}>
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
        <TouchableOpacity onPress={onHeartPress} style={styles.heartIcon}>
          <AntDesign name="hearto" size={24} style={styles.icon} color={colors.light_gray_2}/>
        </TouchableOpacity>
      </View>
    </Comp>
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
    ...customStyles.shadow_1,
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
  heartIcon:
      {
        right: spacings.s12,
        bottom: spacings.s30
      }
});
