import { CommonActions } from "@react-navigation/routers";
import React from "react";
import { KeyboardAvoidingView, Text, Button } from "react-native";
import "./Signup.style.js";

export default function Signup({ navigation }) {
    const goToLogin = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView>
            <Text>Sign Up</Text>
            <Button title="Back to Login" onPress={goToLogin} />
        </KeyboardAvoidingView>
    );
}

/**
 * Sign up notes:
 *  - Usernames can only be in [a-zA-Z0-9_] (letters, numbers, underscores)
 *  - Emails are verified before they are able to sign in
 */
