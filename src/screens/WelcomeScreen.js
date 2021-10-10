import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button";
import { StatusBar } from "expo-status-bar";

const WelcomeScreen = ({navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar StatusBarStyle="dark"/>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/welcome-screen.jpg")}
        resizeMode="cover">
      <View style={styles.header}>
        <Text style={styles.title}>RESTaurant</Text>
        <Text style={styles.bodyText}>
          Find your favorite restaurant and enjoy your meal
        </Text>
        <Button
          model="primary"
          text="Get Started"
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        />
      </View>
      </ImageBackground>
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
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: '40%'
  },

  image: {
    width: "100%",
    height: '100%',
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
