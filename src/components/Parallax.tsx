import { Box, styled } from "@mui/material";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import hb_bg from "@/assets/hb_bg.jpg";
import hb_mid from "@/assets/hb_mid.png";
import hb_front from "@/assets/hb_front.png";
import logo from "@/assets/logo.png";
import { home } from "../consts.ts";

const ParallaxChild = styled(MouseParallaxChild)`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
`;

const ParallaxImg = ({ scale, src }: { src: string; scale: number }) => (
    <img
        src={src}
        alt=""
        style={{
            flex: 1,
            aspectRatio: 16 / 9,
            width: "100%",
            height: "100%",
            scale: `${scale}`,
            objectFit: "cover",
        }}
    />
);

const InqLogo = () => (
    <Box
        sx={{
            position: "absolute",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
        }}
    >
        <img
            src={logo}
            alt="Logo"
            style={{
                margin: "auto",
                maxWidth: "90%",
                maxHeight: "30%",
                objectFit: "contain",
            }}
        />
    </Box>
);

export function InquestParallax() {
    return (
        <Box id={home} height="100%" className="snap-item">
            <MouseParallaxContainer
                containerStyle={{
                    position: "relative",
                    scrollSnapAlign: "start",
                    height: "100%",
                }}
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
            >
                <ParallaxChild factorX={0.3} factorY={0.5}>
                    <ParallaxImg src={hb_bg} scale={1.05} />
                </ParallaxChild>
                <ParallaxChild factorX={0.5} factorY={0.6}>
                    <ParallaxImg src={hb_mid} scale={1.1} />
                </ParallaxChild>
                <ParallaxChild factorX={0.9}>
                    <ParallaxImg src={hb_front} scale={1.12} />
                </ParallaxChild>
                <InqLogo />
            </MouseParallaxContainer>
        </Box>
    );
}
