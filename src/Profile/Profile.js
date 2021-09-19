import React from "react";
import { View, Alert } from "react-native";
import { Text, Button, Image, Avatar } from "react-native-elements";
import globalStyles from "../global.style.js";
import styles from "./Profile.style.js";
import colors from "../../colors.json";

function StyledText({ props, children }) {
    return (
        <Text style={[globalStyles.lightText, { fontSize: 14 }]} {...props}>
            {children}
        </Text>
    );
}

export default function Profile({ route, navigation, signOut }) {
    return (
        <View style={globalStyles.growContainer}>
            {/* Profile pic and bio info */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <Avatar
                    size="xlarge"
                    style={{ height: 100, width: 100, marginLeft: -20, marginTop: -10 }}
                    avatarStyle={{ borderWidth: 1, borderColor: colors.red, borderStyle: "solid" }}
                    rounded
                    source={{
                        uri: "https://media-exp1.licdn.com/dms/image/C4E03AQEHlOPhZDVSvA/profile-displayphoto-shrink_400_400/0/1613088851748?e=1637798400&v=beta&t=axQREh0c4agLv3KsnsZmdcji1REQup6sxatJPrEArcg",
                    }}
                />
                <View style={(styles.bioInfo, { marginLeft: 20, marginTop: -10 })}>
                    <StyledText>Name: James Hunt</StyledText>
                    <StyledText>Username: @jhunt</StyledText>
                    <StyledText>Email: jhunt@wisc.edu</StyledText>
                    <StyledText>Location: Madison, WI, USA</StyledText>
                </View>
            </View>
            {/* Graph of last 30 days */}
            <View style={[globalStyles.container, { marginTop: 25 }]}>
                <StyledText>Carbon Footprint over last 30 days</StyledText>
                <Image
                    style={styles.graph}
                    source={{ uri: "https://ak.picdn.net/shutterstock/videos/25920416/thumb/10.jpg" }}
                />
            </View>
            {/* Rankings and associated buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow, { marginTop: 20, marginBottom: 10 }]}>
                <View>
                    <View style={[globalStyles.container, globalStyles.greenBack, { borderRadius: 4 }]}>
                        <Text style={styles.bigFont}>Top 97th</Text>
                        <Text>among people</Text>
                        <Text>in your city</Text>
                    </View>
                    <View>
                        <Button
                            title={`View${"\n"}Leaderboard`}
                            buttonStyle={styles.button}
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View style={[globalStyles.container, globalStyles.greenBack, { borderRadius: 4 }]}>
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
