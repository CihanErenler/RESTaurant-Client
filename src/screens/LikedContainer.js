import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import LikedScreen from "./LikedScreen";

const Stack = createNativeStackNavigator();

const LikedContainer = (props) => {
  const {
    liked,
    deleteLikedItem
  } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Liked"
        options={{
          headerShown: false,
        }}
      >
        {(props) => (
          <LikedScreen
            {...props}
            liked={liked} 
            deleteLikedItem={deleteLikedItem}
            
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Details" component={Details} 
       options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LikedContainer;

const styles = StyleSheet.create({});
