import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Switch } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import Button from "../components/Button";
import AboutUs from "./AboutUs";

const SettingsScreen = () =>
{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [aboutUs, setAboutUs] = useState(false)

    const HandleAboutUs = () => {
        setAboutUs(true)
    }

    const darkMode =
    {
        backgroundColor: isEnabled ? colors.bg_dark : colors.bg_white
    }

  return (
    <SafeAreaView style={styles.container} {...darkMode}>
      <Text style={styles.title}>Settings:</Text>
        <AboutUs setVisible={setAboutUs} visible={aboutUs} />
        <View style={styles.buttonsContainer}>
            <View style={styles.darkModeContainer}>
                <Text style={styles.darkModeTxt}>Toggle dark mode: </Text>
                <Switch trackColor={{ false: "#767577", true: colors.accent }}
                        thumbColor={isEnabled ? "white" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                />
            </View>
            <Button model="primary" text="About us" style={styles.button} onPress={HandleAboutUs}/>
            <Button model="primary" text="Log out" style={styles.button} />
        </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
        },
    title:
        {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: spacings.s30,
            paddingHorizontal: spacings.s20,
            marginTop: spacings.s20,
            textAlign: "left",
            color: colors.black,
        },
    buttonsContainer:
        {
            paddingHorizontal: spacings.s20,
        },
    darkModeContainer:
        {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
    darkModeTxt:
        {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.accent
        },
    button:
        {
            width: "100%",
            height: 25,
            marginVertical: spacings.s12
        },
});
