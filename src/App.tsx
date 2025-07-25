import './App.css'
import {InquestParallax} from "./components/Parallax.tsx";
import Strategy from "./components/roster/Strategy.tsx";
import Roster from "./components/roster/Roster.tsx";

function App() {
    return (
        <div className="h-screen overflow-y-scroll">
            <div className="h-screen w-screen">
                <InquestParallax />
            </div>
            <Strategy />
            <div className="h-screen w-screen">
                <Roster />
            </div>
        </div>
    )
}

export default App