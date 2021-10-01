import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../helpers/colors'

/**
 * 
 * @param {*} props 
 * @description text: button text
 * @description onPress: function to be invoked onPress event
 * @description model: 'primary' 
 * @description style: style for the button container (TouchableOpacity)
 * @description textStyle: {color, fontSize, fontWeight, fontStyle}
 * @returns 
 */
const Button = (props) => {
    const {
        text,
        model,
        onPress,
        style,
        textStyle
    } = props

    switch (model) {
        case 'primary':
            return (
                <TouchableOpacity onPress={onPress} style={style}>
                    <LinearGradient
                        colors={['#FF7E6B', '#FFBD59']}
                        start={[0.1, 0.9]}
                        end={[0.9, 0.1]}
                        locations={[0.1, 0.9]}
                        style={styles.button}>
                        <Text style={{
                            color: colors.bg_white,
                            ...styles.buttonText,
                            ...textStyle
                        }}>
                            {text}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
            break;
    
        default:
            return (
                <TouchableOpacity onPress={onPress} style={style}>
                    <LinearGradient
                        colors={['#FF7E6B', '#FFBD59']}
                        start={[0.1, 0.9]}
                        end={[0.9, 0.1]}
                        locations={[0.1, 0.9]}
                        style={styles.button}>
                        <Text style={{
                            color: colors.bg_white,
                            ...styles.buttonText}}>
                            {text}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
            break;
    }

}

export default Button

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 36,
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 16
    }
})
