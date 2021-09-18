import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Tips.style.js";

export default function Tips({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Welcome to the tips page</Text>
        </View>
    );
}
