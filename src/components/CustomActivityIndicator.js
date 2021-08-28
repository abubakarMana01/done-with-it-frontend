import React from "react";
import LottieView from "lottie-react-native";

const CustomActivityIndicator = ({ visible = false }) => {
	if (!visible) return null;
	return <LottieView source={require("../assets/lottie.json")} autoPlay loop />;
};

export default CustomActivityIndicator;
