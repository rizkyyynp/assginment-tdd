import React from "react";
import { ButtonProps } from "./types.type";

const Button = (props: ButtonProps) => {
    const { children, onClick, className, type = "button", disabled  } = props;
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;