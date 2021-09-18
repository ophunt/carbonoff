import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Footprint.style.js";

export default function Footprint({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Welcome to the footprint page</Text>
        </View>
    );
}
