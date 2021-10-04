import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground,  Dimensions, TouchableOpacity } from "react-native";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import CatBtns from "../components/CatBtns";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Pill from "../components/Pill";

const DetailsHeader = ({details, onPress}) => {
  return (
    <View>
    <TouchableOpacity style = {styles.backbtn}> 
      <Ionicons name="chevron-back" size={24} color="black" onPress = {onPress} />
    </TouchableOpacity>
    <View style = {styles.picwrapper}>
      <ImageBackground
      source={{ uri: details.image_url }}
      style={styles.image}> 
        <CatBtns
        style ={styles.btn}
        title="See Location on Map"
        subtitle= {details.location.address1 + ", " + details.location.city}
        color={colors.accent}
        icon="map-marker"
        />
      </ImageBackground>
    </View>
    <View style = {styles.categorywrap}>
    { details.categories.map((cat) => <Pill key={cat.title} title = {cat.title}/>)}
    </View>
    <View style = {styles.nameratewrap}>
      <View style = {styles.titlewrap}>
        <Text style ={styles.title}>{details.name}</Text>
      </View>
      <View style ={styles.stars}>
        <FontAwesome name="star" size={20} color={colors.accent} />
        <FontAwesome name="star" size={20} color={colors.accent} />
        <FontAwesome name="star" size={20} color={colors.accent} />
        <FontAwesome name="star-o" size={20} color={colors.accent} />
        <FontAwesome name="star-o" size={20} color={colors.accent} />
      </View>
    </View>
    <View style = {styles.address}> 
      <Text style ={styles.txt}>{details.location.address1}</Text>
      <Text style ={styles.txt}>{details.location.zip_code}, {details.location.city}</Text>
    </View>
    <Text style={styles.reviewtitle}>Reviews:</Text>
  </View>
  )
}

export default DetailsHeader

const styles = StyleSheet.create({
  backbtn: {
    marginTop: spacings.s30,
    marginBottom: spacings.s8,
  },

  picwrapper: {
    borderRadius: 15,
    overflow: 'hidden'
  },

  image: {
    width: Dimensions.get("window").width - 40,
    height: 300,
    alignItems: 'center',
    paddingTop: spacings.s10
  },

  btn: {
    width: Dimensions.get("window").width - 60,
  }, 

  categorywrap: {
    width: Dimensions.get("window").width - 40,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingBottom: spacings.s8,
    paddingTop: spacings.s8,
    flexWrap: "wrap"
  },

  nameratewrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  titlewrap: {
    flex: 2,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    color: colors.black,
  },

  stars: {
    flex: 1,
    paddingTop: spacings.s8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txt: {
    color: colors.bg_dark
  },
  
  reviewtitle: {
    fontSize: 18,
    marginTop: spacings.s20,
    marginBottom: spacings.s12
  },

})
