import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../helpers/colors'
import spacings from '../helpers/spacings'


const WelcomeScreen = ({loggedIn, setloggedIn}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>RESTaurant</Text>
                <Text style={styles.bodyText}>Find your favorite restaurant and enjoy your meal</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>setloggedIn(true)}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.image} source={require('../../assets/images/welcome-screen.png')} resizeMode='stretch' />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg_white,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        // flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 36,
        fontWeight: '700'
    },
    bodyText: {
        width: 221,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: spacings.s20,
        marginBottom: spacings.s30
    },
    button: {
        backgroundColor: colors.secondary,
        width: 305,
        height: 45,
        borderRadius: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: colors.bg_white,
        fontWeight: '700',
        fontSize: 16
    }
})
