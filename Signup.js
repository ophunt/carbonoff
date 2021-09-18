import { CommonActions } from "@react-navigation/routers";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
    const goToLogin = () => {
        navigation.goBack();
    };

    return (
        <View>
            <Text>Sign Up</Text>
            <Button title="Back to Login" onPress={goToLogin} />
        </View>
    );
}
