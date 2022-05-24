import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ListOfResults from "./ListOfResults";

const array = [
	{
		number: "1",
		from: "km",
		to: "m",
		result: "1000",
	},
];

describe("List of results", () => {
	test("list renders", () => {
		render(<ListOfResults conversionResult={array} />);

		expect(screen.getByText("1 km converts to 1000 m")).toBeInTheDocument();
		expect(screen.getByRole("list")).toBeInTheDocument();
	});
	// test("list snapshot", () => {
	// 	const list = render(<ListOfResults conversionResult={array} />);

	// 	expect(list).toMatchSnapshot();
	// });
	// test("list empty snapshot", () => {
	// 	const list = render(<ListOfResults />);

	// 	expect(list).toMatchSnapshot();
	// });
});
