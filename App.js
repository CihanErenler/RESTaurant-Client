import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import categories from "./src/data/categories";
import TabNav from "./src/navigaiton/Tab";
import Context from "./src/context/Context";
import WelcomeStack from "./src/navigaiton/WelcomeStack";

const Tab = createBottomTabNavigator();

export default function App() {
  const [rest, setRest] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(null);
  const [city, setCity] = useState("helsinki");
  const [search, setSearch] = useState("food");
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  const handlePressedCategory = (cat) => {
    console.log("you are here " + cat);
    setCategory(cat);
  };

  const handleSearch = () => {
    console.log("Entered");
    fetchData(city, search);
  };

  const fetchData = async (city, search) => {
    await data
      .getByCity(city, search)
      .then((res) => {
        setRest(res.businesses);
        setItemsToShow(res.businesses);
      })
      .catch((err) => console.log(err.stack));
  };

  useEffect(() => {
    fetchData(city, search);
  }, []);

  useEffect(() => {
    fetchData(city, category);
  }, [category]);

  if (!loggedIn) {
    return <WelcomeStack loggedIn={loggedIn} setloggedIn={setloggedIn} />;
  }

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
      showModal={showModal}
      setShowModal={setShowModal}
      itemsToShow={itemsToShow}
      setItemsToShow={setItemsToShow}
    />
  );
}
