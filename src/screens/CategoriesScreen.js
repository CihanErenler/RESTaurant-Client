import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import CatCard from "../components/CatCard";
import CatBtns from "../components/CatBtns";
import * as Location from "../data/location";

const Categories = ({
  categories,
  navigation,
  onMoveBack,
  onShowPopular,
  setUserCoordinate,
  setFetchingType,
}) => {
  const goBackHome = (cat) => {
    navigation.navigate("Home");
    onMoveBack(cat);
  };

  const goHomeNearByLocation = async () => {
    const {
      coords: { latitude, longitude },
    } = await Location.getUserLocation();
    // console.log(latitude, longitude)
    setFetchingType("coordinate");
    setUserCoordinate({ latitude, longitude });
    navigation.navigate("Home");
  };

  const showPopular = () => {
    navigation.navigate("Home");
    onShowPopular();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.cattitle}>Choose a category...</Text>
      <CatBtns
        title="Popular"
        subtitle="See what's trending now"
        color={colors.accent}
        icon="heart"
        onPress={showPopular}
      />
      <CatBtns
        title="Near you"
        subtitle="Closest to where you are"
        color={colors.primary}
        icon="map-marker"
        onPress={goHomeNearByLocation}
      />
      <View style={styles.blueBg}>
        <View style={styles.catwrapper}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return <CatCard item={item} onPress={goBackHome} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg_white,
  },
  cattitle: {
    width: "100%",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: spacings.s12,
    paddingHorizontal: spacings.s20,
    marginTop: spacings.s20,
    textAlign: "left",
    color: colors.black,
  },

  catwrapper: {
    width: Dimensions.get("window").width - 32,
    flex: 1,
    marginTop: spacings.s10,
    backgroundColor: colors.bg_light_blue,
  },

  blueBg: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.bg_light_blue,
    marginTop: spacings.s10,
    paddingBottom: Platform.OS === "android" ? 100 : 60,
  },
});
