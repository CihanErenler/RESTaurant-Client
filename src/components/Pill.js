import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../helpers/colors'
import spacings from '../helpers/spacings'

const Pill = ({title}) => {
  return (
    <View style={styles.bg}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  )
}

export default Pill

const styles = StyleSheet.create({

  bg: {
    minWidth: 80,
    paddingVertical: 3,
    height: 24,
    borderRadius: 24,
    backgroundColor: `rgba(25,156,219,0.1)`,
    marginTop: 5,
    marginRight: spacings.s4,
    paddingHorizontal: spacings.s10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 16,
    color: colors.primary,
    textAlign: "center",
  }
})
