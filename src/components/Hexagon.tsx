import React from "react";

interface HexagonProps {
    children?: React.ReactNode;
    width?: string | number;
    height?: string | number;
    strokeColor?: string;
    fill?: string;
    strokeWidth?: number;
    className?: string;
}

const Hexagon: React.FC<HexagonProps> = ({
    children,
    width = "150px",
    height = "130px",
    strokeColor = "#333",
    fill = "none",
    strokeWidth = 2,
    className = "",
}) => {
    const hexClipPath = `
    polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    )
  `;

    return (
        <div
            className="relative"
            style={{
                width,
                height,
            }}
        >
            <div
                className={`w-full h-full overflow-hidden ${className}`}
                style={{
                    clipPath: hexClipPath,
                    WebkitClipPath: hexClipPath,
                    position: "relative",
                }}
            >
                {children}
            </div>

            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon
                    points="50,0 100,25 100,75 50,100 0,75 0,25"
                    fill={fill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            </svg>
        </div>
    );
};

export default Hexagon;
