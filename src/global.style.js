import { StyleSheet } from "react-native";
import colors from "../colors.json";

export default StyleSheet.create({
    growContainer: {
        flex: 1,
        backgroundColor: colors.dark_grey,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 0,
        backgroundColor: colors.dark_grey,
        alignItems: "center",
        justifyContent: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    lightText: {
        color: colors.light_grey,
    },
    greenBack: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.light_green,
    },
    redBack: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.red,
    },
});
