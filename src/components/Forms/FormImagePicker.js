import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../Forms/ErrorMessage";
import ImageInputList from "../ImageInputList";
import { View } from "react-native";

const FormImagePicker = ({ name }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const imageUris = values[name];

	const handleAdd = uri => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = uri => {
		setFieldValue(
			name,
			imageUris.filter(imageUri => imageUri !== uri)
		);
	};

	return (
		<View style={{ marginBottom: 10 }}>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</View>
	);
};

export default FormImagePicker;
