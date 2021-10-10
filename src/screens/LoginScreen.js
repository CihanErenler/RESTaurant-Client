import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Button from "../components/Button";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ loggedIn, setloggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const loginFocused = {
    style: isLogin ? styles.authFocusedTxt : styles.authTxt,
    borderBottomWidth: isLogin ? 3 : 0,
    borderBottomColor: isLogin ? colors.secondary : 0,
  };
  const signupFocused = {
    style: isSignup || isNext ? styles.authFocusedTxt : styles.authTxt,
    borderBottomWidth: isSignup || isNext ? 3 : 0,
    borderBottomColor: isSignup || isNext ? colors.secondary : 0,
  };

  const updateName = (enteredName) => {
    setName(enteredName);
  };
  const updateCity = (enteredCity) => {
    setCity(enteredCity);
  };

  const loginPressed = () => {
    setIsLogin(true);
    setIsSignup(false);
    setIsNext(false);

    setName("");
    setCity("");
  };
  const signupPressed = () => {
    setIsLogin(false);
    setIsSignup(true);
    setIsNext(false);
  };
  const nextPressed = () => {
    setIsNext(true);
    setIsSignup(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/login-screen.png")}
          resizeMode="cover"
        >
          <StatusBar barStyle="dark-content" />

          <SafeAreaView style={styles.inner}>
            <View style={styles.header}>
              <Text style={styles.title}>RESTaurant</Text>
              <Text style={styles.bodyText}>Food app</Text>
            </View>

            <View style={styles.authMethod}>
              <TouchableOpacity
                style={[styles.loginBtn, loginFocused]}
                onPress={loginPressed}
              >
                <Text {...loginFocused}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.signupBtn, signupFocused]}
                onPress={signupPressed}
              >
                <Text {...signupFocused}>Signup</Text>
              </TouchableOpacity>
            </View>

            {isLogin && (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Email"
                      keyboardType="email-address"
                      style={styles.input}
                    />
                    <AntDesign name="user" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                </View>
                <Button
                  model="primary"
                  text="Login"
                  style={styles.button}
                  onPress={() => setloggedIn(true)}
                />
              </View>
            )}
            {isSignup && (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Name"
                      style={styles.input}
                      value={name}
                      onChangeText={updateName}
                    />
                    <AntDesign name="user" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="City"
                      style={styles.input}
                      value={city}
                      onChangeText={updateCity}
                    />
                    <AntDesign name="home" size={24} style={styles.icon} />
                  </View>
                </View>
                <Button
                  model="primary"
                  text="Next"
                  style={styles.button}
                  onPress={nextPressed}
                  disabled={false}
                />
              </View>
            )}
            {isNext && (
              <View>
                <View style={styles.inputContainer}>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Email"
                      keyboardType="email-address"
                      style={styles.input}
                    />
                    <AntDesign name="mail" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Repeat Password"
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                </View>
                <Button
                  model="primary"
                  text="Signup"
                  style={styles.button}
                  onPress={() => setloggedIn(true)}
                />
              </View>
            )}
          </SafeAreaView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    margin: spacings.s30,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.light_gray_2,
    textAlign: "center",
  },
  authMethod: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  authTxt: { fontSize: 14, fontWeight: "400" },
  authFocusedTxt: {
    fontWeight: "700",
  },
  loginBtn: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.light_gray,
    width: 160,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  signupBtn: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.light_gray,
    width: 160,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    margin: spacings.s20,
  },
  txtInput: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.light_gray,
    height: 40,
    borderRadius: 10,
    fontSize: 14,
    paddingLeft: spacings.s16,
    paddingRight: spacings.s40,
    width: "100%",
    margin: spacings.s10,
  },
  button: {
    width: 305,
    height: 45,
    margin: spacings.s40,
    borderRadius: 45,
  },
  icon: {
    position: "absolute",
    right: spacings.s16,
  },
});
