import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ConverterForm from "./ConverterForm";
const data = {
	"units": [
		{
			"metric": [],
		}
	]
};

describe("Converter form", () => {
	test("Form renders", () => {
		render(<ConverterForm arrayOfUnits={data.units} />);

		expect(screen.queryByRole("form")).toBeInTheDocument();
	});
});
