import React from "react";
import { ImageProps } from "./types.type";

const Images = (props: ImageProps) => {
    const { src, alt, className } = props;
    return <img src={src} alt={alt} className={className} />;
};

export default Images;
