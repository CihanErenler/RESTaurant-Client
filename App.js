import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import categories from "./src/data/categories";
import TabNav from "./src/navigaiton/Tab";

const Tab = createBottomTabNavigator();

export default function App() {
  const [rest, setRest] = useState(null);
  const [city, setCity] = useState("helsinki");
  const [search, setSearch] = useState("&categories=food");
  const [category, setCategory] = useState("");

  const handlePressedCategory = (cat) => {
    console.log("you are here " + cat);
    setCategory(cat);
  };

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

  useEffect(() => {
    fetchData(city, category);
  }, [category]);

  return (
    <TabNav
      rest={rest}
      city={city}
      search={search}
      setRest={setRest}
      setSearch={setSearch}
      setCity={setCity}
      handleSearch={handleSearch}
      handleCat={handlePressedCategory}
      categories={categories}
    />
  );
}
