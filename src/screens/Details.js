import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import getRest from "../data/data";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import ReviewCard from "../components/ReviewCard";
import DetailsHeader from "../components/DetailsHeader";
import ModalMap from "./ModalMap"

const Details = ({ navigation, route }) => {
  const [details, setDetails] = useState(null);
  const [reviews, setReviews] = useState("");
  const [modalMap, setModalMap] = useState(false)
  const [coordinate, setCoordinate] = useState()

  const openMap = () => {
    setCoordinate(details.coordinates)
    setModalMap(true)
  }

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

  useEffect(() => {
    if (route.params.id) {
      getRest
        .getReviews(route.params.id)
        .then((res) => {
          setReviews(res.reviews);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!details ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={styles.detailscreen}>
            <FlatList
              ListHeaderComponent={
                <DetailsHeader
                  details={details}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  onMapPress={openMap}
                />
              }
              showsVerticalScrollIndicator={false}
              data={reviews}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <ReviewCard
                    name={item.user.name}
                    rating={item.rating}
                    date={item.time_created}
                    text={item.text}
                  />
                );
              }}
            />
          </View>
        </View>
      )}
      {modalMap && (
        <ModalMap visible={modalMap} coordinate={coordinate} setVisible={setModalMap} />
      )}
    </SafeAreaView>
  );
};

const headerComponent = () => {
  return;
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg_white,
  },

  detailscreen: {
    marginBottom: 90,
  },
});
