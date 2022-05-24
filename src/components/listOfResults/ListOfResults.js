const ListOfResults = ({ conversionResult }) => {
	const deleteFirstElem = (array) => {
		if (array.length > 9) {
			const newArr = array.slice(-10);
			return newArr;
		}
		return array;
	};
	const renderListOfResult = (array) => {
		if (array && array.length > 0) {
			const list = deleteFirstElem(array).map((item, i) => {
				return (
					<li key={i} className="list-group-item">
						{item.number} {item.from} converts to {item.result}{" "}
						{item.to}
					</li>
				);
			});
			return list;
		}
	};
	const elements = renderListOfResult(conversionResult);
	if (conversionResult.length === 0) {
		return <div>Please convert</div>;
	}
	return (
		<>
			<h3>RESULTS</h3>
			<ul className="list-group w-50">{elements}</ul>
		</>
	);
};

export default ListOfResults;
