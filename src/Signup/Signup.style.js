import { StyleSheet } from "react-native";
import colors from "../../colors.json";

export default StyleSheet.create({
	signup: {
		height: "100%",
		width: "100%",
		backgroundColor: colors.dark_grey,
	},
	logo: {
		marginTop: 8,
		marginBottom: 10,
		height: 150,
		width: 150
	},
	input: {
		marginRight: 50,
		padding: 10
	},
	signupButton: {
		margin: 10,
		marginTop: 20,
		backgroundColor: colors.red,
	}
});
