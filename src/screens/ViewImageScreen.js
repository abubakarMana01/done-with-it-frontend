import React from "react";
import {
	Image,
	Platform,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../config/Colors";

function ViewImageScreen({ route, navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar hidden />
			<TouchableOpacity onPress={navigation.goBack} style={styles.closeIcon}>
				<MaterialCommunityIcons
					onPress={navigation.goBack}
					name="close"
					size={35}
					color={Colors.white}
				/>
			</TouchableOpacity>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					size={35}
					color="#fff"
				/>
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={{ uri: route.params.imageUri }}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 30,
		left: 30,
		zIndex: 2,
	},
	container: {
		backgroundColor: Colors.black,
		flex: 1,
	},
	deleteIcon: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 30,
		right: 30,
		zIndex: 2,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
