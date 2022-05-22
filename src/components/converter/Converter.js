import { useState, useEffect } from "react";

import SelectListOfUnits from "../selectOfUnits/SelectOfUnits";
import { useHttp } from "../../useHttp";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "bootstrap/dist/css/bootstrap.min.css";
const Converter = ({ conversionResult, setConversionResult }) => {
	//  https://www.npmjs.com/package/convert-units
	const convert = require("convert-units");

	const { request, process, setProcess } = useHttp();

	const [arrayOfMetricUnit, setArrayOfMetricUnit] = useState([]);
	const [arrayOfImperialUnit, setArrayOfImperialUnit] = useState([]);

	const [valueFrom, setValueFrom] = useState("m");
	const [valueTo, setValueTo] = useState("ft");
	const [valueFromInput, setValueFromInput] = useState("0");

	useEffect(() => {
		request("http://localhost:3001/units").then((data) => {
			setArrayOfMetricUnit(data[0].metric);
			setArrayOfImperialUnit(data[0].imperial);
			setProcess("confirmed");
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!valueFromInput || valueFromInput === "0") return;

		const resData = {
			from: valueFrom,
			to: valueTo,
			number: valueFromInput,
			result: convert(valueFromInput).from(valueFrom).to(valueTo),
		};
		if (conversionResult.result != resData.result) {
			setConversionResult(resData);
		}
	};

	if (process === "loading") {
		return (
			<div>
				<Spinner />
			</div>
		);
	} else if (process === "error") {
		return (
			<div>
				<ErrorMessage />
			</div>
		);
	}
	return (
		<>
			<form className="d-flex flex-column border border-primary border-3 rounded p-3 w-50 justify-content-center">
				<div className="wrapper d-flex gap-2 mb-3">
					<div className="input-group ">
						<input
							className="form-control"
							type="number"
							value={valueFromInput}
							onChange={(e) => setValueFromInput(e.target.value)}
						/>
					</div>

					<SelectListOfUnits
						name="unit_from"
						arrayOfMetricUnit={arrayOfMetricUnit}
						arrayOfImperialUnit={arrayOfImperialUnit}
						setValue={setValueFrom}
						selectedOption={valueFrom}
						selectedValue={valueTo}
					/>
					<SelectListOfUnits
						name="unit_to"
						arrayOfMetricUnit={arrayOfMetricUnit}
						arrayOfImperialUnit={arrayOfImperialUnit}
						setValue={setValueTo}
						selectedOption={valueTo}
						selectedValue={valueFrom}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={(e) => handleSubmit(e)}
				>
					convert
				</button>
			</form>
		</>
	);
};

export default Converter;
