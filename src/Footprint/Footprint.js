import React from "react";
import { View, Text, Image, Button } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Footprint.style.js";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.text} {...props}>
            {children}
        </Text>
    );
}

export default function Footprint({ navigation }) {
    // TODO: actually get this value, probably stored locally
    const userBaselineResults = null;

    const hasTakenQuizPage = (
        <React.Fragment>
            {/* Baseline chart */}
            <View style={[globalStyles.container]}>
                <StyledText>Baseline Footprint</StyledText>
                <Image style={styles.chart} source={require("../../assets/icon.png")} />
            </View>
            {/* Overall baseline buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <View style={[globalStyles.container, globalStyles.greenBack]}>
                    <Button
                        title={`Update baseline${"\n"}to 30 day average`}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
                <View style={[globalStyles.container, globalStyles.greenBack]}>
                    <Button
                        title={`Retake Baseline${"\n"}Measurement Quiz`}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
            </View>
            {/* Daily graph */}
            <View style={globalStyles.container}>
                <StyledText>Carbon Footprint over last 3 days</StyledText>
                <Image style={styles.chart} source={require("../../assets/icon.png")} />
            </View>
            {/* Overall baseline buttons */}
            <View style={[globalStyles.container, globalStyles.flexRow]}>
                <View style={[globalStyles.container, globalStyles.greenBack]}>
                    <Button
                        title={`Add new${"\n"}carbon event`}
                        onPress={() => {
                            /* TODO */
                        }}
                    />
                </View>
                <View style={[globalStyles.container, globalStyles.greenBack]}>
                    <Button
                        title={`View carbon${"\n"}event history`}
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
                <View style={[globalStyles.container, globalStyles.greenBack]}>
                    <Button
                        title={`Take Baseline${"\n"}Measurement Quiz`}
                        onPress={() => {
                            navigation.navigate("Quiz");
                        }}
                    />
                </View>
            )}
        </View>
    );
}
