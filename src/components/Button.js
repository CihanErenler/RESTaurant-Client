import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../helpers/colors";

/**
 *
 * @param {*} props
 * @description text: button text
 * @description onPress: function to be invoked onPress event
 * @description model: 'primary'
 * @description icon: the whole icon component. Ex. <AntDesign name='heart'... />
 * @description style: style for the button container (TouchableOpacity)
 * @description textStyle: {color, fontSize, fontWeight, fontStyle}
 * @returns
 */
const Button = (props) => {
  const { text, model, onPress, style, textStyle, disabled, icon } = props;

  const primary = () => (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={{ ...styles.buttonWrap, ...style }}>
        <LinearGradient
          colors={["#FF7E6B", "#FFBD59"]}
          start={[0.1, 0.9]}
          end={[0.9, 0.1]}
          locations={[0.1, 0.9]}
          style={styles.gradient}
        >
          <View style={styles.textContainer}>
            <Text
              style={{
                color: colors.bg_white,
                ...styles.buttonText,
                ...textStyle,
              }}
            >
              {text}
            </Text>
            {icon && icon}
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );

  switch (model) {
    case "primary":
      return primary();
      break;

    default:
      return primary();
      break;
  }
};

export default Button;

const styles = StyleSheet.create({
  buttonWrap: {
    borderRadius: 45,
    overflow: "hidden",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  gradient: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
