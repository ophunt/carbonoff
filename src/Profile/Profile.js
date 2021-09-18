import React from "react";
import { View, Text, Button } from "react-native";
import "./Profile.style.js";

export default function Profile({ route, navigation, signOut }) {
    return (
        <View>
            <Text>Welcome to the profile page</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
}
