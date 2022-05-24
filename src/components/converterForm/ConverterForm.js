import { useState } from "react";

import SelectListOfUnits from "../selectListOfUnits/SelectListOfUnits";
import ChangeBtn from "../changeBtn/ChangeBtn";

const ConverterForm = ({ arrayOfUnits, onConversionDone }) => {
	//  https://www.npmjs.com/package/convert-units
	const convert = require("convert-units");

	const [valueFromInputSelect, setValueFromInputSelect] = useState({
		valueFrom: "m",
		valueTo: "ft",
		valueInput: "0",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const { valueFrom, valueTo, valueInput } = valueFromInputSelect;
		if (!valueInput || valueInput === "0") return;
		const res = {
			number: valueInput,
			from: valueFrom,
			to: valueTo,
			result: convert(valueInput).from(valueFrom).to(valueTo),
		};
		onConversionDone(res);
	};

	const swapUnits = () => {
		const valueFrom = valueFromInputSelect.valueFrom;
		const valueTo = valueFromInputSelect.valueTo;
		setValueFromInputSelect({
			...valueFromInputSelect,
			valueFrom: valueTo,
			valueTo: valueFrom,
		});
	};
	const onSetValue = (value, data) => {
		setValueFromInputSelect({
			...valueFromInputSelect,
			[value]: data,
		});
	};

	return (
		<form aria-label="form" className="d-flex flex-column border border-primary border-3 rounded p-3 w-50 justify-content-center">
			<div className="wrapper d-flex gap-2 mb-3">
				<div className="input-group ">
					<input
						className="form-control"
						type="number"
						value={valueFromInputSelect.valueInput}
						onChange={(e) =>
							onSetValue("valueInput", e.target.value)
						}
					/>
				</div>
				<SelectListOfUnits
					name="unit_from"
					arrayOfUnits={arrayOfUnits}
					onSetValue={(data) => onSetValue("valueFrom", data)}
					selectedOption={valueFromInputSelect.valueFrom}
					selectedValue={valueFromInputSelect.valueTo}
				/>

				<ChangeBtn click={swapUnits} />

				<SelectListOfUnits
					name="unit_to"
					arrayOfUnits={arrayOfUnits}
					onSetValue={(data) => onSetValue("valueTo", data)}
					selectedOption={valueFromInputSelect.valueTo}
					selectedValue={valueFromInputSelect.valueFrom}
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
	);
};

export default ConverterForm;
