import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import * as Permissions from "expo-permissions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/Colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
	const handlePermission = () => {
		Permissions.askAsync(Permissions.CAMERA)
			.then(({ granted }) => {
				if (!granted) Alert.alert("Permission", "You have to enable permissions to access this service");
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		handlePermission();
	}, []);

	const openLibrary = () => {
		ImagePicker.launchImageLibrary(
			{
				quality: 0.5,
				mediaType: "photo",
			},
			response => {
				try {
					if (!response.didCancel) {
						onChangeImage(response.assets[0].uri);
					}
				} catch (error) {
					console.log("Error reading image", error);
				}
			}
		);
	};

	const handlePress = () => {
		if (!imageUri) openLibrary();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />}
				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ImageInput;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.light,
		borderRadius: 10,
		justifyContent: "center",
		width: 100,
		height: 100,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
