const ListOfResults = (props) => {
	const { arrayOfResults } = props;
	const renderOptionOfResults = () => {
		if (arrayOfResults && arrayOfResults.length > 0) {
			const list = arrayOfResults.map((item, i) => {
				return (
					<li key={i}>
						{item.number} {item.from} converts to {item.result}{" "}
						{item.to}
					</li>
				);
			});
			return list;
		}
	};
	const elem = renderOptionOfResults();
	return <div>{elem}</div>;
};

export default ListOfResults;
