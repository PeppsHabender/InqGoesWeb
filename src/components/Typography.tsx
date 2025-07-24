import React, {type ElementType } from "react";

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "body"
    | "body-small"
    | "small";

interface Props {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h5",
    h7: "h5",
    body: "p",
    "body-small": "p",
    small: "span"
};

const sizes: Record<Variant, string> = {
    h1: "text-4xl font-bold md:text-6xl lg:text-9xl",
    h2: "text-3xl font-bold md:text-5xl lg:text-8xl",
    h3: "text-2xl font-bold md:text-4xl lg:text-7xl",
    h4: "text-xl font-bold md:text-3xl lg:text-6xl",
    h5: "text-lg font-bold md:text-2xl lg:text-5xl",
    h6: "text-md font-bold md:text-xl lg:text-4xl",
    h7: "text-sm font-bold md:text-lg lg:text-3xl",
    body: "text-md sm:text-lg md:text-xl",
    "body-small": "text-sm sm:text-md ",
    small: "text-xs sm:text-sm"
};

const Typography = ({ variant, children, className, as }: Props) => {
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

export default Typography;
