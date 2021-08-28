import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/Colors";

const NewListingButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<MaterialCommunityIcons
					name="plus-circle"
					size={40}
					color={colors.white}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default NewListingButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: 80,
		height: 80,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,
		borderWidth: 10,
		borderColor: colors.white,
		bottom: 20,
	},
});
