import React, { useState } from "react";
import data from "../data/data";

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
  Alert,
} from "react-native";
import Button from "../components/Button";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ loggedIn, setloggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    city: "",
  });

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

  const loginPressed = () => {
    setIsLogin(true);
    setIsSignup(false);
    setIsNext(false);
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

  const handleValidation = () => {
    if (
      register.name === "" ||
      register.lastname === "" ||
      register.email === "" ||
      register.city === "" ||
      register.password === ""
    ) {
      return Alert.alert("Validation error!", "Fields can not be empty!", [
        { text: "Ok", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (register.password !== register.password2) {
      return Alert.alert("Validation error!", "Password does not match!", [
        { text: "Ok", onPress: () => console.log("OK Pressed") },
      ]);
    }

    const newObj = {
      name: register.name,
      lastname: register.lastname,
      email: register.email,
      password: register.password,
      city: register.city,
    };

    loginPressed();
    data
      .registerUser(newObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    const alert = {};
    alert.wrongPassword = () => {
      return Alert.alert(
        "Validation error!",
        "Username and password does not match",
        [{ text: "Ok", onPress: () => console.log("OK Pressed") }]
      );
    };
    alert.emptyField = () => {
      return Alert.alert("Validation error!", "Fields can not be empty!", [
        { text: "Ok", onPress: () => console.log("OK Pressed") },
      ]);
    };

    if (login.email === "" || login.password === "") return alert.emptyField();


    data
      .loginUser(login)
      .then((res) => {
        if (res.success === 1) return setloggedIn(true);
        if (res.success === 0) return alert.wrongPassword();
      })
      .catch((err) => console.log(err));
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
                      value={login.email}
                      onChangeText={(value) => {
                        setLogin({ ...login, email: value });
                      }}
                    />
                    <AntDesign name="user" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={styles.input}
                      value={login.password}
                      onChangeText={(value) => {
                        setLogin({ ...login, password: value });
                      }}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                </View>
                <Button
                  model="primary"
                  text="Login"
                  style={styles.button}
                  onPress={handleLogin}
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
                      value={register.name}
                      onChangeText={(value) => {
                        setRegister({ ...register, name: value });
                      }}
                    />
                    <AntDesign name="user" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Lastname"
                      style={styles.input}
                      value={register.lastname}
                      onChangeText={(value) => {
                        setRegister({ ...register, lastname: value });
                      }}
                    />
                    <AntDesign name="user" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="City"
                      style={styles.input}
                      value={register.city}
                      onChangeText={(value) => {
                        setRegister({ ...register, city: value });
                      }}
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
                      value={register.email}
                      onChangeText={(value) => {
                        setRegister({ ...register, email: value });
                      }}
                    />
                    <AntDesign name="mail" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Password"
                      secureTextEntry={true}
                      style={styles.input}
                      value={register.password}
                      onChangeText={(value) => {
                        setRegister({ ...register, password: value });
                      }}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                  <View style={styles.txtInput}>
                    <TextInput
                      autoCorrect={false}
                      placeholder="Repeat Password"
                      secureTextEntry={true}
                      style={styles.input}
                      value={register.password2}
                      onChangeText={(value) => {
                        setRegister({ ...register, password2: value });
                      }}
                    />
                    <AntDesign name="lock" size={24} style={styles.icon} />
                  </View>
                </View>
                <Button
                  model="primary"
                  text="Signup"
                  style={styles.button}
                  onPress={handleValidation}
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
