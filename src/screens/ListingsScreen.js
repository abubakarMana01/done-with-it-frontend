import React from "react";
import {
	Text,
	StyleSheet,
	FlatList,
	SafeAreaView,
	ActivityIndicator,
	View,
	Dimensions,
} from "react-native";

import Card from "../components/Card";
import Colors from "../config/Colors";
import routes from "../navigations/routes";
import ButtonComponent from "../components/ButtonComponent";
import CustomActivityIndicator from "../components/CustomActivityIndicator";
import useFetch from "../hooks/useFetch";

const ListingsScreen = ({ navigation }) => {
	const {
		listings,
		isLoading,
		error,
		request: getListings,
	} = useFetch("listings");
	// const [isRefreshing, setIsRefreshing] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			{error && (
				<View style={styles.errorContainer}>
					<Text style={styles.error}>Couldn't retrieve listings</Text>
					<ButtonComponent title="Retry" onPress={getListings} />
				</View>
			)}
			{isLoading && (
				<ActivityIndicator
					animating={true}
					size={100}
					style={{
						position: "absolute",
						top: Dimensions.get("window").height / 2,
						left: Dimensions.get("window").width / 2,
						transform: [{ translateX: -50 }, { translateY: -50 }],
					}}
					color={Colors.primary}
				/>
			)}
			{!isLoading && !error && (
				<FlatList
					data={listings}
					keyExtractor={product => product._id}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={item.price}
							image={item.images[0]}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						/>
					)}
					refreshing={isLoading}
					onRefresh={getListings}
				/>
			)}
		</SafeAreaView>
	);
};

export default ListingsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.light,
		flex: 1,
	},
	errorContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	error: {
		fontSize: 18,
		color: Colors.black,
	},
});
