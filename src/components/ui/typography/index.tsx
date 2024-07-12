import React from "react";
import { TypographyProps } from "./types.type";

const Typography = (props: TypographyProps) => {
    const { children, type = "h1", className } = props;

    const TypographyElement = type;
    return <TypographyElement className={className}>{children}</TypographyElement>;
};

export default Typography;
