import React from "react";
import { fireEvent, render } from "@testing-library/react";
import HomePageView from "@/components/pages/home";

describe("render home", () => {
    it("should render home", () => {
        const { container } = render(<HomePageView />);
        expect(container).toMatchSnapshot();
    });
    it("should click button submit on home page", () => {
        const { getByText } = render(<HomePageView />);
        const buttonNext = getByText("Next");
        fireEvent.click(buttonNext);
        expect(buttonNext).toBeInTheDocument();

        const buttonPrevious = getByText("Previous");
        fireEvent.click(buttonPrevious);
        expect(buttonPrevious).toBeInTheDocument();

        const buttonReadmore = getByText("Read more");
        fireEvent.click(buttonReadmore);
        expect(buttonReadmore).toBeInTheDocument();
    });
});
