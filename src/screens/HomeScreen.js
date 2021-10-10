import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
  Modal,
  StatusBar,
} from "react-native";
import RestItem from "../components/RestItem";
import spacings from "../helpers/spacings";
import SearchArea from "../components/SearchArea";
import colors from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";
import Filter from "../components/Filter";

let isFavorite = false;
const heartPressed = () => {
  if (isFavorite === false) {
    isFavorite = true;
    console.log("Added to favorite");
  } else {
    isFavorite = false;
    console.log("Removed from favorite");
  }
};

function HomeScreen({
  rest,
  search,
  setSearch,
  onEnd,
  navigation,
  showModal,
  setShowModal,
  setRest,
  itemsToShow,
  setItemsToShow,
  city,
  setCity,
  onLocation,
}) {
  const [asc, setAsc] = useState(false);
  const [desc, setDesc] = useState(false);
  const [changeCity, setChangeCity] = useState(false);

  // When fetch a new list of restaurants check if one of the filters is on
  // If on then apply the filter to the new list
  useEffect(() => {
    if (asc) {
      sortAsc();
    } else if (desc) {
      sortDesc();
    }
  }, [rest]);

  useEffect(() => {
    if (asc) {
      sortAsc();
      return;
    }
    if (!desc && !asc) {
      setItemsToShow(rest);
    }
  }, [asc]);

  useEffect(() => {
    if (desc) {
      sortDesc();
      return;
    }
    if (!desc && !asc) {
      setItemsToShow(rest);
    }
  }, [desc]);

  const sortAsc = () => {
    const newList = [...filter().highest, ...filter().mid, ...filter().lowest];
    setItemsToShow(newList);
  };

  const sortDesc = () => {
    const newList = [...filter().lowest, ...filter().mid, ...filter().highest];
    setItemsToShow(newList);
  };

  const handleAsc = () => {
    setAsc(!asc);
    setDesc(false);
  };

  const handleDesc = () => {
    setDesc(!desc);
    setAsc(false);
  };

  // Filter by price
  const filter = () => {
    const lowest = rest.filter((item) => item.price === "€");
    const mid = rest.filter((item) => item.price === "€€");
    const highest = rest.filter((item) => item.price === "€€€");
    return { lowest, mid, highest };
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={"black"} />
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>Let's eat Quality food 😋</Text>
      </View>
      <SearchArea
        search={search}
        setSearch={setSearch}
        onEnd={onEnd}
        setShowModal={setShowModal}
      />
      <Filter
        setShowModal={setShowModal}
        showModal={showModal}
        handleAsc={handleAsc}
        handleDesc={handleDesc}
        asc={asc}
        desc={desc}
        changeCity={changeCity}
        setChangeCity={setChangeCity}
        city={city}
        setCity={setCity}
        onLocation={onLocation}
      />
      {itemsToShow ? (
        <View style={styles.listWrap}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={itemsToShow}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <RestItem
                  item={item}
                  onPress={() =>
                    navigation.navigate("Details", { id: item.id })
                  }
                  onHeartPress={heartPressed}
                />
              );
            }}
          />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bg_white,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: spacings.s10,
    paddingHorizontal: spacings.s20,
    textAlign: "left",
    paddingTop: spacings.s20,
    color: colors.bg_dark,
    width: "60%",
  },
  textWrap: {
    width: "100%",
    flexDirection: "row",
  },
  filter: {
    marginTop: 25,
  },
  listWrap: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingTop: 20,
    backgroundColor: colors.bg_light_blue,
    paddingBottom: Platform.OS === "android" ? 100 : 60,
  },
});
