import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Button from "../components/Button";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ loggedIn, setloggedIn }) =>
{
    const [isLogin, setIsLogin] = useState(true);
    const [isSignup, setIsSignup] = useState(false);

    const loginFocused =
        {
            style: isLogin ? styles.authFocusedTxt : styles.authTxt,
            borderBottomWidth: isLogin ? 3 : 0,
            borderBottomColor: isLogin ? colors.secondary : 0
        }
    const signupFocused =
        {
            style: isSignup ? styles.authFocusedTxt : styles.authTxt,
            borderBottomWidth: isSignup ? 3 : 0,
            borderBottomColor: isSignup ? colors.secondary : 0
        }

    const loginPressed = () =>
    {
        setIsLogin(true);
        setIsSignup(false);
    }
    const signupPressed = () =>
    {
        setIsLogin(false);
        setIsSignup(true);
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Image style={styles.image} source={require('../../assets/images/login-screen.png')} resizeMode="stretch" />
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            RESTaurant
                        </Text>
                        <Text style={styles.bodyText}>
                            Food app
                        </Text>
                    </View>
                    <View style={styles.authMethod}>
                        <TouchableOpacity style={[styles.loginBtn, loginFocused]} onPress={loginPressed}>
                            <Text {...loginFocused}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.signupBtn, signupFocused]} onPress={signupPressed}>
                            <Text {...signupFocused}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.txtInput}>
                            <TextInput autoCorrect={false} placeholder="Email" keyboardType="email-address" style={{width: "100%"}} />
                            <AntDesign name="user" size={24} style={styles.icon}/>
                        </View>
                        <View style={styles.txtInput}>
                            <TextInput autoCorrect={false} placeholder="Password" secureTextEntry={true} style={{width: "100%"}}/>
                            <AntDesign name="lock" size={24} style={styles.icon}/>
                        </View>
                    </View>
                    <Button model="primary" text="Login" style={styles.button} onPress={() => setloggedIn(true)} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:
        {
            flex: 1,
        },
    inner:
        {
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.bg_white,
        },
    image:
        {
            width: "100%",
        },
    header:
        {
            margin: spacings.s30
        },
    title:
        {
            fontSize: 24,
            fontWeight: "700",
        },
    bodyText:
        {
            fontSize: 18,
            fontWeight: "400",
            color: colors.light_gray_2,
            textAlign: "center"
        },
    authMethod:
        {
            flexDirection: "row",
        },
    authTxt:
        {   fontSize: 14,
            fontWeight: "400"
        },
    authFocusedTxt:
        {
            fontWeight: "700",
        },
    loginBtn:
        {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: colors.light_gray,
            width: 160,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
        },
    signupBtn:
        {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: colors.light_gray,
            width: 160,
            height: 40,
            justifyContent: "center",
            alignItems: "center"

        },
    inputContainer:
        {
            flex: 1,
            margin: spacings.s20,
        },
    txtInput:
        {
            backgroundColor: colors.light_gray,
            height: 40,
            width: 320,
            borderRadius: 10,
            fontSize: 14,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: spacings.s16,
            paddingRight: spacings.s40,
            margin: spacings.s16
        },
    button:
        {
            width: 305,
            height: 45,
            margin: spacings.s40
        },
    icon:
        {
            position: "absolute",
            right: spacings.s16
        }
})