import { StyleSheet } from "react-native";
import colors from "../../colors.json";

export default StyleSheet.create({
    profilePic: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 100,
        margin: 10,
    },
    graph: {
        width: 318,
        height: 200,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 6
    },
    bigFont: {
        fontSize: 30,
    },
    button: {
        margin: 10,
        backgroundColor: colors.red,
    },
});
