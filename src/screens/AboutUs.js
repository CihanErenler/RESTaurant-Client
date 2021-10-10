import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import customStyles from "../helpers/styles";

const AboutUs = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} setVisible={setVisible} animationType="slide">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.backbtn}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="black"
              onPress={() => setVisible(false)}
            />
          </View>
          <View style={styles.widthcont}>
            <Text style={styles.title}>Our Team:</Text>
            <View style={styles.cardwrapper}>
              <View style={styles.cardline}>
                <View
                  style={[
                    styles.card,
                    { borderColor: colors.primary, marginRight: spacings.s4 },
                  ]}
                >
                  <View style={styles.imgcontainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/cat.jpg")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.titleWrap}>
                    <Text style={styles.name}>Anna Kot</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.card,
                    { borderColor: colors.secondary, marginLeft: spacings.s4 },
                  ]}
                >
                  <View style={styles.imgcontainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/dog.jpg")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.titleWrap}>
                    <Text style={styles.name}>Cihan Erenler</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardline}>
                <View
                  style={[
                    styles.card,
                    { borderColor: colors.support, marginRight: spacings.s4 },
                  ]}
                >
                  <View style={styles.imgcontainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/hedge.jpg")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.titleWrap}>
                    <Text style={styles.name}>Rachmad Fauzan</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.card,
                    { borderColor: colors.accent, marginLeft: spacings.s4 },
                  ]}
                >
                  <View style={styles.imgcontainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/puff.jpg")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.titleWrap}>
                    <Text style={styles.name}>Roman Konstantinov</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.title}>Stats:</Text>
            <View style={styles.statswrapper}>
              <View style={styles.txtline}>
                <Text style={styles.bold}>Version:</Text>
                <Text style={styles.regular}>1.0</Text>
              </View>
              <View style={styles.txtline}>
                <Text style={styles.bold}>License:</Text>
                <Text style={styles.regular}>GNU</Text>
              </View>
              <View style={styles.txtline}>
                <Text style={styles.bold}>Welcome Image:</Text>
                <Text style={styles.regular}>by pch.vector / Freepik</Text>
              </View>
            </View>
          </View>
          <Text style={styles.copy}>Copyright {"\u00A9"} 2021</Text>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg_white,
  },

  widthcont: {
    width: Dimensions.get("window").width - 32,
  },

  backbtn: {
    alignSelf: "flex-start",
    marginTop: Platform.OS === "android" ? spacings.s30 : null,
    marginBottom: spacings.s4,
    marginLeft: spacings.s8,
  },

  title: {
    width: "100%",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    color: colors.black,
  },

  card: {
    flex: 1,
    width: 155,
    height: 185,
    alignItems: "center",
    paddingHorizontal: spacings.s10,
    paddingTop: spacings.s10,
    borderRadius: 10,
    backgroundColor: colors.bg_white,
    borderWidth: 0.5,
    marginTop: spacings.s16,
  },

  imgcontainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  name: {
    fontWeight: "bold",
  },

  titleWrap: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "100%",
  },

  cardwrapper: {
    marginBottom: spacings.s16,
    width: "100%",
  },

  cardline: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statswrapper: {
    marginTop: spacings.s16,
    marginBottom: spacings.s24,
    alignItems: "flex-start",
  },

  txtline: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: spacings.s10,
  },

  bold: {
    color: colors.accent,
    fontWeight: "bold",
    width: "40%",
  },

  regular: {
    color: colors.bg_dark,
  },

  copy: {
    fontSize: 12,
    fontWeight: "100",
    fontStyle: "italic",
    color: "#666",
    marginBottom: spacings.s4,
  },
});
