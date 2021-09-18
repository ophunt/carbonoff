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
    text: {
        color: colors["light-grey"],
    },
});
