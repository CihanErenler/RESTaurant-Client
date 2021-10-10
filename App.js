import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import data from "./src/data/data";
import categories from "./src/data/categories";
import TabNav from "./src/navigaiton/Tab";
import Context from "./src/context/Context";
import WelcomeStack from "./src/navigaiton/WelcomeStack";
import Auth from "./src/data/auth";

export default function App() {
  const [rest, setRest] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(null);
  const [city, setCity] = useState("Helsinki");
  const [search, setSearch] = useState("food");
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [userCoordinate, setUserCoordinate] = useState();
  const [fetchingType, setFetchingType] = useState("default"); // 'default', 'coordinate' look fetchData()

  useEffect(() => {
    handleIfUserLoggedIn()
  }, [loggedIn]);

  useEffect(() => {
    fetchData(city, category);
  }, [category]);
  
  useEffect(() => {
    if (userCoordinate) fetchData(city, category);
  }, [userCoordinate]);
  
  const handleIfUserLoggedIn = async () => {
    const token = await Auth.getValueFor("user-token");
    if (token) return setloggedIn(true)
  }

  const handlePressedCategory = (cat) => {
    console.log("you are here " + cat);
    setCategory(cat);
    setSearch(cat);
  };

  const handleSearch = () => {
    console.log("Entered");
    fetchData(city, search);
  };

  const fetchData = async (city, search) => {
    console.log("fetchData accesed")
    if (fetchingType === "default") {
      await data
        .getByCity(city, search)
        .then((res) => {
          setRest(res.businesses);
          setItemsToShow(res.businesses);
        })
        .catch((err) => console.log(err.stack));
      return;
    }

    data.getByCoordinate(userCoordinate).then((res) => {
      setRest(res.businesses);
      setItemsToShow(res.businesses);
      setFetchingType("default");
    });
    console.log("fetch by coordinate");
  };

  const handleChangeLocation = (city) => {
    fetchData(city, search);
  };

  // local storage

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
      onLocation={handleChangeLocation}
      setUserCoordinate={setUserCoordinate}
      setFetchingType={setFetchingType}
      setloggedIn={setloggedIn}
    />
  );
}
