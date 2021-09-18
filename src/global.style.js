import { StyleSheet } from "react-native";
import colors from "../colors.json";

export default StyleSheet.create({
    growContainer: {
        flex: 1,
        backgroundColor: colors["dark-grey"],
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 0,
        backgroundColor: colors["dark-grey"],
        alignItems: "center",
        justifyContent: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    lightText: {
        color: colors["light-grey"],
    },
    greenBack: {
        margin: 10,
        padding: 10,
        backgroundColor: colors["light-green"],
    },
});
