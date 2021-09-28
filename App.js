import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import dummy_data from "./src/data/dummy_data";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [rest, setRest] = useState(dummy_data);

  const fetchData = async () => {
    await data
      .getByCity()
      .then((res) => {
        console.log(res.businesses);
        setRest(res.businesses);
      })
      .catch((err) => console.log(err.stack));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <HomeScreen {...props} rest={rest} />}
        </Tab.Screen>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
