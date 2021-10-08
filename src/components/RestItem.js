import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import customStyles from "../helpers/styles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const RestItem = ({ item, onPress, onHeartPress }) => {

  const [isHeartPressed, setIsHeartPressed] = useState(false);

  const heart =
      {
        name: isHeartPressed ? "heart" : "hearto",
        color: isHeartPressed ? colors.accent : colors.light_gray_2
      }

    const heartPressed = () =>
        {
          isHeartPressed ? setIsHeartPressed(false) : setIsHeartPressed(true);
          onHeartPress();
        }


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
              <Text style={styles.pillText}>{item.categories[0] ? item.categories[0].title : "No categories"}</Text>
            </View>
          </View>
          <View style={styles.rating}>
            <View style={styles.address}>
              <Entypo name="location-pin" size={18} color="#FA5D5D" />
              <Text>{item.location.address1}</Text>
            </View>
            <Rating
              ratingColor="tomato"
              startingValue={parseFloat(item.rating)}
              readonly={true}
              imageSize={15}
            />
          </View>
        </View>
        <TouchableOpacity onPress={heartPressed} style={styles.heartIcon}>
          <AntDesign
            {...heart}
            size={24}
            style={styles.icon}
          />
        </TouchableOpacity>
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
    minWidth: 50,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    borderRadius: 24,
    backgroundColor: `rgba(25,156,219,0.1)`,
    marginTop: 5,
    paddingHorizontal: spacings.s10,
    marginBottom: spacings.s5,
  },
  pillText: {
    fontSize: 14,
    color: colors.primary,
    textAlign: "center",
  },
  heartIcon: {
    right: spacings.s12,
    bottom: spacings.s30,
  },
  rating: {
    width: "100%",
    alignItems: "flex-start",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacings.s5,
  },
});
