import React, { useEffect, useState } from "react";
import * as Permissions from "expo-permissions";
import Location from "@react-native-community/geolocation";

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocation = async () => {
		try {
			const { granted } = await Permissions.askAsync(
				Permissions.LOCATION_FOREGROUND
			);
			if (!granted) return;

			const result = Location.getCurrentPosition(position => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;

				setLocation({ latitude, longitude });
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return location;
};
