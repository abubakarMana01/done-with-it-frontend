import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	AppFormPicker,
	SubmitButton,
	FormImagePicker,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
	{
		label: "Furniture",
		value: 1,
		icon: "floor-lamp",
		backgroundColor: "#fc5c65",
	},
	{
		label: "Cars",
		value: 2,
		icon: "car",
		backgroundColor: "#fd9644",
	},
	{
		label: "Cameras",
		value: 3,
		icon: "camera",
		backgroundColor: "#fed330",
	},
	{
		label: "Games",
		value: 4,
		icon: "cards",
		backgroundColor: "#26de81",
	},
	{
		label: "Clothing",
		value: 5,
		icon: "shoe-heel",
		backgroundColor: "#2bcbba",
	},
	{
		label: "Sports",
		value: 6,
		icon: "basketball",
		backgroundColor: "#45aaf2",
	},
	{
		label: "Movies & Music",
		value: 7,
		icon: "headphones",
		backgroundColor: "#4b7bec",
	},
	{
		label: "Books",
		value: 8,
		icon: "book-open",
		backgroundColor: "#d8bfd8",
	},
	{
		label: "Other",
		value: 9,
		icon: "state-machine",
		backgroundColor: "#588bae",
	},
];

const ListingEditScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: "null",
					images: [],
				}}
				onSubmit={values => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<AppFormField maxLength={255} name="title" placeholder="Title" />
				<AppFormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<AppFormPicker
					items={categories}
					name="category"
					placeholder="Category"
				/>
				<AppFormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</SafeAreaView>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});
