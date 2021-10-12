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
import LikedContainer from "../screens/LikedContainer";

const Tab = createBottomTabNavigator();

const TabNav = (props) => {
  const {
    rest,
    city,
    search,
    setSearch,
    setRest,
    setCity,
    handleSearch,
    handleCat,
    handlePopular,
    categories,
    showModal,
    setShowModal,
    itemsToShow,
    setItemsToShow,
    onLocation,
    setUserCoordinate,
    setFetchingType,
    setloggedIn,
    handleLiked,
    liked,
    deleteLiked
  } = props;
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
                    color={focused ? colors.tab_color : "#666"}
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
              showModal={showModal}
              setShowModal={setShowModal}
              setRest={setRest}
              itemsToShow={itemsToShow}
              setItemsToShow={setItemsToShow}
              city={city}
              setCity={setCity}
              onLocation={onLocation}
              handleLiked={handleLiked}
              liked={liked}
              deleteLiked={deleteLiked}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Categories"
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
                    color={focused ? colors.tab_color : "#666"}
                  />
                </View>
              );
            },
          }}
        >
          {(props) => (
            <CategoriesScreen
              {...props}
              categories={categories}
              onMoveBack={handleCat}
              onShowPopular={handlePopular}
              setUserCoordinate={setUserCoordinate}
              setFetchingType={setFetchingType}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="LikedContainer"
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
                    color={focused ? colors.tab_color : "#666"}
                  />
                </View>
              );
            },
          }}
        >
          {(props) => (
            <LikedContainer
              {...props}
              liked={liked}
              deleteLikedItem={deleteLiked}
            />
          )}
        </Tab.Screen>
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
                    color={focused ? colors.tab_color : "#666"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
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
                    color={focused ? colors.tab_color : "#666"}
                  />
                </View>
              );
            },
          }}
        >
          {(props) => <SettingsScreen {...props} setloggedIn={setloggedIn} />}
        </Tab.Screen>
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
