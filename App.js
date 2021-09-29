import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import TabNav from "./src/navigaiton/Tab";

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
        setRest(res.businesses);
      })
      .catch((err) => console.log(err.stack));
  };

  useEffect(() => {
    fetchData(city, search);
    setSearch("");
  }, []);

  return (
    <TabNav
      rest={rest}
      city={city}
      search={search}
      setRest={setRest}
      setSearch={setSearch}
      setCity={setCity}
      handleSearch={handleSearch}
    />
  );
}
