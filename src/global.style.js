import { StyleSheet } from "react-native";
import * as colors from "../colors.json";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["dark-grey"],
        alignItems: "center",
        justifyContent: "center",
    },
    profilePic: {
        width: 100,
        height: 100,
    },
});
