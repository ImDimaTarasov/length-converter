import OptionOfUnits from "../optionOfUnits/OptionOfUnits";

const SelectListOfUnits = ({
	name,
	arrayOfUnits,
	selectedValue,
	selectedOption,
	onSetValue,
}) => {
	return (
		<select
			className="form-select"
			onChange={(e) => onSetValue(e.target.value)}
			name={name}
			id={name}
			value={selectedOption}
		>
			<OptionOfUnits
				arrayOfUnit={arrayOfUnits[0].metric}
				groupName="Metryczny"
				selectedValue={selectedValue}
			/>
			<OptionOfUnits
				arrayOfUnit={arrayOfUnits[0].imperial}
				groupName="Imperalny"
				selectedValue={selectedValue}
			/>
		</select>
	);
};

export default SelectListOfUnits;
