import { alpha, Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme.ts";
import React from "react";

const hexagonPoints = "50 0, 100 25, 100 75, 50 100, 0 75, 0 25";

interface HexImageProps {
    src?: string;
    size?: number | string;
    borderColor?: string;
}

export function HexImage({ borderColor, size, src }: HexImageProps) {
    return (
        <Box sx={{ position: "relative", width: size, height: size }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            >
                <defs>
                    <clipPath id="hexMask">
                        <polygon points={hexagonPoints} />
                    </clipPath>
                </defs>
                <polygon points={hexagonPoints} fill="rgba(0,0,0,0.3)" />
                <image
                    href={src}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#hexMask)"
                />
                <polygon
                    points={hexagonPoints}
                    fill="none"
                    stroke={borderColor ?? theme.palette.primary.main}
                    strokeWidth="1"
                />
            </svg>
        </Box>
    );
}

interface HexButtonProps extends HexImageProps {
    onClick?: () => void;
    text?: string;
    fontSize?: number | string;
    clicked?: boolean;
    mx?: number;
}

export function HexButton({
    borderColor,
    clicked,
    fontSize,
    onClick,
    size,
    text,
    mx,
}: HexButtonProps) {
    const [hovered, setHovered] = React.useState(false);

    const borderColorr = borderColor ?? theme.palette.primary.main;
    return (
        <Box
            sx={{
                position: "relative",
                width: size,
                height: size,
                mx: mx ?? 0,
            }}
            className="buttonPointer"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <defs>
                    <clipPath id="hexMask">
                        <polygon points={hexagonPoints} />
                    </clipPath>
                </defs>
                <polygon
                    points={hexagonPoints}
                    fill={
                        clicked
                            ? borderColorr
                            : hovered
                              ? alpha(borderColorr, 0.1)
                              : "transparent"
                    }
                    onClick={clicked ? undefined : onClick}
                />
                <polygon
                    points={hexagonPoints}
                    fill="none"
                    stroke={borderColorr}
                    strokeWidth="1.5"
                />
            </svg>
            {text ? (
                <Typography
                    fontSize={fontSize}
                    alignContent="center"
                    variant="body1"
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        pointerEvents: "none",
                    }}
                >
                    {text}
                </Typography>
            ) : null}
        </Box>
    );
}
