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
    await data.getLikedRest("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyYjI1ODNmZDE0ZjUzOTQyN2RjMjciLCJpYXQiOjE2MzM4NTgyMjR9.JoJHzi2rK6u6HzVi6WTMb9xGyXa8qoWwRvxK0N20NDI")
    .then((res) => {
      setLiked(res)
    })
    .catch((err) => console.log(err.stack));
  }

  useEffect(() => {
    fetchLiked(),
    console.log(liked)
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={"black"} />
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>This is what you liked...</Text>
      </View>
      {liked ? (
        <View style={styles.listWrap}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={liked}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <LikedItem
                  item={item}
                  onPress={() =>{console.log(item.id)}}
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

