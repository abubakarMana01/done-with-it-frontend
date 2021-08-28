import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const FeedNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator mode="modal">
			<Stack.Screen
				name="Account"
				component={AccountScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default FeedNavigator;
