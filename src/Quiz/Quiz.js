import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button, LinearProgress, Slider } from "react-native-elements";
import globalStyles from "../global.style.js";
import styles from "./Quiz.style.js";
import data from "./baselineQuizData.json";
import colors from "../../colors.json";

function StyledText({ style, props, children }) {
    return (
        <Text style={{ ...globalStyles.lightText, ...style }} {...props}>
            {children}
        </Text>
    );
}

let formattedData = {};
for (let category of Object.keys(data)) {
    for (let qNum of Object.keys(data[category])) {
        formattedData[`${category}_${qNum}`] = data[category][qNum];
    }
}
const qList = Object.entries(formattedData);
const qCount = qList.length;

export default function Quiz({ route, navigation, signOut }) {
    const [userAnswers, setUserAnswers] = useState({});
    const [qNum, setQNum] = useState(1);
    const [curValue, setCurValue] = useState(null);
    const [inputEl, setInputEl] = useState(null);

    const qData = qList[qNum - 1];
    const [section, qInSec] = qData[0].split("_");

    useEffect(() => {
        createInputSwitch(qNum, qData[1].input);
        setCurValue(qData[1].input.bounds[0]);
    }, [qNum]);

    const updateCurrent = (v) => {
        setCurValue(v);
        setUserAnswers((prev) => ({ ...prev, [qNum]: v }));
    };

    const createInputSwitch = (qNum, input) => {
        switch (input.type) {
            case "slider":
                setInputEl(
                    <Slider
                        key={qNum}
                        allowTouchTrack
                        value={curValue}
                        onValueChange={updateCurrent}
                        minimumValue={input.bounds[0]}
                        maximumValue={input.bounds[1]}
                        step={input.bounds[2]}
                        minimumTrackTintColor={colors.red}
                        style={{ width: 300 }}
                    />
                );
                break;
            default:
                setInputEl(<Text>No input type {input.type} found</Text>);
                break;
        }
    };

    return (
        <View style={globalStyles.growContainer}>
            <View style={globalStyles.growContainer}>
                {/* Question */}
                <StyledText style={{ margin: 20 }}>
                    {section} {qInSec}
                </StyledText>
                <StyledText style={{ margin: 20 }}>{qData[1].text}</StyledText>
                {/* Input */}
                {inputEl}
                <StyledText style={{ margin: 20 }}>
                    {curValue} {qData[1].units}
                </StyledText>
            </View>

            <View style={globalStyles.growContainer}>
                {/* Nav buttons */}
                <View style={[globalStyles.container, globalStyles.flexRow]}>
                    <Button
                        title="Previous"
                        disabled={qNum === 1}
                        buttonStyle={styles.button}
                        onPress={() => {
                            setQNum((prev) => Math.max(prev - 1, 0));
                        }}
                    />
                    <Button
                        title="Next"
                        disabled={qNum === qCount}
                        buttonStyle={styles.button}
                        onPress={() => {
                            setQNum((prev) => Math.min(prev + 1, qCount));
                        }}
                    />
                </View>

                {/* Progress Bar */}
                <LinearProgress
                    style={{ width: 220 }}
                    color={colors.red}
                    variant="determinate"
                    value={(qNum - 1) / (qCount - 1)}
                />
                {/* Finish button */}
                <Button
                    title="Finish"
                    disabled={qNum !== qCount}
                    buttonStyle={styles.button}
                    onPress={() => {
                        // TODO: send userAnswers to API
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
}
