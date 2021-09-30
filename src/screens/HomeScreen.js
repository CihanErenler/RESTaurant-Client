import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import RestItem from "../components/RestItem";
import spacings from "../helpers/spacings";
import SearchArea from "../components/SearchArea";
import colors from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ rest, search, setSearch, onEnd, navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>Let's eat Quality food 😋</Text>
      </View>
      <SearchArea search={search} setSearch={setSearch} onEnd={onEnd} />
      {rest ? (
        <View style={styles.listWrap}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={rest}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <RestItem
                  item={item}
                  onPress={() => navigation.navigate("Details")}
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
    backgroundColor: "#edfaff",
  },
});
