import { useState } from "react";
import "./App.css";
import SelectListOfUnits from "./components/selectOfUnits/SelectOfUnits";
import ListOfResults from "./components/listOfResults/ListOfResults";

const App = () => {
	//  https://www.npmjs.com/package/convert-units
	const convert = require("convert-units");

	const [valueFrom, setValueFrom] = useState("m");
	const [valueTo, setValueTo] = useState("cm");
	const [valueFromInput, setValueFromInput] = useState(0);

	const [results, setResults] = useState([]);

	const handleSubmit = () => {
		const resData = {
			from: valueFrom,
			to: valueTo,
			number: valueFromInput,
			result: convert(valueFromInput).from(valueFrom).to(valueTo),
		};

		setResults(() => [...results, resData]);
	};
	return (
		<div className="App">
			<input
				type="number"
				value={valueFromInput}
				onChange={(e) => setValueFromInput(e.target.value)}
			/>
			<SelectListOfUnits
				name="unit_from"
				setValue={setValueFrom}
				selectedValue={valueTo}
			/>
			<SelectListOfUnits
				name="unit_to"
				setValue={setValueTo}
				selectedValue={valueFrom}
			/>
			<button onClick={handleSubmit}>convert</button>
			<ListOfResults arrayOfResults={results} />
		</div>
	);
};

export default App;
