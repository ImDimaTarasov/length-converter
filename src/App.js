import { useState } from "react";

import Converter from "./components/converter/Converter";
import ListOfResults from "./components/listOfResults/ListOfResults";

import "./App.css";

const App = () => {
	const [conversionResult, setConversionResult] = useState({});
	return (
		<div className="App">
			<h1>LENGTH CONVERTER</h1>
			<Converter
				setConversionResult={setConversionResult}
				conversionResult={conversionResult}
			/>
			<h3>RESULTS</h3>
			<ListOfResults conversionResult={conversionResult} />
			
		</div>
	);
};

export default App;
