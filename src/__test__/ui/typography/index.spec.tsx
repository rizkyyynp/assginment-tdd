import Typography from "@/components/ui/typography";
import { render } from "@testing-library/react";

describe("typography component", () => {
    it("should render typography component", () => {
        const { container } = render(<Typography type="h1">List of Users</Typography>);
        expect(container).toMatchSnapshot();
    });
});