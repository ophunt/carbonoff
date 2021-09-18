import React from "react";
import { Button, View, Text } from "react-native";

export default function Login({ navigation }) {
    return (
        <View>
            <Text>Sign in to carbonOff</Text>

            <Button title="Log In" onPress={() => navigation.navigate("Main")} />
            <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")} />
        </View>
    );
}
