import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const FeedNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator
			mode="modal"
			headerMode="none"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Listings" component={ListingsScreen} />
			<Stack.Screen
				name="ListingDetails"
				component={ListingDetailsScreen}
				options={{
					title: "Details",
				}}
			/>
			<Stack.Screen name="ViewImage" component={ViewImageScreen} />
		</Stack.Navigator>
	);
};

export default FeedNavigator;
