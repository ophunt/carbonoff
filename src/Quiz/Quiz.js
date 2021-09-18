import React from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import globalStyles from "../global.style.js";
import styles from "./Quiz.style.js";
import date from "./quizData.json";

function StyledText({ props, children }) {
    return (
        <Text style={globalStyles.lightText} {...props}>
            {children}
        </Text>
    );
}

export default function Quiz({ route, navigation, signOut }) {
    return (
        <View style={globalStyles.growContainer}>
            {/* Question */}
            <Text>Question</Text>
            {/* Input */}

            {/* Nav buttons */}

            {/* Progress Bar */}
        </View>
    );
}
