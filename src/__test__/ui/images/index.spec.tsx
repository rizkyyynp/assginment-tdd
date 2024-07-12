import React from "react";
import {render } from "@testing-library/react";
import Images from "@/components/ui/image";

describe("render images", () => {
    it("should render images", () => {
        const { container } = render(<Images src="https://reqres.in/img/faces/7-image.jpg" alt="Photo of user" />);
        expect(container).toMatchSnapshot();
    });
});
