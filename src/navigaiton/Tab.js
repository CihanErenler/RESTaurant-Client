import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../helpers/colors";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Screens
import CategoriesScreen from "../screens/CategoriesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeContainer from "../screens/HomeContainer";
import LikedScreen from "../screens/LikedScreen";

const Tab = createBottomTabNavigator();

const TabNav = (props) => {
  const { rest, city, search, setSearch, setRest, setCity, handleSearch } =
    props;
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeContainer"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...styles.bar,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.icon}>
                  <AntDesign
                    name="home"
                    size={30}
                    color={focused ? colors.tabColor : "#666"}
                    style={{ textAlignVertical: "center" }}
                  />
                </View>
              );
            },
          }}
        >
          {(props) => (
            <HomeContainer
              {...props}
              rest={rest}
              search={search}
              setSearch={setSearch}
              onEnd={handleSearch}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...styles.bar,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.icon}>
                  <MaterialIcons
                    name="category"
                    size={30}
                    color={focused ? colors.tabColor : "#666"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Liked"
          component={LikedScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...styles.bar,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.icon}>
                  <AntDesign
                    name="heart"
                    size={24}
                    color={focused ? colors.tabColor : "#666"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...styles.bar,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.icon}>
                  <FontAwesome
                    name="user"
                    size={30}
                    color={focused ? colors.tabColor : "#666"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              ...styles.bar,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.icon}>
                  <Ionicons
                    name="settings"
                    size={30}
                    color={focused ? colors.tabColor : "#666"}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 72,
    shadowColor: "#999",
    paddingBottom: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10,

    elevation: 23,
  },
});
