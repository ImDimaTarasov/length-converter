const OptionOfUnits = ({ arrayOfUnit, groupName, selectedValue }) => {
	const filterForArray = (arr) => {
		const filteredArray = arr.filter((item) => {
			return item.unitName != selectedValue;
		});
		return filteredArray;
	};
	const renderOptionOfUnits = () => {
		if (arrayOfUnit && arrayOfUnit.length > 0) {
			const list = filterForArray(arrayOfUnit).map((item) => {
				return (
					<option value={item.unitName} key={item.id}>
						{item.name} ({item.unitName})
					</option>
				);
			});
			return list;
		}
	};
	const elem = renderOptionOfUnits();
	return <optgroup label={groupName}>{elem}</optgroup>;
};
export default OptionOfUnits;
