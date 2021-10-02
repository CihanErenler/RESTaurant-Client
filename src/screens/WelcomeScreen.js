import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";

const WelcomeScreen = ({ loggedIn, setloggedIn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RESTaurant</Text>
        <Text style={styles.bodyText}>
          Find your favorite restaurant and enjoy your meal
        </Text>
        <Button
          model="primary"
          text="Get Started"
          onPress={() => setloggedIn(true)}
          style={styles.button}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/welcome-screen.png")}
        resizeMode="stretch"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg_white,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
  },
  bodyText: {
    width: 221,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginTop: spacings.s20,
    marginBottom: spacings.s30,
  },
  button: {
    width: 305,
    height: 45,
  },
});
