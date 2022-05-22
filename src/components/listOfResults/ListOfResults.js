import { useState, useEffect } from "react";

const ListOfResults = ({ conversionResult }) => {
	const [result, setResult] = useState([]);

	useEffect(() => {
		checkConversionResult();
	}, [conversionResult]);

	const checkConversionResult = () => {
		if (Object.keys(conversionResult).length != 0) {
			setResult(() => [...deleteFirstElem(result), conversionResult]);
		}
	};
	const deleteFirstElem = (array) => {
		if (array.length > 9) {
			const newArr = array.filter((item) => result[0] != item);
			return newArr;
		}
		return array;
	};
	const renderListOfResult = () => {
		if (result && result.length > 0) {
			const list = result.map((item, i) => {
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
	const elem = renderListOfResult();
	return <ul style={{minHeight: "500px"}} className="list-group w-50">{elem}</ul>;
};

export default ListOfResults;
