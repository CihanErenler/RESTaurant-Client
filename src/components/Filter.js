import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Switch,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Button from "./Button";
import colors from "../helpers/colors";
import customStyles from "../helpers/styles";

const Filter = ({
  showModal,
  setShowModal,
  handleAsc,
  handleDesc,
  asc,
  desc,
}) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.filter}>
        <Text style={styles.mainTitle}>Filter</Text>
        <View style={{ width: "100%", height: "100%", flex: 1 }}>
          <View style={styles.filterWrap}>
            <Text style={styles.filterTitle}>Lowest to Highest (price)</Text>
            <Switch
              trackColor={{ false: "#ddd", true: "#ddd" }}
              thumbColor={desc ? colors.tab_color : "#f4f3f4"}
              ios_backgroundColor="#eee"
              onValueChange={handleDesc}
              value={desc}
            />
          </View>
          <View style={styles.filterWrap}>
            <Text style={styles.filterTitle}>Highest to Lowest (price)</Text>
            <Switch
              trackColor={{ false: "#ddd", true: "#ddd" }}
              thumbColor={asc ? colors.tab_color : "#f4f3f4"}
              ios_backgroundColor="#eee"
              onValueChange={handleAsc}
              value={asc}
            />
          </View>
        </View>
        <Button text="Close" onPress={() => setShowModal(false)} />
      </View>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  filter: {
    marginHorizontal: 20,
    marginVertical: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    overflow: "hidden",
    ...customStyles.shadow_1,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 50,
  },
  tag: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  filterWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 16,
  },
});
