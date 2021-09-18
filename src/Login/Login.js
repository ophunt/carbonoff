import React from "react";
import { Button, Text, KeyboardAvoidingView } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Login.style.js";

export default function Login({ navigation }) {
    const doLogin = () => {
        const userIsAuthenticated = true;
        if (userIsAuthenticated) {
            navigation.navigate("Main");
        }
    };

    return (
        <KeyboardAvoidingView style={globalStyles.container}>
            <Text>Sign in to carbonOff</Text>

            <Button title="Log In" onPress={doLogin} />
            <Button title="Log In" onPress={doLogin} />
            <Button title="Log In" onPress={doLogin} />
            <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")} />
        </KeyboardAvoidingView>
    );
}
