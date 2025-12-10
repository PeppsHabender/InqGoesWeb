import './App.css'
import {InquestParallax} from "./components/Parallax.tsx";
import Strategy from "./components/roster/Strategy.tsx";
import Roster from "./components/roster/Roster.tsx";
import ContactUsForm from "./components/ContactUsForm.tsx";
import Media from "./components/Media.tsx";

function App() {
    return (
        <div className="h-screen overflow-y-scroll">
            <div className="h-screen w-screen">
                <InquestParallax />
            </div>
            <Strategy />
            <div className="min-h-screen min-w-screen">
                <Roster />
            </div>
            <div className="min-h-screen min-w-screen">
                <Media />
            </div>
            <div className="h-screen w-screen">
                <ContactUsForm />
            </div>
        </div>
    )
}

export default App