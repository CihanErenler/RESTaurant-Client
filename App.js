import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
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
  const [liked, setLiked] = useState([]);

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
    setCategory(cat);
    setSearch(cat);
  };



  const handlePopularRest = () => {
    fetchPopular(city, search)
  }


  const handleSearch = () => {
    fetchData(city, search);
  };

  const fetchData = async (city, search) => {
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
  };

  const fetchPopular = async (city, search) => {
    await data
      .getByCity(city, "food")
      .then((res) => {
        let popular = [];
        let reviews = 0;
        let len = res.businesses.length;

        res.businesses.forEach(item => {
          reviews += item.review_count
        })

        let average = reviews/len

        res.businesses.forEach(item => {
          if(item.review_count > average) {
            popular.push(item);
          }
        });
        if (popular.length===0) {
          Alert.alert(
            "You are at the end of the world",
            "Nothing is popular here!",
            [{text:"I understand"}]);
            return
          }
        setRest(popular);
        setItemsToShow(popular);
      })
      .catch((err) => console.log(err.stack));
    return;
    }

  const handleChangeLocation = (city) => {
    fetchData(city, search);
  };

  const handleLiked = (restId) =>
  {
    const likedObj =
        {
          rest_id: restId.id,
          name: restId.name,
          img_url: restId.image_url ? restId.image_url : "Default",
          rating: restId.rating,
          address: restId.location.address1 + " " + restId.location.city,
        }

     // restId.img_url ? likedObj.img_url = restId.image_url

    data.addLiked(likedObj)
        .then((res) => setLiked([res.message, ...liked]))
        .catch((err) => console.log(err));
  }

  const fetchLiked = async () => {
    await data.getLikedRest()
        .then((res) => {
          setLiked(res.message)
        })
        .catch((err) => console.log(err.stack));
  }

  useEffect(() => {
    fetchLiked()
  }, [loggedIn]);

  const deleteLikedItem = id =>
  {
    data.deleteLiked(id).then((res) => {
        if(res === 204)
    {const newList = liked.filter(item => item._id !== id)
        setLiked(newList)}})
  .catch((err) => console.log(err));
  }

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
      handlePopular={handlePopularRest}
      categories={categories}
      showModal={showModal}
      setShowModal={setShowModal}
      itemsToShow={itemsToShow}
      setItemsToShow={setItemsToShow}
      onLocation={handleChangeLocation}
      setUserCoordinate={setUserCoordinate}
      setFetchingType={setFetchingType}
      setloggedIn={setloggedIn}
      handleLiked={handleLiked}
      liked={liked}
      deleteLiked={deleteLikedItem}
    />
  );
}
