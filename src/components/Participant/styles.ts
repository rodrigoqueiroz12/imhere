import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#1f1e25",
		paddingLeft: 16,
		borderRadius: 5,
		marginBottom: 12,
	},

	name: {
		color: "#fff",
		fontSize: 16,
	},

	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#e23c44",
		justifyContent: "center",
		alignItems: "center",
	},

	buttonText: {
		color: "#fff",
		fontSize: 24,
	},
})
