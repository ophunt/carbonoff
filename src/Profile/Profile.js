import React from "react";
import { View, Text, Button, Image } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Profile.style.js";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.text} {...props}>
            {children}
        </Text>
    );
}

export default function Profile({ route, navigation, signOut }) {
    return (
        <View style={globalStyles.growContainer}>
            {/* Profile pic and bio info */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <Image style={styles.profilePic} source={require("../../assets/icon.png")} />
                <View style={styles.bioInfo}>
                    <StyledText>Name: Owen Hunt</StyledText>
                    <StyledText>Username: ophunt</StyledText>
                    <StyledText>Email: ohunt2@wisc.edu</StyledText>
                    <StyledText>Location: Madison, WI, USA</StyledText>
                </View>
            </View>
            {/* Graph of last 30 days */}
            <View style={[globalStyles.container, globalStyles.flexRow]}></View>
            {/* Rankings and associated buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}></View>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
}
