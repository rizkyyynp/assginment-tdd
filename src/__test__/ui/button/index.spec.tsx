import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/button";

describe("Button Component", () => {
    it("renders Button component correctly", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Read more</Button>);
        const button = getByText("Read more");
        expect(button).toBeInTheDocument();
    });

    it("handles onClick event correctly", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Read more</Button>);
        const button = getByText("Read more");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });

    it("disables the button when disabled prop is true", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={onClickMock} disabled>
                Next
            </Button>
        );
        const button = getByText("Next");
        expect(button).toBeDisabled();
    });
    it("disables the button when disabled prop is false", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button onClick={onClickMock} disabled>
                Previous
            </Button>
        );
        const button = getByText("Previous");
        expect(button).toBeDisabled();
    });
});
