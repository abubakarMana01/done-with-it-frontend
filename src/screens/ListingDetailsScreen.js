import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import ListItem from "../components/ListItem";

import Colors from "../config/Colors";

const ListingDetailsScreen = ({ navigation, route: { params } }) => {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback
				onPress={() =>
					navigation.navigate("ViewImage", { imageUri: params.images[0] })
				}
			>
				<View style={styles.productImageContainer}>
					<Image
						style={styles.productImage}
						source={{ uri: params.images[0] }}
					/>
				</View>
			</TouchableWithoutFeedback>

			<View style={styles.productInfo}>
				<Text style={styles.productName}>{params.title}</Text>
				<Text style={styles.productPrice}>${params.price}</Text>

				<View style={styles.userContainer}>
					<ListItem
						title="Abubakar Mana"
						subTitle="5 Listings"
						image={require("../assets/mana01.jpg")}
					/>
				</View>
			</View>
		</View>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
	},
	productImageContainer: {
		height: 300,
		width: "100%",
	},
	productImage: {
		height: "100%",
		width: "100%",
	},
	productInfo: {
		padding: 20,
	},
	productName: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 5,
		color: Colors.black,
	},
	productPrice: {
		fontSize: 18,
		color: Colors.secondary,
		marginBottom: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});
