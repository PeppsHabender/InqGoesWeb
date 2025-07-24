import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import hb_bg from "../assets/hb_bg.jpg";
import hb_mid from "../assets/hb_mid.png";
import hb_front from "../assets/hb_front.png";
import logo from "../assets/logo.png";

const ParallaxImg = ({scale, src}: { src: string; scale: number }) => (
    <img
        src={src}
        alt=""
        className={"flex-1 w-full h-full object-cover aspect-auto"}
        style={{scale: scale}}
    />
);

const InqLogo = () => (
    <div className="absolute z-10 flex w-full h-full justify-center items-center pointer-events-none">
        <img
            src={logo}
            alt="Logo"
            className="m-auto max-w-[90%] max-h-[30%] object-contain"
        />
    </div>
);

export function InquestParallax() {
    return (
        <div className="h-full">
            <MouseParallaxContainer
                containerStyle={{
                    position: "relative",
                    height: "100%",
                }}
                globalFactorX={0.1}
                globalFactorY={0.1}
                resetOnLeave
            >
                <MouseParallaxChild factorX={0.3} factorY={0.5} className="absolute w-full h-full origin-center">
                    <ParallaxImg src={hb_bg} scale={1.05}/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.5} factorY={0.6} className="absolute w-full h-full origin-center">
                    <ParallaxImg src={hb_mid} scale={1.1}/>
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.9} className="absolute w-full h-full origin-center">
                    <ParallaxImg src={hb_front} scale={1.12}/>
                </MouseParallaxChild>
                <InqLogo/>
            </MouseParallaxContainer>
        </div>
    );
}