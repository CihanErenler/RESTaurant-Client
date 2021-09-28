import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { Foundation } from "@expo/vector-icons";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [rest, setRest] = useState(null);
  const [city, setCity] = useState("helsinki");
  const [search, setSearch] = useState("&categories=food");

  const handleSearch = () => {
    fetchData(city, search);
  };

  const fetchData = async (city, search) => {
    await data
      .getByCity(city, search)
      .then((res) => {
        console.log(res);
        setRest(res.businesses);
      })
      .catch((err) => console.log(err.stack));
  };

  useEffect(() => {
    fetchData(city, search);
    setSearch("");
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
          {(props) => (
            <HomeScreen
              {...props}
              rest={rest}
              search={search}
              setSearch={setSearch}
              onEnd={handleSearch}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
