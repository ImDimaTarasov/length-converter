import { useState, useEffect } from "react";

import { useHttp } from "../../useHttp";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import ConverterForm from "../converterForm/ConverterForm";

import "bootstrap/dist/css/bootstrap.min.css";

const Converter = ({ onConversionDone }) => {
	const { request, process, setProcess } = useHttp();
	const [arrayOfUnits, setArrayOfUnits] = useState([]);

	useEffect(() => {
		request("http://localhost:3001/units").then((data) => {
			setArrayOfUnits(data);
			setProcess("confirmed");
		});
		// eslint-disable-next-line
	}, []);
	console.log(arrayOfUnits
		)
	if (process === "loading") {
		return (
			<div>
				<Spinner />
			</div>
		);
	}
	if (process === "error") {
		return (
			<div>
				<ErrorMessage />
			</div>
		);
	}
	return (
		<ConverterForm
			arrayOfUnits={arrayOfUnits}
			onConversionDone={onConversionDone}
		/>
	);
};

export default Converter;
