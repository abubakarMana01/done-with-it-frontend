import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../config/Colors";

const ListItem = ({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	showChevrons,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<View style={styles.container}>
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.details}>
							<Text style={styles.title}>{title}</Text>
							{subTitle && (
								<Text numberOfLines={2} style={styles.subTitle}>
									{subTitle}
								</Text>
							)}
						</View>
						{showChevrons && (
							<View style={styles.chevron}>
								<MaterialCommunityIcons
									name="chevron-right"
									size={30}
									color={Colors.medium}
								/>
							</View>
						)}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	chevron: {
		alignSelf: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	details: {
		justifyContent: "flex-start",
		flex: 1,
	},
	title: {
		fontSize: 16,
		color: Colors.black,
		marginBottom: 3,
	},
	subTitle: {
		color: Colors.medium,
	},
});
