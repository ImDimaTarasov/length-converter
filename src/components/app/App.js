import { useState } from "react";

import Converter from "../converter/Converter";
import ListOfResults from "../listOfResults/ListOfResults";

import "./App.css";

const App = () => {
	const [conversionResult, setConversionResult] = useState([]);
	return (
		<div className="App">
			<h1>LENGTH CONVERTER</h1>
			<Converter
				onConversionDone={(result) => {
					setConversionResult([...conversionResult, result]);
				}}
			/>

			<ListOfResults conversionResult={conversionResult} />
		</div>
	);
};

export default App;
