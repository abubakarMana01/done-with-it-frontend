import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
	{
		id: 1,
		title: "Abubakar Mana",
		description: "Hey! Is this item still available?",
		image: require("../assets/mana01.jpg"),
	},
	{
		id: 2,
		title: "Mosh Hamedani",
		description:
			"I'm interested in this item. When will you be able to post it?",
		image: require("../assets/mosh.jpg"),
	},
];

const MessagesScreen = () => {
	const [messages, setMessages] = useState(initialMessages);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const handleDelete = message => {
		setMessages(messages.filter(m => m.id !== message.id));
	};

	return (
		<SafeAreaView style={styles.messagesContainer}>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<View style={{ padding: 15 }}>
						<ListItem
							showChevrons={true}
							title={item.title}
							subTitle={item.description}
							image={item.image}
							onPress={() => console.log("Message selected", item)}
							renderRightActions={() => (
								<ListItemDeleteAction onPress={() => handleDelete(item)} />
							)}
						/>
					</View>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={isRefreshing}
				onRefresh={() =>
					setMessages([
						...messages,
						{
							id: 3,
							title: "T3",
							description: "D3",
							image: require("../assets/mana01.jpg"),
						},
					])
				}
			/>
		</SafeAreaView>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	messagesContainer: {
		flex: 1,
	},
});
