import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import getRest from "../data/data";

const Details = ({ navigation, route }) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (route.params.id) {
      getRest
        .getById(route.params.id)
        .then((res) => {
          setDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log(route.params.id);
  return (
    <View>
      {!details ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <ImageBackground
            source={{ uri: details.image_url }}
            style={styles.image}
          />
        </View>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
