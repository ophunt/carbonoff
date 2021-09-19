import React from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-elements";
import globalStyles from "../global.style.js";
import styles from "./Footprint.style.js";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.lightText} {...props}>
            {children}
        </Text>
    );
}

export default function Footprint({ route, navigation }) {
    // TODO: actually get this value, probably stored locally
    const userBaselineResults = {};

    const hasTakenQuizPage = (
        <React.Fragment>
            {/* Baseline chart */}
            <View style={[globalStyles.container]}>
                <StyledText>Baseline Footprint</StyledText>
                <Image style={styles.chart} source={require("../../assets/icon.png")} />
            </View>
            {/* Overall baseline buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <View style={globalStyles.container}>
                    <Button
                        title={`Update baseline${"\n"}to 30 day average`}
                        buttonStyle={styles.button}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
                <View style={globalStyles.container}>
                    <Button
                        title={`Retake Baseline${"\n"}Measurement Quiz`}
                        buttonStyle={styles.button}
                        onPress={() => {
                            navigation.navigate("Quiz");
                        }}
                    />
                </View>
            </View>
            {/* Daily graph */}
            <View style={globalStyles.container}>
                <StyledText>Carbon Footprint Today</StyledText>
                <Image style={styles.chart} source={require("../../assets/icon.png")} />
            </View>
            {/* Overall baseline buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <View style={globalStyles.container}>
                    <Button
                        title={`Add new${"\n"}carbon event`}
                        buttonStyle={styles.button}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
                <View style={globalStyles.container}>
                    <Button
                        title={`View carbon${"\n"}event history`}
                        buttonStyle={styles.button}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
            </View>
        </React.Fragment>
    );

    return (
        <View style={globalStyles.growContainer}>
            {userBaselineResults !== null ? (
                hasTakenQuizPage
            ) : (
                <View style={globalStyles.container}>
                    <Button
                        title={`Take Baseline${"\n"}Measurement Quiz`}
                        buttonStyle={styles.button}
                        onPress={() => {
                            navigation.navigate("Quiz");
                        }}
                    />
                </View>
            )}
        </View>
    );
}
