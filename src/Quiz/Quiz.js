import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button, LinearProgress } from "react-native-elements";
import globalStyles from "../global.style.js";
import styles from "./Quiz.style.js";
import data from "./quizData.json";
import colors from "../../colors.json";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.lightText} {...props}>
            {children}
        </Text>
    );
}

export default function Quiz({ route, navigation, signOut }) {
    const [userAnswers, setUserAnswers] = useState({});

    return (
        <View style={globalStyles.growContainer}>
            <View style={globalStyles.growContainer}>
                {/* Question */}
                <StyledText>Question</StyledText>
                {/* Input */}
                <StyledText>Input</StyledText>
            </View>

            <View style={globalStyles.growContainer}>
                {/* Nav buttons */}
                <View style={[globalStyles.container, globalStyles.flexRow]}>
                    <Button title="Previous" buttonStyle={styles.button} onPress={() => {}} />
                    <Button title="Next" buttonStyle={styles.button} onPress={() => {}} />
                </View>

                {/* Progress Bar */}
                <LinearProgress style={{ width: 220 }} color={colors.red} variant="determinate" value={0.5} />
            </View>
        </View>
    );
}
