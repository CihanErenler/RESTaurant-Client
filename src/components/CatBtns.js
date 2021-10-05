import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import customStyles from "../helpers/styles";
customStyles;

const CatBtns = ({ title, subtitle, color, icon, style, onPress }) => {
  return (
    <View style={styles.headerbtn}>
      <TouchableOpacity style={{...styles.btnwrapper, ...style}} onPress={onPress}>
        <View style={styles.leftside}>
          <View
            style={[
              styles.iconwrapper,
              { backgroundColor: color, shadowColor: color },
            ]}
          >
            <FontAwesome name={icon} size={24} color={colors.bg_white} />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CatBtns;

const styles = StyleSheet.create({
  headerbtn: {
    width: "100%",
    alignItems: "center",
    marginHorizontal: spacings.s20,
    padding: spacings.s5,
  },

  btnwrapper: {
    backgroundColor: "#f4f4f4",
    borderRadius: 50,
    overflow: "hidden",
    width: Dimensions.get("window").width - 40,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacings.s12,
    paddingHorizontal: spacings.s10,
  },

  leftside: {
    width: "75%",
    flexDirection: "row",
  },

  iconwrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 1,
    marginRight: spacings.s10,
  },

  title: {
    fontWeight: "bold",
  },

  subtitle: {
    color: colors.bg_dark,
  },
});
