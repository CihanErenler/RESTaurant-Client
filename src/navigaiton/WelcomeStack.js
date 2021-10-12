import React from "react";
import { StyleSheet, Text, View } from "react-native";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const WelcomeStack = (props) => {
  const Stack = createNativeStackNavigator();
  const { loggedIn, setloggedIn } = props;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen loggedIn={loggedIn} setloggedIn={setloggedIn} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeStack;

const styles = StyleSheet.create({});
