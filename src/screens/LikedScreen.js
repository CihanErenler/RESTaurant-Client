import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import LikedItem from "../components/LikedItem";
import spacings from "../helpers/spacings";
import colors from "../helpers/colors";
import data from "../data/data";

const LikedScreen = () => {
  const [liked, setLiked] = useState(null);

  const fetchLiked = async () => {
    await data.getLikedRest()
    .then((res) => {
      setLiked(res.message)
    })
    .catch((err) => console.log(err.stack));
  }

  useEffect(() => {
    fetchLiked(),
    console.log("WE are here: " + JSON.stringify(liked))
  }, []);


  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={"black"} />
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>This is what you like 😍</Text>
      </View>
      {liked ? (
        <View style={styles.listWrap}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={liked}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => {
              return (
                <LikedItem
                  item={item}
                  onPress={() =>{console.log(item._id)}}
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
};

export default LikedScreen;

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

