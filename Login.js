import React from "react";
import { Button, View, Text } from "react-native";

export default function Login({ navigation }) {
    const doLogin = () => {
        const userIsAuthenticated = true;
        if (userIsAuthenticated) {
            navigation.navigate("carbonOff");
        }
    };

    return (
        <View>
            <Text>Sign in to carbonOff</Text>

            <Button title="Log In" onPress={doLogin} />
            <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")} />
        </View>
    );
}
