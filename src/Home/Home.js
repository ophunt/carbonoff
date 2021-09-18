import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Home.style.js";

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>Welcome to the home page</Text>
        </View>
    );
}
