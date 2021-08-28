import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./src/navigations/AppNavigator";
import navigationTheme from "./src/navigations/navigationTheme";
import { StatusBar } from "react-native";
import Colors from "./src/config/Colors";

const App = () => {
	return (
		<NavigationContainer theme={navigationTheme}>
			<StatusBar backgroundColor={Colors.light} barStyle="dark-content" />
			<AppNavigator />
		</NavigationContainer>
	);
};

export default App;
