import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";

const ButtonComponent = ({ title, color = "primary", onPress }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={onPress}
			style={[styles.button, { backgroundColor: Colors[color] }]}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default ButtonComponent;

const styles = StyleSheet.create({
	button: {
		width: "100%",
		height: 50,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 7,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "600",
		textTransform: "uppercase",
	},
});
