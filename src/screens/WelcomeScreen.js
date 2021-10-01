import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../helpers/colors'
import spacings from '../helpers/spacings'
import { LinearGradient } from 'expo-linear-gradient'


const WelcomeScreen = ({loggedIn, setloggedIn}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>RESTaurant</Text>
                <Text style={styles.bodyText}>Find your favorite restaurant and enjoy your meal</Text>
                <TouchableOpacity
                    onPress={()=>setloggedIn(true)}>
                    <LinearGradient
                        colors={['#FF7E6B', '#FFBD59']}
                        start={[0.1, 0.9]}
                        end={[0.9, 0.1]}
                        locations={[0.1, 0.9]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </LinearGradient>
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
    buttonGradient: {
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
