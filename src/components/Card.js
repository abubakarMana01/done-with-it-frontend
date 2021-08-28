import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
} from "react-native";

import Colors from "../config/Colors";

const Card = ({ title, subTitle, image, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.productContainer}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{ uri: image }} />
					</View>
					<View style={styles.details}>
						<Text style={styles.title}>{title}</Text>
						<Text numberOfLines={2} style={styles.subTitle}>
							${subTitle}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
	},
	productContainer: {
		width: "100%",
		maxWidth: 390,
		backgroundColor: "#fff",
		borderRadius: 15,
		overflow: "hidden",
	},
	imageContainer: {
		width: "100%",
		height: 200,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	details: {
		padding: 20,
	},
	title: {
		fontSize: 16,
		marginBottom: 5,
		color: Colors.black,
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 16,
		color: Colors.secondary,
		marginBottom: 10,
	},
});
