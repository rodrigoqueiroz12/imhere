import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},

	eventName: {
		color: "#FDFCFE",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},

	eventDate: {
		color: "#6B6B6B",
		fontSize: 16,
	},

	input: {
		flex: 1,
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		color: "#fdfcfe",
		padding: 16,
		fontSize: 16,
	},

	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31cf67",
		justifyContent: "center",
		alignItems: "center",
	},

	buttonText: {
		color: "#fff",
		fontSize: 24,
	},

	form: {
		marginTop: 32,
		marginBottom: 42,
		flexDirection: "row",
		gap: 12,
	},

	emptyParticipantsText: {
		color: "#6B6B6B",
		textAlign: "center",
		lineHeight: 36,
		fontSize: 18,
	},
})
