import React from "react";
import { View, Text } from "react-native";

export default function Profile({ navigation, topLevelNavigation }) {
    return (
        <View>
            <Text>Welcome to the profile page</Text>
            <Text>topLevelNavigation: {JSON.stringify(topLevelNavigation)}</Text>
        </View>
    );
}
