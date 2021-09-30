import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import RestItem from "../components/RestItem";
import spacings from "../helpers/spacings";
import SearchArea from "../components/SearchArea";
import colors from "../helpers/colors";
import {AntDesign, Ionicons} from "@expo/vector-icons";

function HomeScreen({ rest, search, setSearch, onEnd, onHeartPress }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>What do you want to eat today?</Text>
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
                <RestItem item={item} onPress={() => console.log("Ohuy")} onHeartPress={onHeartPress}/>
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
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: spacings.s10,
    paddingHorizontal: spacings.s20,
    textAlign: "left",
    paddingTop: spacings.s20,
    color: colors.bg_dark,
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
  },
});
