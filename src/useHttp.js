import { useState } from "react";

export const useHttp = () => {
	const [process, setProcess] = useState("loading");

	const request = async (url) => {
		setProcess("loading");
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(
					`Could not fetch ${url}, status: ${response.status}`
				);
			}
			const data = await response.json();
			return data;
		} catch (e) {
			setProcess("error");
			throw e;
		}
	};

	return { request, process, setProcess };
};
