import { useState, useEffect } from "react";
import OptionOfUnits from "../optionOfUnits/OptionOfUnits";

import { useHttp } from "../../utils/useHttp";

const SelectListOfUnits = (props) => {
	const { name, selectedValue, setValue } = props;
	const request = useHttp();
	const [arrayOfMetricUnit, setArrayOfMetricUnit] = useState([]);
	const [arrayOfImperialUnit, setArrayOfImperialUnit] = useState([]);

	useEffect(() => {
		request("http://localhost:3001/metric").then((data) =>
			setArrayOfMetricUnit(data)
		);
		request("http://localhost:3001/imperial").then((data) =>
			setArrayOfImperialUnit(data)
		);
	}, []);
	return (
		<select
			onChange={(e) => setValue(e.target.value)}
			name={name}
			id={name}
		>
			<OptionOfUnits
				arrayOfUnit={arrayOfMetricUnit}
				groupName="Metryczny"
				selectedValue={selectedValue}
			/>
			<OptionOfUnits
				arrayOfUnit={arrayOfImperialUnit}
				groupName="Imperalny"
				selectedValue={selectedValue}
			/>
		</select>
	);
};

export default SelectListOfUnits;
