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
        width: 350,
        height: 200,
        marginTop: 10,
        borderWidth: 1,
    },
    greenBack: {
        margin: 10,
        padding: 10,
        backgroundColor: colors["light-green"],
    },
    bigFont: {
        fontSize: 30,
    },
});
