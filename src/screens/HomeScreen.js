import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import RestItem from "../components/RestItem";
import spacings from "../helpers/spacings";
import SearchArea from "../components/SearchArea";
import colors from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ rest }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.textWrap}>
        <Text style={styles.mainTitle}>What do you want to eat today?</Text>
      </View>
      <SearchArea />
      <Text
        style={{
          width: "100%",
          paddingRight: 20,
          color: "coral",
          textAlign: "right",
          paddingRight: 30,
          paddingBottom: 10,
        }}
      >
        Filter
      </Text>
      {rest.length > 0 ? (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={rest}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <RestItem item={item} onPress={() => console.log("Ohuy")} />
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
});
