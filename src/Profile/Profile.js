import React from "react";
import { View, Alert } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import globalStyles from "../global.style.js";
import styles from "./Profile.style.js";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.lightText} {...props}>
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
            <View style={globalStyles.container}>
                <StyledText>Carbon Footprint over last 30 days</StyledText>
                <Image style={styles.graph} source={require("../../assets/icon.png")} />
            </View>
            {/* Rankings and associated buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <View>
                    <View style={[globalStyles.container, globalStyles.greenBack]}>
                        <Text style={styles.bigFont}>Top 97th</Text>
                        <Text>among people</Text>
                        <Text>in your city</Text>
                    </View>
                    <View>
                        <Button
                            title={`View${"\n"}Leaderboard`}
                            buttonStyle={styles.button}
                            onPress={() => {
                                /* TODO */
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View style={[globalStyles.container, globalStyles.greenBack]}>
                        <Text style={styles.bigFont}>3rd lowest</Text>
                        <Text>among your</Text>
                        <Text>36 friends</Text>
                    </View>
                    <View>
                        <Button
                            title={`Add/Manage${"\n"}Friends`}
                            buttonStyle={styles.button}
                            onPress={() => {
                                /* TODO */
                            }}
                        />
                    </View>
                </View>
            </View>
            <Button
                title="Sign Out"
                buttonStyle={styles.button}
                onPress={() => {
                    Alert.alert("Sign out", "Are you sure you would like to sign out?", [
                        { text: "Cancel", style: "cancel" },
                        { text: "OK", style: "default", onPress: signOut },
                    ]);
                }}
            />
        </View>
    );
}
