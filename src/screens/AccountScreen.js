import React from "react";
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: Colors.primary,
		},
		targetScreen: "Messages",
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: Colors.secondary,
		},
		targetScreen: "Messages",
	},
];

const AccountScreen = ({ navigation }) => {
	return (
		<View style={styles.accountScreenContainer}>
			<View style={styles.profile}>
				<Image
					style={styles.profilePic}
					source={require("../assets/mana01.jpg")}
				/>
				<ListItem title="Abubakar Mana" subTitle="ym.abubakr7@gmail.com" />
			</View>
			<View style={styles.info}>
				<FlatList
					data={menuItems}
					ItemSeparatorComponent={ListItemSeparator}
					keyExtractor={menuItem => menuItem.title}
					renderItem={({ item }) => (
						<TouchableOpacity
							activeOpacity={0.6}
							style={styles.infoContent}
							onPress={() => navigation.navigate(item.targetScreen)}
						>
							<View style={styles.infoContainer}>
								<Icon
									name={item.icon.name}
									color={Colors.white}
									backgroundColor={item.icon.backgroundColor}
									size={30}
								/>
								<Text style={styles.infoText}>{item.title}</Text>
							</View>

							<View>
								<MaterialCommunityIcons
									name="chevron-right"
									size={30}
									color={Colors.medium}
								/>
							</View>
						</TouchableOpacity>
					)}
				/>

				<TouchableOpacity
					activeOpacity={0.6}
					style={[styles.infoContent, { marginTop: 20 }]}
				>
					<View style={styles.infoContainer}>
						<Icon
							name="logout"
							color={Colors.white}
							backgroundColor={Colors.yellow}
							size={30}
						/>
						<Text style={styles.infoText}>Log Out</Text>
					</View>

					<View>
						<MaterialCommunityIcons
							name="chevron-right"
							size={30}
							color={Colors.medium}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	accountScreenContainer: {
		backgroundColor: Colors.light,
		flex: 1,
		paddingTop: 25,
	},
	profile: {
		backgroundColor: Colors.white,
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	profilePic: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	info: {
		marginTop: 45,
	},
	infoContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	infoContent: {
		backgroundColor: "#fff",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	infoText: {
		marginLeft: 15,
		fontSize: 16,
		fontWeight: "600",
	},
});
