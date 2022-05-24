import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import OptionOfUnits from "./OptionOfUnits";

const data = {
	array: [
		{
			id: 1,
			name: "Metr",
			unitName: "m",
		},
        {
			id: 2,
			name: "Kilometr",
			unitName: "km",
		},
	],
    groupName: "Metryczny",
	selectedValue: "km",
};
describe("Option in select", () => {
	test("Option renders", () => {
		render(
			<OptionOfUnits
				arrayOfUnit={data.array}
				groupName={data.groupName}
				selectedValue={data.selectedValue}
			/>
		);

		expect(screen.getByText("Metr (m)")).toBeInTheDocument();
	});

});
