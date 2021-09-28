import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchArea = ({ onEnd, search, setSearch }) => {
  return (
    <View style={styles.searchArea}>
      <TextInput
        autoCorrect={false}
        onEndEditing={onEnd}
        style={styles.input}
        value={search}
        onChangeText={(value) => setSearch(value)}
        placeholder="Search..."
      />
      <TouchableOpacity onPress={onEnd} style={styles.icon}>
        <AntDesign name="search1" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchArea;

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    height: 40,
    backgroundColor: colors.bg_white,
    borderRadius: 40,
    paddingLeft: spacings.s20,
    paddingRight: spacings.s50,
    marginBottom: spacings.s10,
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: spacings.s20,
  },
  input: {
    width: "100%",
    flex: 1,
    fontSize: 18,
  },
});
