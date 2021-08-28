import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import ButtonComponent from "../components/ButtonComponent";
import routes from "../navigations/routes";

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			blurRadius={7}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text style={styles.logoText}>Sell What You Don't Need</Text>
			</View>
			<ButtonComponent
				title="Login"
				onPress={() => navigation.navigate(routes.LOGIN)}
			/>
			<ButtonComponent
				title="Register"
				onPress={() => navigation.navigate(routes.REGISTER)}
				color="secondary"
			/>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 20,
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	logoText: {
		fontSize: 24,
		fontWeight: "bold",
		paddingVertical: 10,
	},
});

export default WelcomeScreen;
