import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import AboutUs from "./AboutUs";

const SettingsScreen = () => {

  const [aboutUs, setAboutUs] = useState(false)

  const HandleAboutUs = () => {
    setAboutUs(true)
  }

  return (
    <View>
      <Text>Settings</Text>
      <Button title="About us" onPress={HandleAboutUs}/>
      <AboutUs setVisible={setAboutUs} visible={aboutUs} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
