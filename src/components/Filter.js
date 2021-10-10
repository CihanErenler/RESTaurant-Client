import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Switch,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from "react-native";
import Button from "./Button";
import colors from "../helpers/colors";
import customStyles from "../helpers/styles";
import cities from "../data/cities";
import spacings from "../helpers/spacings";
import { BlurView } from "expo-blur";

const Filter = ({
  showModal,
  setShowModal,
  handleAsc,
  handleDesc,
  asc,
  desc,
  city,
  setCity,
  changeCity,
  setChangeCity,
  onLocation,
}) => {
  const [fiCities, setFiCities] = useState(cities);
  const [citiesToShow, setCitiesToShow] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const filter = (value) => {
    const newList = cities.filter(
      (val) => val.city.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setCitiesToShow(newList);
    console.log(newList);
  };

  const handleLocation = (value) => {
    onLocation(value);
    setCity(value);
    setCitiesToShow(null);
    setChangeCity(false);
  };

  let Comp = BlurView;

  if (Platform.OS === "android") {
    Comp = View;
  }

  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <Comp style={styles.filter} intensity={90} tint="light">
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
          <View style={styles.filterWrap}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.filterTitle}>Location: </Text>
              {changeCity ? (
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => {
                    filter(value);
                    setCity(value);
                    setInputValue(value);
                  }}
                  value={city}
                />
              ) : (
                <TouchableOpacity>
                  <Text style={styles.city}>{city}</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity onPress={() => setChangeCity(true)}>
              <View style={styles.changeButton}>
                <Text style={styles.changeButtonText}>Change</Text>
              </View>
            </TouchableOpacity>
          </View>
          {inputValue !== "" && changeCity ? (
            <View style={styles.cities}>
              <FlatList
                data={citiesToShow}
                keyExtractor={(item) => item.city}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity onPress={() => handleLocation(item.city)}>
                      <View style={styles.filteredCity}>
                        <Text style={styles.filteredCityText}>{item.city}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
        <Button
          style={styles.button}
          text="Close"
          onPress={() => {
            setShowModal(false);
            setChangeCity(false);
            setInputValue("");
          }}
        />
      </Comp>
    </Modal>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filter: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    overflow: "hidden",
    ...customStyles.shadow_1,
    marginBottom: spacings.s20,
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
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  changeButton: {
    backgroundColor: colors.bg_dark,
    padding: 3,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  changeButtonText: {
    color: colors.bg_white,
  },
  input: {
    width: 120,
    borderRadius: 5,
    backgroundColor: colors.light_gray_2,
    paddingHorizontal: spacings.s10,
  },
  cities: {
    flex: 1,
    marginBottom: spacings.s10,
    alignItems: "center",
  },
  filteredCity: {
    width: 200,
    padding: spacings.s5,
    backgroundColor: colors.light_gray_2,
    marginBottom: spacings.s2,
    borderRadius: 10,
  },
  filteredCityText: {
    textAlign: "center",
  },
  button: {
    width: 305,
    height: 45,
  },
});
