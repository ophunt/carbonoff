import React from "react";
import { View, Text, Button, Image } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Profile.style.js";

export default function Profile({ route, navigation, signOut }) {
    return (
        <View style={globalStyles.container}>
            <View>
                <Image style={styles.profilePic} source={require("../../assets/icon.png")} />
                <Text>Name: Owen Hunt</Text>
            </View>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
}
