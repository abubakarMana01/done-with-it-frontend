import { useState, useEffect } from "react";

export default useFetch = endpoint => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	const request = () => {
		setError(false);
		setIsLoading(true);
		fetch(`https://done-with-it-mana.herokuapp.com/${endpoint}`)
			.then(response => {
				setIsLoading(false);
				return response.json();
			})
			.then(data => {
				setData(data);
			})
			.catch(err => {
				setIsLoading(false);
				setError(true);
				console.log(err);
			});
	};

	useEffect(() => {
		request();
	}, []);

	return { listings: data, isLoading, error, request };
};
