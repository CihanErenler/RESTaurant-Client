import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../components/Button";
import colors from "../helpers/colors";
import data from "../data/data"

const ProfileScreen = ({ navigation, route }) => {
  const [editMode, seteditMode] = useState(false);
  const [profile, setprofile] = useState({});
  const [city, setcity] = useState();
  const [email, setemail] = useState();
  const [favorite, setfavorite] = useState();
  const [fetching, setfetching] = useState(false)

  const icon = (name) => {
    return <AntDesign name={name} size={16} color="white" />;
  };

  const getProfile = async () => {
    const user = await data.getProfile()

    setprofile({
      picture:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      name: `${user.name} ${user.lastname}`,
      city: user.city,
      email: user.email,
      favorite: user.fav_food,
    });
    setfetching(false)
  };

  const init = () => {
    setcity(profile.city);
    setemail(profile.email);
    setfavorite(profile.favorite);
  };

  const updateHandler = () => {
    const user = {
        city: city,
        email: email,
        fav_food: favorite,
    }

    data.updateProfile(user)
      .then(res => {
        seteditMode(false)
        if (res.success===1) return setfetching(true)
        return Alert.alert(
          'Update error',
          'Error when updating profile',
          [{text: 'ok'}]
        )
      })
  };

  const reset = () => {
    init();
    seteditMode(false);
  };

  useEffect(() => {
    // Hide Tab Bar when using keyboard
    navigation.setOptions({ tabBarHideOnKeyboard: true });
    getProfile();
  }, []);

  useEffect(() => {
    navigation.addListener('tabPress', (e) => {
      setfetching(true)
    })
  }, [navigation]);

  useEffect(() => {
    if (fetching) getProfile()
  }, [fetching]);

  useEffect(() => {
    init();
  }, [profile]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={{
              uri: profile.picture,
            }}
            resizeMode="cover"
          />
          <View style={styles.name}>
            <Text style={styles.nameText}>{profile.name}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
          {!editMode ? (
            <>
              <Button
                text="Favourites"
                style={styles.button}
                icon={icon("heart")}
                onPress={() => navigation.navigate("Liked")}
              />
              <Button
                text="Edit Profile"
                style={styles.button}
                icon={icon("edit")}
                onPress={() => seteditMode(true)}
              />
            </>
          ) : (
            <>
              <Button
                text="Cancel"
                style={styles.button}
                onPress={() => reset()}
              />
              <Button
                text="Done"
                style={styles.button}
                onPress={() => updateHandler()}
              />
            </>
          )}
        </View>

        {!editMode ? (
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>City:</Text>
              <Text style={styles.rightText}>{profile.city}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>Email:</Text>
              <Text style={styles.rightText}>{profile.email}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>Fav Food:</Text>
              <Text style={styles.rightText}>{profile.favorite}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>City:</Text>
              <TextInput
                value={city}
                onChangeText={(text) => setcity(text)}
                style={styles.textInput}
              />
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>Email:</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setemail(text)}
                style={styles.textInput}
              />
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.leftText}>Fav Food:</Text>
              <TextInput
                value={favorite}
                onChangeText={(text) => setfavorite(text)}
                style={styles.textInput}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bg_white,
  },

  // header
  header: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  name: {
    width: 200,
    marginTop: 15,
  },
  nameText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
  },
  // header end

  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    height: 30,
    width: 150,
  },

  // details
  details: {
    flex: 2,
    width: "100%",
    marginTop: 35,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    flex: 1,
    minHeight: 29.5,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    textAlignVertical: "center",
    color: colors.accent,
  },
  rightText: {
    flex: 3,
    fontSize: 18,
    marginBottom: 10,
    textAlignVertical: "center",
    color: colors.bg_dark,
    paddingLeft: 10,
  },
  textInput: {
    flex: 3,
    fontSize: 18,
    marginBottom: 10,
    color: colors.bg,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  // details end
});
