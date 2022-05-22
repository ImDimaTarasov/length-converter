import OptionOfUnits from "../optionOfUnits/OptionOfUnits";

const SelectListOfUnits = ({
	name,
	arrayOfMetricUnit,
	arrayOfImperialUnit,
	selectedValue,
	setValue,
	selectedOption,
}) => {
	return (
		<select
			className="form-select"
			onChange={(e) => setValue(e.target.value)}
			name={name}
			id={name}
			value={selectedOption}
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
