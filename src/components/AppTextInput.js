import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import defaultStyles from "../config/Styles";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={[styles.container, { alignSelf: otherProps.alignSelf }]}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={20}
					color={defaultStyles.Colors.medium}
				/>
			)}
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
		borderRadius: 15,
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginVertical: 10,
		// width: "100%",
		alignItems: "center",
	},
	icon: {
		marginRight: 10,
	},
});
