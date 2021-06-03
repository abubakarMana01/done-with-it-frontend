import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import defaultStyles from "../config/Styles";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.Colors.medium} />}
			<TextInput
				placeholderTextColor={defaultStyles.Colors.medium}
				style={[defaultStyles.text, { flex: 1 }]}
				{...otherProps}
			/>
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.Colors.light,
		borderRadius: 30,
		flexDirection: "row",
		width: "100%",
		padding: 10,
		marginVertical: 10,
		alignItems: "center",
	},
	icon: {
		marginRight: 10,
	},
});
